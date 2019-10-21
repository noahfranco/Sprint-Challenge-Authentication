const express = require("express")
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken"); 

// import user model here 
const Users = require("./Users.Model.js");
const secrets = require("../secrets.js"); 

const router = express.Router()

// It's working 
router.post('/register', (req, res) => {
  // implement registration
  const user = req.body

  const hash = bcrypt.hashSync(user.password, 8)
  user.password = hash 

  if(!hash) {
      res.status(404).json({error: "Please enter the correct credentials"})
  } else {
      Users.add(user)
      .then(response => {
          res.status(200).json(response)
      })
      .catch(error => {
          console.log(error)
          res.status(500).json({error: "Internal Server Error"})
      })
  }
});

// It's working 
router.post('/login', (req, res) => {
  // implement login
  const { username } = req.body
  const { password } = req.body

  if(!username && !password) {
      res.status(401).json({ error: "Wrong password or username" })
  } else {
      Users.addId({ username })
      .first()
      .then(user => {
          if(user && bcrypt.compareSync(password, user.password)) {
              const token = generateToken(user)
              
              res.status(200).json({ message: `Welcome ${user.username}!!`, token })  
          } else {
              res.status(400).json({ error: "please provide credentials"})
          }
      })
      .catch(error => {
          console.log(error)
          res.status(500).json({ error: "Internal Server Error"})
      })
  }
});

// For Hash 
router.get("/hash", (req, res) => {
  const password = req.headers.authorization

  if(password) {
    const hash = bcrypt.hashSync(password, 10)
    res.status(200).json({ hash })
  } else {
    res.status(400).json({ error: "Please provide credentials" })
  }
})

// Generate Token Function 
function generateToken(user) {
  const payload = {
      username: user.username,
      subject: user.id,
  }
  const options = {
      expiresIn: "3h"   
  }
  return jwt.sign(payload, secrets.jwtSecret, options)
}


module.exports = router;
