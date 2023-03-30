const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

// middleware to get body data from controller
//body parser for raw json
app.use(express.json())

// for url middleward
app.use(express.urlencoded({ extended: false }))

app.use('/api/data', require('./routes/dataRoutes'))

// overwrites default error handler with middlewares

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
