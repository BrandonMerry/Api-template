const express = require('express')
const { restart } = require('nodemon')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/data', require('./routes/dataRoutes'))

app.listen(port, () => console.log(`Server is running on port ${port}`))
