const chain = require('../../../ai/recommendCareer/question/main');
const abilities = require('../../../data/abilities');
const errorHandler = require('../../../middlewares/err/errorHandler');

const askQuestion = errorHandler( async (req, res) => {
    const data = req.body;

    // Extract the chat history
    const history = data.history;

    const questionNumber = data.questionNumber;

    const answer = data.answer;

    // Invoke the chain with the chat history
    const result = await chain.invoke({
        input: answer,
        ability: abilities[questionNumber],
        history: history
    });

    // Return the result
    return res.status(200).json({
        message: result.content
    });
});

module.exports = askQuestion;