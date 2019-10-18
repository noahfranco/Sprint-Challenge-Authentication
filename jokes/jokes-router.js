// const axios = require('axios');
const express = require("express"); 

const Users = require("../auth/Users.Model.js"); 
const authenticate = require("../auth/authenticate-middleware.js"); 

const router = express.Router()

// It's working!! 
router.get("/", authenticate, (req, res) => { 
    Users.find() 
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    })
})

module.exports = router;
