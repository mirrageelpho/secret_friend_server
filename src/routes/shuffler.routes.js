const express = require('express')
const controller = require('../controllers/shuffleCrontroller')
const authMiddleware = require('../services/authMiddleware')
const router = express.Router()

router.use('/make_secret_friend', authMiddleware)
    router.get('/make_secret_friend', controller.shake)

module.exports = router