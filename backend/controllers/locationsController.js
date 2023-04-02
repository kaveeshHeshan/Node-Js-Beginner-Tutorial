const asyncHandler = require('express-async-handler')

const Location = require('../model/location')

// @desc Get all location data
// @route GET  /api/locations
const getLocations = asyncHandler(
    async (req, res) => {

        const locations = await Location.find()
        res.status(200).json({ locations: locations })
    }
)

// @desc Store location data
// @route POST  /api/locations
const addLocation = asyncHandler(
    async (req, res) => {

        if (!req.body.name || !req.body.address || !req.body.phone) {
            res.status(400)
            throw new Error('Please fill required fields!')
        }

        const location = await Location.create({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone
        })

        res.status(200).json({ createLocation: location })
    }
)

module.exports = {
    getLocations,
    addLocation
}