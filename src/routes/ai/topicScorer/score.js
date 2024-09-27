// Import dependencies
const express = require('express');

const askScore = require('@/controllers/ai/topicScorer/scoreController'); // Adjust the path as needed

const validateScoreData = require('@/middlewares/ai/topicScorer/scoreValidator'); // Adjust the path as needed

const tokenValidator = require('@/middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/topicScorer/score', tokenValidator, validateScoreData, askScore);

module.exports = router;
