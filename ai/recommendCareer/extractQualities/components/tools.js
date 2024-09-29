const zod = require('zod')
const tools = require('@langchain/core/tools')

const z = zod.z

const toolSchema = z.object({
    strengths: z.array(z.string()).describe("The list of the strengths of the person."),
    weaknesses: z.array(z.string()).describe("The list of weaknesses of that person.")
})

const structuredTool = new tools.tool(
    (input) => {
        return {
            strengths: input.strengths,
            weaknesses: input.weaknesses
        }
    },
    {
        name: "ExtractStrengthsAndWeaknesses",
        description: "Extracts the strengths and weaknesses of a person by analyzing his / her responses to messages. You must never leave it empty.",
        schema: toolSchema
    }
)

module.exports = structuredTool;