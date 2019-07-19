require('dotenv/config')
const db = require('mongoose')
const uri = process.env.DB_URI
const config = {
    useNewUrlParser: true,
    useCreateIndex: true
}
db.connect(uri, config)

db.Promise = global.Promise;

module.exports = db