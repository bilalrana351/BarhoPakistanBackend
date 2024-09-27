// Lets define the function

// Currently supports openai parser onlt

const getParser = (company,name) => {
    const langchainParser = require('langchain/output_parsers')

    if (company == 'openai'){
        if (name == 'toolparser') {
            const parser = new langchainParser.JsonOutputToolsParser();
            return parser;
        }
    }
}

module.exports = getParser