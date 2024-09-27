const runnables = require('@langchain/core/runnables')

const runnableSequence = runnables.RunnableSequence

const getChain = (runnables) => {
    const chain = runnableSequence.from(runnables);
    return chain;
}

module.exports = getChain