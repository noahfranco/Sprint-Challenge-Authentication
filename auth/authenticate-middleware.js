const jwt = require("jsonwebtoken"); 
const secrets = require("../secrets.js"); 

/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = (req, res, next) => {
  const token =  req.headers.authorization; 

  if(token) {
      jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
          if(error) {
              res.status(401).json({ message: "bad request" })
          } else {
              req.user = {
                  username: decodedToken.username,
                  department: decodedToken.department
              }
              next()
          }
      })
  } else {
      res.status(401).json({ you: 'shall not pass!' });
  }
}
