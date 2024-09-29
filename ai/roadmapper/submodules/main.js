const model = require('./components/model');
const parser = require('./components/parser')
const prompt = require('./components/prompt')
const tool = require('./components/tools')
const makeChain = require('../../../utils/getChain')

finalModel = model

if (tool != null) {
    finalModel = model.bindTools([tool],{tool_choice:'Submodules'})
}

const chain = makeChain([prompt,finalModel,parser])

module.exports = chain