const express = require('express');
// const extractQuality = require('@/controllers/ai/recommendCareer/extractQualitiesController');
const extractQuality = require('../../../controllers/ai/recommendCareer/extractQualitiesController');
const validateExtractQualityData = require('../../../middlewares/ai/recommendCareer/extractQualitiesValidator');

// const validateExtractQualityData = require('@/middlewares/ai/recommendCareer/extractQualitiesValidator');
const tokenValidator = require('../../../middlewares/auth/tokenValidator');

const router = express.Router();

// Apply the validation middleware before the main handler
router.post('/recommendCareer/extract', tokenValidator, validateExtractQualityData, extractQuality);

module.exports = router;