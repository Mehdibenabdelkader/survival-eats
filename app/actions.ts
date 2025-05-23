"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

// In a real app, this would be stored in a database
// For this demo, we'll use cookies to store the chats
type Chat = {
  id: string
  title: string
  messages: string
  createdAt: string
}

export async function saveChat(chat: Chat) {
  try {
    const cookieStore = cookies()
    const existingChatsStr = cookieStore.get("saved-chats")?.value
    const existingChats: Chat[] = existingChatsStr ? JSON.parse(existingChatsStr) : []

    const updatedChats = [...existingChats, chat]

    // Store in cookies (in a real app, this would go to a database)
    cookieStore.set("saved-chats", JSON.stringify(updatedChats), {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    })

    revalidatePath("/saved-chats")
    return { success: true }
  } catch (error) {
    console.error("Failed to save chat:", error)
    return { success: false, error: "Failed to save chat" }
  }
}

export async function getSavedChats(): Promise<Chat[]> {
  try {
    const cookieStore = cookies()
    const savedChatsStr = cookieStore.get("saved-chats")?.value

    if (!savedChatsStr) return []

    const savedChats: Chat[] = JSON.parse(savedChatsStr)
    return savedChats.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  } catch (error) {
    console.error("Failed to get saved chats:", error)
    return []
  }
}

export async function getSavedChatById(id: string): Promise<Chat | null> {
  try {
    const chats = await getSavedChats()
    return chats.find((chat) => chat.id === id) || null
  } catch (error) {
    console.error("Failed to get chat by ID:", error)
    return null
  }
}

export async function deleteChat(formData: FormData) {
  try {
    const id = formData.get("id") as string
    const cookieStore = cookies()
    const savedChatsStr = cookieStore.get("saved-chats")?.value

    if (!savedChatsStr) return { success: false, error: "No chats found" }

    const savedChats: Chat[] = JSON.parse(savedChatsStr)
    const updatedChats = savedChats.filter((chat) => chat.id !== id)

    cookieStore.set("saved-chats", JSON.stringify(updatedChats), {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    })

    revalidatePath("/saved-chats")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete chat:", error)
    return { success: false, error: "Failed to delete chat" }
  }
}

export async function updateChat({ id, messages }: { id: string; messages: string }) {
  try {
    const cookieStore = cookies()
    const savedChatsStr = cookieStore.get("saved-chats")?.value

    if (!savedChatsStr) return { success: false, error: "No chats found" }

    const savedChats: Chat[] = JSON.parse(savedChatsStr)
    const updatedChats = savedChats.map((chat) => {
      if (chat.id === id) {
        return { ...chat, messages }
      }
      return chat
    })

    cookieStore.set("saved-chats", JSON.stringify(updatedChats), {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    })

    revalidatePath(`/chat/${id}`)
    revalidatePath("/saved-chats")
    return { success: true }
  } catch (error) {
    console.error("Failed to update chat:", error)
    return { success: false, error: "Failed to update chat" }
  }
}
