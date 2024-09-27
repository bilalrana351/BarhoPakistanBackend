const validateSubmodules = (req, res, next) => {
    const { module, submodule } = req.body;
  
    // Validate module: must be a non-empty string
    if (!module || module.length === 0) {
      return res.status(400).json({ error: 'Invalid module data. module must be a non-empty string.' });
    }

    if (!submodule || submodule.length === 0) {
        return res.status(400).json({ error: 'Invalid submodule data. module must be a non-empty string.' });
      }
      
    // If validation passes, move to the next middleware/handler
    next();
  };
  
module.exports = validateSubmodules;
  