// Import dependencies
const express = require('express');

const getmodule = require('@/controllers/retrieve/moduleController'); // Adjust the path as needed

const validatemoduleData = require('@/middlewares/retrieve/moduleValidator'); // Adjust the path as needed

const tokenValidator = require('@/middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/retrieve/module', tokenValidator, validatemoduleData, getmodule);

module.exports = router;
