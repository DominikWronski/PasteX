const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

// Register user account
router.post('/register',
    UserController.register
);

module.exports = router;