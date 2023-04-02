const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required!']
    },
    address: {
        type: String,
        required: [true, 'The address field is required!']
    },
    phone: {
        type: String,
        required: [true, 'The phone field is required!']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Location', locationSchema)