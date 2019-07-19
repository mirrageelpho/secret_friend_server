const db = require('../db/mongoose')

const userSchema = new db.Schema({
    
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true}

}, {timestamps:true})

const users = db.model('user', userSchema)

module.exports = users;