const chain = require('@/ai/roadmapper/topics/main');
const errorHandler = require('@/middlewares/err/errorHandler');

const getTopics = errorHandler( async (req, res) => {
    const data = req.body;

    const module = data.module

    const submodules = data.submodule

    const resp = await chain.invoke({
        module: module,
        submodule: submodules
    })

    const topics = resp[0]['args']['topics']

    return res.status(200).json({
        topics: topics
    });
});

module.exports = getTopics;