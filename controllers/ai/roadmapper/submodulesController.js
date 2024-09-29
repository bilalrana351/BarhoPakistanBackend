const chain = require('../../../ai/roadmapper/submodules/main');
const errorHandler = require('../../../middlewares/err/errorHandler');

const getSubmodules = errorHandler( async (req, res) => {
    const data = req.body;

    const module = data.module

    const aiResp = await chain.invoke({
        'module': module
    })

    const submodules = aiResp[0].args.submodules

    return res.status(200).json({
        submodules: submodules
    });
});

module.exports = getSubmodules;