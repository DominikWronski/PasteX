const express = require('express');
const PasteController = require('../controllers/PasteController');

const router = express.Router();

// Get all pastes
router.get('/',
    PasteController.getPastes
);

// Get specific paste
router.get('/:id',
    PasteController.getPaste
);

module.exports = router;