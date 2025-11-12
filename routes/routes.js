const express = require('express');
const mongoose =require('mongoose');
const Model = require('../Models/model');
const router = express.Router();
module.exports = router;

router.post('/', async (req, res) => {
  try {
    const markak_202511101237 = new Model(req.body);
    const savedmarkak_202511101237 = await savedmarkak_202511101237.save();
    res.status(201).json(markak_202511101237);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const  markak_202511101237 = await Model.find();
    res.status(200).json( markak_202511101237);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const  markak_202511101237 = await Model.findById(id);
    if (! markak_202511101237) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json( markak_202511101237);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

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
