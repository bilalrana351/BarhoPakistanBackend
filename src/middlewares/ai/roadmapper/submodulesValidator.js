const validateSubmodules = (req, res, next) => {
    const { module } = req.body;
    // Validate module: must be a non-empty array
    if (!module) {
      return res.status(400).json({ error: 'Invalid module data. module must be a non-empty array.' });
    }
    // If validation passes, move to the next middleware/handler
    next();
  };
  
module.exports = validateSubmodules;