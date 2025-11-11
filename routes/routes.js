const express = require('express');
const Model = require('../models/model');
const router = express.Router();
module.exports = router;


router.patch('/:id', async (req, res) => {
 try {
 const id = req.params.id;
 const updatedmarkak_202511101237 = req.body;
 const options = { new: true };
 const result = await Model.findByIdAndUpdate(
 id, updatedmarkak_202511101237, options
 )
 res.send(result)
 }
 catch (error) {
 res.status(400).json({ message: error.message })
 }
});


router.delete('/:id', async (req, res) => {
 try {
 const id = req.params.id;
 const markak_202511101237 = await Model.findByIdAndDelete(id)
 res.send(`Document with ${markak_202511101237.name} has been deleted..`)
 }
 catch (error) {
 res.status(400).json({ message: error.message })
 }
})
