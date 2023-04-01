const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

// middleware to get body data from controller
//body parser for raw json
app.use(express.json())

// for url middleward
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

// overwrites default error handler with middlewares

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
