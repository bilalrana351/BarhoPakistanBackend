const getModel = require('@/utils/getAIModel.js')

const model = getModel('openai','gpt-4o-mini',process.env.OPENAI_API_KEY,0)

module.exports = model
