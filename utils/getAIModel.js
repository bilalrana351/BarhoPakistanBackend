// This will get the specific ai model
// It requires the company of the model and the specific model also, and also the api key
// It is not async so no need to add async here
const getModel = (company, name, apiKey, temperature = 0) => {
    // Currently there is support for openai only but we can add others also
    if (company == "openai") {
        const openaiLangchain = require('@langchain/openai');

        const model = new openaiLangchain.ChatOpenAI({
            model: name,
            temperature: temperature,
            apiKey: apiKey
        });

        return model;

    }

    // We can add support for other models later
} 

module.exports = getModel