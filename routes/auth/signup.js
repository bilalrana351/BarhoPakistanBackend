const express = require('express');
const router = express.Router();
const signupController = require('../../controllers/auth/signupController');
const validateSignup = require('../../middlewares/auth/signupValidator');

// Route for signup
router.post('/auth/signup', validateSignup, signupController);

module.exports = router;
