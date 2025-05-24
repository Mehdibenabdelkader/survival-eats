import Link from "next/link"
import { ArrowLeft, MessageSquare, Trash2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getSavedChats, deleteChat } from "@/app/actions"

export default async function SavedChatsPage() {
  const chats = await getSavedChats()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link
            href="/chat"
            className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-sm gap-1 hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Chat</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-6 md:py-12">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter">Saved Conversations</h1>
          <p className="text-gray-500 mt-2 text-center">Review your previous chats with the Snackademy Assistant</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chats.length > 0 ? (
            chats.map((chat) => (
              <Card key={chat.id}>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{chat.title}</CardTitle>
                  <CardDescription>{format(new Date(chat.createdAt), "MMMM d, yyyy 'at' h:mm a")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-gray-500">
                    {JSON.parse(chat.messages)[1]?.content || "Chat content"}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href={`/chat/${chat.id}`} className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>Continue</span>
                    </Link>
                  </Button>
                  <form
                    action={async (formData) => {
                      await deleteChat(formData)
                      // Optionally, you can refresh the page or update state here
                    }}
                  >
                    <input type="hidden" name="id" value={chat.id} />
                    <Button variant="outline" size="icon" type="submit" className="text-red-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center h-40 text-center p-4 border rounded-lg">
              <MessageSquare className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-gray-500">No saved chats yet</p>
              <Button asChild className="mt-4">
                <Link href="/chat">Start a new conversation</Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2024 Snackademy. All rights reserved.
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
