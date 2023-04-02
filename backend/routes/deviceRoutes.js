const express = require('express')
const router = express.Router()
const { getDevices } = require('../controllers/deviceController')

// Get Api
router.get('/', getDevices)

module.exports = router