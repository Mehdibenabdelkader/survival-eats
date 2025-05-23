"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Bot, Send, User, Save } from "lucide-react"
import { nanoid } from "nanoid"
import { useChat } from "ai/react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { saveChat } from "@/app/actions"

export default function ChatPage() {
  const router = useRouter()
  const [chatId] = useState(() => nanoid())

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    id: chatId,
    experimental_throttle: 50, // Throttle updates to 50ms
    initialMessages: [
      {
        id: nanoid(),
        role: "system",
        content:
          "You are a helpful cooking and food assistant for Survival Eats, a website that helps beginners learn how to buy groceries and cook for themselves. Provide friendly, practical advice about grocery shopping, cooking techniques, kitchen tools, meal planning, and food storage. Keep answers concise and beginner-friendly. If asked about recipes, focus on simple, approachable options with minimal ingredients and basic techniques.",
      },
      {
        id: nanoid(),
        role: "assistant",
        content:
          "Hi there! I'm your Survival Eats assistant. I'm here to help with any questions about grocery shopping, cooking basics, kitchen tools, or meal planning. What would you like to learn about today?",
      },
    ],
  })

  const userMessages = messages.filter((message) => message.role !== "system")

  const handleSaveChat = async () => {
    if (userMessages.length <= 1) {
      toast({
        title: "Nothing to save",
        description: "Have a conversation first before saving.",
        variant: "destructive",
      })
      return
    }

    try {
      await saveChat({
        id: chatId,
        title: userMessages[1]?.content.slice(0, 50) + "...",
        messages: JSON.stringify(userMessages),
        createdAt: new Date().toISOString(),
      })

      toast({
        title: "Chat saved!",
        description: "You can view it in your saved chats.",
      })
    } catch (error) {
      toast({
        title: "Failed to save chat",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-sm gap-1 hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleSaveChat} className="flex items-center gap-1">
              <Save className="h-4 w-4" />
              <span>Save Chat</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/saved-chats")}
              className="flex items-center gap-1"
            >
              <span>Saved Chats</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6 md:py-12 flex flex-col">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter">Survival Eats Assistant</h1>
          <p className="text-gray-500 mt-2 text-center max-w-[600px]">
            Ask me anything about grocery shopping, cooking basics, or meal planning!
          </p>
        </div>

        <div className="flex-1 flex flex-col space-y-4 mb-4">
          <div className="flex-1 overflow-y-auto rounded-lg border p-4 space-y-4">
            {userMessages.map((message) => (
              <Card key={message.id} className={message.role === "user" ? "bg-muted" : "bg-card"}>
                <CardContent className="p-4 flex gap-3">
                  {message.role === "user" ? (
                    <User className="h-5 w-5 mt-1 text-gray-500" />
                  ) : (
                    <Bot className="h-5 w-5 mt-1 text-green-600" />
                  )}
                  <div className="flex-1">{message.content}</div>
                </CardContent>
              </Card>
            ))}
            {userMessages.length === 1 && (
              <div className="flex flex-col items-center justify-center h-40 text-center p-4">
                <p className="text-gray-500">Ask your first question about cooking or grocery shopping!</p>
              </div>
            )}
          </div>

          <Separator />

          <form onSubmit={handleSubmit} className="flex items-start gap-2">
            <Textarea
              placeholder="Ask about grocery shopping, cooking techniques, meal planning..."
              value={input}
              onChange={handleInputChange}
              className="flex-1 min-h-[80px]"
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2024 Survival Eats. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-gray-500 hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
