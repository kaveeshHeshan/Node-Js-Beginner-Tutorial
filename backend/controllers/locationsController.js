const asyncHandler = require('express-async-handler')
// @desc Get all location data
// @route GET  /api/locations
const getLocations = asyncHandler(
    async (req, res) => {
        res.status(200).json({ message: "Get Locations" })
    }
)

// @desc Store location data
// @route POST  /api/locations
const addLocation = asyncHandler(
    async (req, res) => {

        if (!req.body.name) {
            res.status(400)
            throw new Error('The name field is required!')
        }
        res.status(200).json({ message: "Add Location" })
    }
)

module.exports = {
    getLocations,
    addLocation
}