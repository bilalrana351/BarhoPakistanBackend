const validateExtractQualityData = (req, res, next) => {
    const { history } = req.body;
  
    // Validate history: must be a non-empty array
    if (!history || !Array.isArray(history)) {
      return res.status(400).json({ error: 'Invalid history data. History must be a non-empty array.' });
    }
  
    // If validation passes, move to the next middleware/handler
    next();
};

module.exports = validateExtractQualityData;
