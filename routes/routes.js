const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const getAll = require('../controller/marka.controller')
const createPost = require('../controller/marka.controller')
const getById = require('../controller/marka.controller')
const Patch = require('../controller/marka.controller')
const deleteMarka = require('../controller/marka.controller')

router.post('/', createPost);
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id', Patch);
router.delete('/:id', deleteMarka );

module.exports = router;