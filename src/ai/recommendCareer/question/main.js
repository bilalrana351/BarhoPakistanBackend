require('module-alias/register')
require('dotenv').config({
    path: 'server/.env'
})
const getChain = require('../../../utils/getChain');
const model = require('./components/model');
const prompt = require('./components/prompt')
const tool = require('./components/tools')
finalModel = model


if (tool != null) {
    finalModel = model.bindTools([tool],{tool_choice:'required'})
}

const chain = getChain([prompt,finalModel])

module.exports = chain;