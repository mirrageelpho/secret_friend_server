const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')

router.post('/user', controller.create)
router.post('/authenticate', controller.authenticate)

module.exports = router