const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const {
	getAll,
	createPost,
	getById,
	patchMarka,
	deleteMarka,
} = require('../controller/marka.controller');

router.post('/', createPost);
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id', patchMarka);
router.delete('/:id', deleteMarka);

module.exports = router;