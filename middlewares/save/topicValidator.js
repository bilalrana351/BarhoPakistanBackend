const validateModule = (req, res, next) => {
    const { module, submodule, topic } = req.body;
  
    // Module must be a non-empty string
    if (!module || typeof module !== 'string') {
      return res.status(400).json({ error: 'Invalid module data. module must be a non-empty string.' });
    }

    if (!submodule || typeof submodule !== 'string') {
        return res.status(400).json({ error: 'Invalid submodule data. submodule must be a non-empty string.' });
    }

    if (!topic || !Array.isArray(topic)) {
        return res.status(400).json({ error: 'Invalid topic data. topic must be a non-empty string.' });
    }
    // If validation passes, move to the next middleware/handler
    next();
  };
  
module.exports = validateModule;
  