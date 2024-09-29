const validateMessages = (req, res, next) => {
    const { module, submodule, messages } = req.body;
  
    // Module must be a non-empty string
    if (!module || typeof module !== 'string') {
      return res.status(400).json({ error: 'Invalid module data. module must be a non-empty string.' });
    }

    // Submodule must be a non-empty string
    if (!submodule || typeof submodule !== 'string') {
        return res.status(400).json({ error: 'Invalid submodule data. submodule must be a non-empty string.' });
    }

    // messages must be a non-empty string
    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Invalid messages data. messages must be a non-empty string.' });
    }
    // If validation passes, move to the next middleware/handler
    next();
  };

module.exports = validateMessages;
  