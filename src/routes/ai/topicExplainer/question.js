// Import dependencies
const express = require('express');

const askQuestion = require('@/controllers/ai/topicExplainer/questionController'); // Adjust the path as needed

const validateQuestionData = require('@/middlewares/ai/topicExplainer/questionValidator'); // Adjust the path as needed

const tokenValidator = require('@/middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/topicExplainer/question', tokenValidator, validateQuestionData, askQuestion);

module.exports = router;
