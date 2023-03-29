// use this file to seperate routes form sever folder
const express = require('express')
const router = express.Router()
//define that const so that the router knows where to get data from in controller
const {
  getData,
  setData,
  updateData,
  deleteData,
} = require('../controllers/dataController')

//gets data from controller function called getData
router.get('/', getData)
router.post('/', setData)
router.put('/:id', updateData)
router.delete('/:id', deleteData)

module.exports = router
