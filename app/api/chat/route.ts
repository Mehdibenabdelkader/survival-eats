import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export const runtime = "nodejs"

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Create a stream using the AI SDK
  const result = await streamText({
    model: openai("gpt-4o"),
    messages,
  })

  // Return the streaming response
  return result.toDataStreamResponse()
}
