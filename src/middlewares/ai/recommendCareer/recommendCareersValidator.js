const validateHistory = (req, res, next) => {
    const { strengths, weaknesses } = req.body;
  
    // Check if history exists and is an array
    if (!strengths || !Array.isArray(strengths)) {
      return res.status(400).json({ error: 'Invalid strength data. strength must be a non-empty array.' });
    }

    if (!weaknesses || !Array.isArray(weaknesses)) {
        return res.status(400).json({ error: 'Invalid weakness data. weakness must be a non-empty array.' });
      }

    // If validation passes, move to the next middleware/handler
    next();
  };
  
  module.exports = validateHistory;
