// Import dependencies
const express = require('express');

const gettopics = require('../../../controllers/ai/roadmapper/topicsController'); // Adjust the path as needed

const validatetopicsData = require('../../../middlewares/ai/roadmapper/topicsValidator'); // Adjust the path as needed

const tokenValidator = require('../../../middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/roadmapper/topics', tokenValidator, validatetopicsData, gettopics);

module.exports = router;
