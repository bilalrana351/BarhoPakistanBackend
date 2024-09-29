const chain = require('../../../ai/recommendCareer/extractQualities/main')
const errorHandler = require('../../../middlewares/err/errorHandler');

const extractQuality = errorHandler( async (req, res) => {
    const data = req.body;

    // Extract the chat history
    const history = data.history;

    // Invoke the chain with the chat history
    const result = await chain.invoke({
        history: history
    });

    const strengths = result[0]['args']['strengths'];
    const weaknesses = result[0]['args']['weaknesses'];

    // Return the result
    return res.status(200).json({
        strengths: strengths,
        weaknesses: weaknesses
    });
});

module.exports = extractQuality;