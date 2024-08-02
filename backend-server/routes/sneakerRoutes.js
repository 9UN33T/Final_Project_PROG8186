const express = require('express');
const { getAllSneakers, getSneakerById } = require('../controllers/sneakerCtrl');
const router = express.Router();

router.get('/', getAllSneakers);
router.get('/:id', getSneakerById);

module.exports = router;
