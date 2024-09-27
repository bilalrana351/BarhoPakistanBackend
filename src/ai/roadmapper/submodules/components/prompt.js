const prompts = require('@langchain/core/prompts')

const prompt = prompts.ChatPromptTemplate.fromMessages([
    prompts.SystemMessagePromptTemplate.fromTemplate(
    `You are an expert in {module}.
    Your job is to recommend the subtopics to learn such that the user becomes an expert in {module}, 
    These subtopics should be given in a systematic manner which will allow the user to become a master in {module}.
    Start from the very beginning and give all the sub modules.
    Each submodule should be such that it can be further broken down into topics.
    Always call the Submodules tool in order to perform this task.`
)])

module.exports = prompt