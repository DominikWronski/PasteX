const express = require('express');
const PasteController = require('../controllers/PasteController');

const router = express.Router();

// Get all pastes
router.get('/',
    PasteController.getPastes
);

module.exports = router;