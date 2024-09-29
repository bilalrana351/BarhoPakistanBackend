
const makeChain = require('../../../utils/getChain')
const model = require('./components/model');
const prompt = require('./components/prompt')
const tool = require('./components/tools')
finalModel = model


if (tool != null) {
    finalModel = model.bindTools([tool],{tool_choice:'required'})
}

const chain = makeChain([prompt,finalModel])

module.exports = chain;