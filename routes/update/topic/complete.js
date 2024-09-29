// Import dependencies
const express = require('express');

const getComplete = require('../../controllers/update/topic/completeController'); // Adjust the path as needed

const validateComplete = require('../../middlewares/update/topic/completeValidator'); // Adjust the path as needed

const tokenValidator = require('../../middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
// router.post('/update/topic/complete', validateComplete, getComplete);
router.post('/update/topic/complete', tokenValidator, validateComplete, getComplete);

module.exports = router;