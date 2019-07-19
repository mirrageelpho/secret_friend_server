const user = require('./user.routes')
const friends = require('./friends.routes')
const shuffler = require('./shuffler.routes')

const routes = [user, friends, shuffler]

module.exports = routes