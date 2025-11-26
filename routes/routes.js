const express = require('express');
const Model = require('../Models/model');
const router = express.Router();
const markak = require('../controllers/markak.controller')

router.post('/', markak.createMarka)
router.get('/', markak.getAllMarka)
router.get('/:id', markak.getMarka)
router.delete('/:id', markak.deleteMarka)
router.patch('/:id', markak.patchMarka)

module.exports = router;