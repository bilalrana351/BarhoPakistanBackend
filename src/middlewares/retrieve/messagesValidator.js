const validateMessages = (req, res, next) => {
    const { module, submodule, topic } = req.body;
  
    // Module must be a non-empty string
    if (!module || typeof module !== 'string') {
      return res.status(400).json({ error: 'Invalid module data. module must be a non-empty string.' });
    }

    // Submodule must be a non-empty string
    if (!submodule || typeof submodule !== 'string') {
        return res.status(400).json({ error: 'Invalid submodule data. submodule must be a non-empty string.' });
    }

    // Topic must be a non-empty string
    if (!topic || typeof topic !== 'string') {
        return res.status(400).json({ error: 'Invalid topic data. topic must be a non-empty string.' });
    }
    // If validation passes, move to the next middleware/handler
    next();
  };

module.exports = validateMessages;
  