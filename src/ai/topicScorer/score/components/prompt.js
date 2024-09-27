const prompts = require('@langchain/core/prompts')

const prompt = prompts.ChatPromptTemplate.fromMessages([
    prompts.SystemMessagePromptTemplate.fromTemplate(
    `You are an helpful expert in {topic} associated with {submodule} in the field of {module}.
    You are given a history of the conversation between the user and ai about {topic}.
    You MUST CALL the GradeAndRemark tool in order to gauge the proficiency of the user in {topic}.`),
    new prompts.MessagesPlaceholder('history'),
    prompts.HumanMessagePromptTemplate.fromTemplate(`{input}`)
])

module.exports = prompt