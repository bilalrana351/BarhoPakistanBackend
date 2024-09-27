const zod = require('zod')
const tools = require('@langchain/core/tools')

const z = zod.z

const toolSchema = z.object({
    submodules: z.array(z.string()).describe("The list of sub modules, this must never be empty.")
})

const structuredTool = new tools.tool(
    (input) => {
        return {
            submodules: input.submodules
        }
    },
    {
        name: "Submodules",
        description: "This tool is called in order to get the submodules associated with a particular career, the output of this tool must never be empty, the entire list of sub modules should give the roadmap to become proficient in the given topic.",
        schema: toolSchema
    }
)

module.exports = structuredTool;