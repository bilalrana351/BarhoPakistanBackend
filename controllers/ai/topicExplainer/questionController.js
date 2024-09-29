const chain = require('../../../ai/topicExplainer/question/main');
const errorHandler = require('../../../middlewares/err/errorHandler');

const getQuestion = errorHandler( async (req, res) => {
    const data = req.body;

    const module = data.module

    const submodules = data.submodule

    const topic = data.topic

    const history = data.history

    const input = data.input

    const question = await chain.invoke({
        module: module,
        submodule: submodules,
        topic: topic,
        history: history,
        input: input
    })


    return res.status(200).json({
        message: question.content
    });
});

module.exports = getQuestion;