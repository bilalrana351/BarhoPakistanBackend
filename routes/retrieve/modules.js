// Import dependencies
const express = require('express');

const getmodules = require('../../controllers/retrieve/modulesController'); // Adjust the path as needed

const validateModuleData = require('../../middlewares/retrieve/modulesValidator'); // Adjust the path as needed

const tokenValidator = require('../../middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.get('/retrieve/modules', tokenValidator, validateModuleData, getmodules);

module.exports = router;
