// Import dependencies
const express = require('express');

const gettopic = require('../../controllers/save/topicController'); // Adjust the path as needed

const validatetopicData = require('../../middlewares/save/topicValidator'); // Adjust the path as needed

const tokenValidator = require('../../middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/save/topic', tokenValidator, validatetopicData, gettopic);

module.exports = router;