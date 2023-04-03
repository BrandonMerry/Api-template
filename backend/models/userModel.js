const mongoose = require('mongoose')

const userSchema = mongoose.Scheema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add a an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  //time stamp fields

  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User, userSchema')
