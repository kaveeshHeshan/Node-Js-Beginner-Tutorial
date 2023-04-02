const asyncHandler = require('express-async-handler')

const Location = require('../model/location')
const Device = require('../model/device')

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

        if (!req.body.name || !req.body.address || !req.body.phone || !req.body.location || req.body.type.length <= 0 || req.body.status.length <= 0) {
            res.status(400)
            throw new Error('Please fill required fields!')
        }

        const location = await Location.create({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone
        })
        for (var i = 0; i < req.body.type.length; i++) {
            const device = await Device.create({
                location: location.id,
                type: req.body.type[i],
                status: req.body.status[i]
            })
        }



        res.status(200).json({ createLocation: location })

    }
)

module.exports = {
    getLocations,
    addLocation
}