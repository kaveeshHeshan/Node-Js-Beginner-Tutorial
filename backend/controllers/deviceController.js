const asyncHandler = require('express-async-handler')

const Device = require('../model/device')

// @desc Get all location data
// @route GET  /api/locations
const getDevices = asyncHandler(
    async (req, res) => {

        const devices = await Device.find()
        res.status(200).json({ locations: devices })
    }
)

module.exports = {
    getDevices,
}