const prompts = require('@langchain/core/prompts')

const prompt = prompts.ChatPromptTemplate.fromMessages([
    prompts.SystemMessagePromptTemplate.fromTemplate(
    `You are an expert that analyzes the answers a user gives to questions asked by the AI and then you call the StrengthsAndWeaknesses tool to infer their strengths and weaknesses. You ALWAYS have to call the StrengthsAndWeaknesses tool to extract the strengths and weaknesses of the user. You must not return the strengths and weaknesses empty.`,
    new prompts.MessagesPlaceholder('history'),
)])

module.exports = prompt