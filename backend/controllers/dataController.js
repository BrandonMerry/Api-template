//get data
// route Get /api/data
//access private
const getData = (req, res) => {
  res.status(200).json({ message: 'get data object' })
}

//sets data
// route Post /api/data
//access private
const setData = (req, res) => {
  res.status(200).json({ message: 'create data object' })
}

//Update  data
// route PUT /api/data/:id
//access private
const updateData = (req, res) => {
  res.status(200).json({ message: `update data ${req.params.id}` })
}

//Delete  data
// route delete /api/data/:id
//access private
const deleteData = (req, res) => {
  res.status(200).json({ message: `Delete data ${req.params.id}` })
}

module.exports = {
  getData,
  setData,
  updateData,
  deleteData,
}
