// Import dependencies
const express = require('express');
const askQuestion = require('@/controllers/ai/recommendCareer/recommendCareersController'); // Adjust the path as needed
const validateSchema = require('@/middlewares/ai/recommendCareer/recommendCareersValidator'); // Adjust the path as needed
const tokenValidator = require('@/middlewares/auth/tokenValidator');
const router = express.Router();

// Apply the middleware before the handler
router.post('/recommendCareer/recommend', validateSchema, askQuestion);

module.exports = router;
