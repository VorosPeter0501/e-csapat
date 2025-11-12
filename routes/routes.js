const express = require('express');
const Model = require('../Models/model');
const router = express.Router();
module.exports = router;

router.post('/', async (req, res) => {
  try {
    const newDocument = new Model(req.body);
    const savedDocument = await newDocument.save();
    res.status(201).json(savedDocument);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const documents = await Model.find();
    res.status(200).json(documents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const document = await Model.findById(id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json(document);
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
