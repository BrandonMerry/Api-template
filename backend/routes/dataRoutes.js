// use this file to seperate routes form sever folder
const express = require('express')
const router = express.Router()

// use roter and pulls apu from app.use in server.js
router.get('/', (req, res) => {
  res.status(200).json({ message: 'get data oject from server' })
})
router.post('/', (req, res) => {
  res.status(200).json({ message: 'create data object' })
})
router.put('/:id', (req, res) => {
  res.status(200).json({ message: `update ${req.params.id}` })
})
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `delete ${req.params.id}` })
})

module.exports = router
