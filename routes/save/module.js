// Import dependencies
const express = require('express');

const getModules = require('../../controllers/save/moduleController'); // Adjust the path as needed

const validateModulesData = require('../../middlewares/save/moduleValidator'); // Adjust the path as needed

const tokenValidator = require('../../middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/save/module', tokenValidator, validateModulesData, getModules);

module.exports = router;