const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

// Register user account
router.post('/register',
    UserController.register
);

// Login to a user account
router.post('/login',
    UserController.login
);

module.exports = router;