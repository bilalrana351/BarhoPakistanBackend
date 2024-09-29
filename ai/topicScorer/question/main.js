const model = require('./components/model');
const parser = require('./components/parser')
const prompt = require('./components/prompt')
const tool = require('./components/tools')
const makeChain = require('../../../utils/getChain')

let finalModel = model

if (tool != null) {
    finalModel = model.bindTools([tool],{tool_choice:'ExtractStrengthsAndWeaknesses'})
}

const chain = makeChain([prompt,finalModel])

module.exports = chain