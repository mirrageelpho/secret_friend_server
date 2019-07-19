const express = require('express')
const router = express.Router()
const controller = require('../controllers/friendController')
const authMiddleware = require('../services/authMiddleware')

router.use('/friends', authMiddleware)
    router.get('/friends', controller.findAll)
    router.delete('/friends/:id', controller.delete)
    router.post('/friends', controller.create)
    router.put('/friends/:id', controller.update)

module.exports = router