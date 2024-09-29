// Import dependencies
const express = require('express');
const askQuestion = require('../../../controllers/ai/topicScorer/questionController'); // Adjust the path as needed

const validateQuestionData = require('../../../middlewares/ai/topicScorer/questionValidator'); // Adjust the path as needed

const tokenValidator = require('../../../middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/topicScorer/question', tokenValidator, validateQuestionData, askQuestion);

module.exports = router;
