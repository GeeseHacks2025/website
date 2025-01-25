import { OpenAIStream, StreamingTextResponse } from "ai"
import { openai } from "@ai-sdk/openai"
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai"
import { prisma } from "@/lib/prisma"

export const runtime = "edge"

const wrappedModel = wrapLanguageModel({
  model: openai("gpt-3.5-turbo"),
  middleware: {
    wrapStream: async ({ doStream, params }) => {
      const startTime = Date.now()
      const { stream, ...rest } = await doStream()

      const inputTokens = 0
      let outputTokens = 0

      const transformStream = new TransformStream({
        transform(chunk, controller) {
          if (chunk.type === "text-delta") {
            outputTokens += chunk.textDelta.split(" ").length
          }
          controller.enqueue(chunk)
        },
        flush() {
          const endTime = Date.now()
          const time = (endTime - startTime) / 1000
          const cost = calculateCost(params.model, inputTokens, outputTokens)

          // Store chat data in the database
          prisma.chatSession.create({
            data: {
              model: params.model,
              inputTokens,
              outputTokens,
              time,
              cost,
            },
          })

          controller.enqueue({
            type: "data",
            data: { inputTokens, outputTokens, time, cost },
          })
        },
      })

      return {
        stream: stream.pipeThrough(transformStream),
        ...rest,
      }
    },
  },
})

export async function POST(req: Request) {
  const { messages, model } = await req.json()

  // Use wrapped model for all requests since VLLM is removed
  const response = await wrappedModel.stream({
    messages,
  })

  return new StreamingTextResponse(response)
}

function calculateCost(model: string, inputTokens: number, outputTokens: number): number {
  // Implement cost calculation based on the model and token usage
  // This is a placeholder implementation
  const costPerToken = 0.00002
  return (inputTokens + outputTokens) * costPerToken
}

