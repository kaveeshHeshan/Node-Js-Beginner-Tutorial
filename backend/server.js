const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Get Api
app.use('/api/locations', require('./routes/api'))
app.use('/api/devices', require('./routes/deviceRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server starte on port ${port}`))