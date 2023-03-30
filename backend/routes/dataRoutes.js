// use this file to seperate routes form sever folder
const { Router } = require('express')
const express = require('express')
const router = express.Router()
//define that const so that the router knows where to get data from in controller
const {
  getData,
  setData,
  updateData,
  deleteData,
} = require('../controllers/dataController')

//gets data from controller function called getData - changed routes
router.route('/').get(getData).post(setData)
router.route('/:id').delete(deleteData).put(updateData)

module.exports = router
