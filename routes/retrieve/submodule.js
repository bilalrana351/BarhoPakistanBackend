// Import dependencies
const express = require('express');

const getsubmodule = require('../../controllers/retrieve/submoduleController'); // Adjust the path as needed

const validatesubmoduleData = require('../../middlewares/retrieve/submoduleValidator'); // Adjust the path as needed

const tokenValidator = require('../../middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/retrieve/submodule', tokenValidator, validatesubmoduleData, getsubmodule);

module.exports = router;
