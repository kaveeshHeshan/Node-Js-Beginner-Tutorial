const express = require('express')
const router = express.Router()
const { getLocations, addLocation } = require('../controllers/locationsController')

// Get Api
router.get('/', getLocations)

// Post Api
router.post('/', addLocation)

// // Put Api
// router.put('/:id', (req, res) => {
//     res.status(200).json({ message: `Update Locations id ${req.params.id} record` })
// })

// // delete Api
// router.delete('/:id', (req, res) => {
//     res.status(200).json({ message: `Delete Locations id ${req.params.id} record` })
// })

module.exports = router