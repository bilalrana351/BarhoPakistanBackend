const chain = require('../../../ai/topicScorer/score/main');
const errorHandler = require('../../../middlewares/err/errorHandler');

const getScore = errorHandler( async (req, res) => {
    const data = req.body;

    const module = data.module

    const submodules = data.submodule

    const topic = data.topic

    const input = data.input

    const history = data.history.slice(2); // First two are regulation

    // Iterate over the history, to get the conversation and then show the response of the user
    const aiResp = await chain.invoke({
        module: module,
        submodule: submodules,
        topic: topic,
        history: history,
        input: input
    })

    const score = aiResp[0]['args'].score;

    const feedback = aiResp[0]['args'].feedback;

    return res.status(200).json({
        score: score,
        feedback: feedback
    });
});

module.exports = getScore;