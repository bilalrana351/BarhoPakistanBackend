// Import dependencies
const express = require('express');

const getsubmodules = require('../../../controllers/ai/roadmapper/submodulesController'); // Adjust the path as needed

const validatesubmodulesData = require('../../../middlewares/ai/roadmapper/submodulesValidator'); // Adjust the path as needed

const tokenValidator = require('../../../middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/roadmapper/submodules', tokenValidator, validatesubmodulesData, getsubmodules);

module.exports = router;
