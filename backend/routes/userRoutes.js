const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')

//when you make a post request, you add a user
//calls a controller function called register user
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router
