const db = require('../db/mongoose')

const friendsSchema = new db.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true}
}, {timestemps: true})

const friends = db.model('friends', friendsSchema)
module.exports = friends