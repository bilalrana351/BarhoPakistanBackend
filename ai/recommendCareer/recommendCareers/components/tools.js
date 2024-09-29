const zod = require('zod')
const tools = require('@langchain/core/tools')

const z = zod.z

const toolSchema = z.object({
    careers: z.array(z.string()).describe("The list of careers to be recommended to the user.")
})

const structuredTool = new tools.tool(
    (input) => {
        return {
            careers: input.careers
        }
    },
    {
        name: "RecommendCareer",
        description: "Recommends a list of careers to the user based on his / her strengths and weaknesses. You MUST never leave it empty. You MUST recommend atleast 3 careers to the user.",
        schema: toolSchema
    })

module.exports = structuredTool;