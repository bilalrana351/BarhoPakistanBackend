const chain = require('@/ai/recommendCareer/recommendCareers/main');
const errorHandler = require('@/middlewares/err/errorHandler');

const askQuestion = errorHandler(async (req, res) => {
    const data = req.body;

    const strengths = data.strengths;

    const weaknesses = data.Weaknesses;

    // Invoke the chain with the chat history
    const result = await chain.invoke({
        strengths: strengths,
        weaknesses: weaknesses
    });

    const careers = result[0]['args']['careers'];

    // Return the result
    return res.status(200).json({
        careers: careers
    });

});

module.exports = askQuestion;