// Import dependencies
const express = require('express');

const getmessages = require('@/controllers/retrieve/messagesController'); // Adjust the path as needed

const validatemessagesData = require('@/middlewares/retrieve/messagesValidator'); // Adjust the path as needed

const tokenValidator = require('@/middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/retrieve/messages', tokenValidator, validatemessagesData, getmessages);

module.exports = router;
