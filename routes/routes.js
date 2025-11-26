const express = require('express');
const mongoose = require('mongoose');
const Model = require('../Models/model');
const router = express.Router();




router.post('/', async (req, res) => {
  try {
    const markak = new Model(req.body);
    const savedmarkak = await markak.save();
    res.status(201).json(savedmarkak);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



router.get('/', async (req, res) => {
  try {
    const markak = await Model.find();
    res.status(200).json(markak);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const markak = await Model.findById(id);

    if (!markak) {
      return res.status(404).json({ message: 'Document not found' });
    }

    res.status(200).json(markak);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }


    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'üres adat' });
    }

    const result = await Model.findByIdAndUpdate(id, req.body, { new: true });

    if (!result) {
      return res.status(404).json({ message: 'Márka nem található' });
    }

    res.status(200).json(result);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const markak = await Model.findByIdAndDelete(id);

    if (!markak) {
      return res.status(404).json({ message: 'Document not found' });
    }

    res.status(200).json({ message: 'Deleted', deleted: markak });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;