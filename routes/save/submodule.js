// Import dependencies
const express = require('express');

const getsubmodule = require('../../controllers/save/submoduleController'); // Adjust the path as needed

const validatesubmoduleData = require('../../middlewares/save/submoduleValidator'); // Adjust the path as needed

const tokenValidator = require('../../middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the middleware before the handler
router.post('/save/submodule', tokenValidator, validatesubmoduleData, getsubmodule);

module.exports = router;