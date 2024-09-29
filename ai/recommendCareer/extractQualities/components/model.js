const getModel = require('../../../../utils/getAIModel')

const model = getModel('openai','gpt-4o',process.env.OPENAI_API_KEY,0)

module.exports = model
