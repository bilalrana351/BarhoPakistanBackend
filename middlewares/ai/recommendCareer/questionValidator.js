const abilities = require('../../../data/abilities');

const validateQuestionData = (req, res, next) => {
  const { history, questionNumber, answer } = req.body;

  if (!answer || typeof answer !== 'string' || answer.trim() === '') {
    return res.status(400).json({ error: 'Invalid answer data. Answer must be a non-empty string.' });
  }

  // Validate history: must be a non-empty array
  if (!history || !Array.isArray(history) || history.length === 0) {
    return res.status(400).json({ error: 'Invalid history data. History must be a non-empty array.' });
  }

  // Validate questionNumber: must be a valid index in abilities array
  if (
    questionNumber === undefined ||
    questionNumber < 0 ||
    questionNumber >= abilities.length ||
    typeof questionNumber !== 'number'
  ) {
    return res.status(400).json({ error: 'Invalid question number. It must be a valid index within the abilities array.' });
  }

  // If both validations pass, move to the next middleware/handler
  next();
};

module.exports = validateQuestionData;
