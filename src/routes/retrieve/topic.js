// Import dependencies
const express = require('express');

const gettopic = require('@/controllers/retrieve/topicController'); // Adjust the path as needed

const validatetopicData = require('@/middlewares/retrieve/topicValidator'); // Adjust the path as needed

const tokenValidator = require('@/middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/retrieve/topic', tokenValidator, validatetopicData, gettopic);

module.exports = router;
