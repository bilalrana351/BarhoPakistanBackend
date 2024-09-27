const validatesubmodule = (req, res, next) => {
    const { module, submodule } = req.body;
  
    // Module must be a non-empty string
    if (!module || typeof module !== 'string') {
      return res.status(400).json({ error: 'Invalid module data. module must be a non-empty string.' });
    }

    // Submodule must be a non-empty string
    if (!submodule || typeof submodule !== 'string') {
        return res.status(400).json({ error: 'Invalid submodule data. submodule must be a non-empty string.' });
    }

    next();
  };

module.exports = validatesubmodule;
  