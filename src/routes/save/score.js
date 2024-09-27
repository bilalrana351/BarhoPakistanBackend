// Import dependencies
const express = require('express');

const getscore = require('@/controllers/save/scoreController'); // Adjust the path as needed

const validatescoreData = require('@/middlewares/save/scoreValidator'); // Adjust the path as needed

const tokenValidator = require('@/middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/save/score', tokenValidator, validatescoreData, getscore);

module.exports = router;