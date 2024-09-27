const validateQuestion = (req, res, next) => {
    const { module, submodule, topic, history, input } = req.body;
  
    // Validate module: must be a non-empty string
    if (!module || !typeof module === 'string') {
      return res.status(400).json({ error: 'Invalid module data. module must be a non-empty string.' });
    }

    // Validate submodule: must be a non-empty string
    if (!submodule || !typeof submodule === 'string') {
      return res.status(400).json({ error: 'Invalid submodule data. submodule must be a non-empty string.' });
    }

    // Topic must be a non-empty string
    if (!topic || !typeof topic === 'string') {
        return res.status(400).json({ error: 'Invalid topic data. topic must be a non-empty string.' });
    }

    // The history must be a non-empty array, and each element must be an array of size 2
    if (!history || !Array.isArray(history) || history.length === 0 || !history.every(element => Array.isArray(element) && element.length === 2)) {
        return res.status(400).json({ error: 'Invalid history data. history must be a non-empty array, and each element must be an array of size 2.' });
    }

    // every first element of the indivual elements in history must be a string either 'ai' or 'human'
    if (!history.every(element => element[0] === 'ai' || element[0] === 'human' || element[0] === 'rec')) {
        return res.status(400).json({ error: 'Invalid history data. every first element of the indivual elements in history must be a string either "ai" or "human".' });
    }

    if (!typeof input === 'string') {
      return res.status(400).json({ error: 'Invalid input data. topic input be a non-empty string.' });
    }    
    // If validation passes, move to the next middleware/handler
    next();
  };
  
module.exports = validateQuestion;
  