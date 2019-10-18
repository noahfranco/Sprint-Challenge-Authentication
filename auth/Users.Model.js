const db = require("../database/dbConfig.js"); 

module.exports = {
    add,
    addId, 
    find, 
    findById
}

function find() { // users
    return db("users")
    .select("id", "username", "password") 
}

function findById(id) {
    return db("users")
    .where({ id })
    .first()
}

function add(user) { // register
    return db("users")
    .insert(user, "id")
    .then(ids => {
        return findById([ids]) 
    })
}
function addId(filter) { // login and jokes 
    return db("users")
    .where(filter)
}