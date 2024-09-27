const zod = require('zod')
const tools = require('@langchain/core/tools')

const z = zod.z

const toolSchema = z.object({
    score: z.number().describe("The score of the user in the test, make sure it is a value between 0 to 10, if the user is proficient in the given concept, award him / her with a score closer to 10, and if they are less proficient then award them lower scores. NEVER leave it empty."),
    feedback: z.string().describe("This will be feedback of the performance of the user in the given test, if you feel like the user is lacking in some concepts, then tell him to improve on that concept. Make sure that this tool NEVER returns empty.")
})

const structuredTool = new tools.tool(
    (input) => {
        return {
            score: input.score,
            feedback: input.feedback
        }
    },
    {
        name: "GradeAndRemark",
        description: "This is a tool that is used to gauge the proficiency of the user in the given topic, it must always be called and should never be left empty.",
        schema: toolSchema
    }
)

module.exports = structuredTool;