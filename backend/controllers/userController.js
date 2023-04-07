const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// asyncHandler(async .. makes everything async

// description Register a  User
// route POST /api/users
// access Public
const registerUser = asyncHandler(async (req, res) => {
  // destured body data
  const { name, email, password } = req.body

  // validation
  if (!name || email || password) {
    res.status(400)
    throw new Error('please add all the fields')
  }

  res.json({ message: 'Register a user here' })
})

// description User Regestration
// route POST /api/login
// access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'user login' })
})

// description gets users data form DB
// route GET /api/users/me
// access Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'returns user data' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
