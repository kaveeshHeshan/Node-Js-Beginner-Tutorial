const mongoose = require('mongoose')

const deviceSchema = mongoose.Schema({
    location: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'The name field is required!'],
        ref: 'Device'
    },
    type: {
        type: String,
        required: [true, 'The address field is required!']
    },
    status: {
        type: String,
        required: [true, 'The phone field is required!']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Device', deviceSchema)