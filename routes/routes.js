const express = require('express');
const Model = require('../Models/model');
const router = express.Router();
const markak = require('../controllers/markak.controller')

router.post('/', markak.createMarka)
router.get('/', markak.getAllMarka)
router.get('/:id', markak.getMarka)

module.exports = router;