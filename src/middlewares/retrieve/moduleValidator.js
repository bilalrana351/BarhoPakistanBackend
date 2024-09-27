const validatemodule = (req, res, next) => {
    const { module } = req.body;
  
    // Module must be a non-empty string
    if (!module || typeof module !== 'string') {
      return res.status(400).json({ error: 'Invalid module data. module must be a non-empty string.' });
    }

    next();
  };

module.exports = validatemodule;
  