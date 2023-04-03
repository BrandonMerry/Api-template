// description Register a  User
// route POST /api/users
// access Public
const registerUser = (req, res) => {
  res.json({ message: 'Register a user here' })
}

// description User Regestration
// route POST /api/login
// access Public
const loginUser = (req, res) => {
  res.json({ message: 'user login' })
}

// description gets users data form DB
// route GET /api/users/me
// access Public
const getMe = (req, res) => {
  res.json({ message: 'returns user data' })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
