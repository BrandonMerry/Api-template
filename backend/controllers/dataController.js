const asyncHandler = require('express-async-handler')
// express async handler

//get data
// route Get /api/data
//access private
const getData = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'get data object' })
})

//sets data
// route Post /api/data
//access private
const setData = asyncHandler(async (req, res) => {
  // gets the body data
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({ message: 'create data object' })
})

//Update  data
// route PUT /api/data/:id
//access private
const updateData = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update data ${req.params.id}` })
})

//Delete  data
// route delete /api/data/:id
//access private
const deleteData = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete data ${req.params.id}` })
})

module.exports = {
  getData,
  setData,
  updateData,
  deleteData,
}
