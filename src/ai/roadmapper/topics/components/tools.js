const zod = require('zod')
const tools = require('@langchain/core/tools')

const z = zod.z

const toolSchema = z.object({
    topics: z.array(z.string()).describe("The list of topics, this must never be empty. Make sure to give as many topics as possible. You must return atleast 5 topics.")
})

const structuredTool = new tools.tool(
    (input) => {
        return {
            submodules: input.submodules
        }
    },
    {
        name: "Topics",
        description: "This tool is called in order to get the topics associated with a particular module, the output of this tool must never be empty, the entire list of topics should give the roadmap to become proficient in the given module. You must return atleast 5 topics.",
        schema: toolSchema
    }
)

module.exports = structuredTool;