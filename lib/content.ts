import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface ContentItem {
  id: string
  title: string
  description: string
  type: "video" | "post" | "both"
  tags: string[]
  readTime?: string
  videoLength?: string
  image: string
  slug: string
  youtubeUrl?: string
  youtubeEmbedId?: string
  featured?: boolean
  author?: string
  publishedDate?: string
  content?: string
}

export async function getAllContent(): Promise<ContentItem[]> {
  // Get file names under /content/posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "")

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Convert markdown to HTML
        const processedContent = await remark().use(html).process(matterResult.content)
        const contentHtml = processedContent.toString()

        // Combine the data with the id and content
        return {
          id,
          slug: `/content/${id}`,
          content: contentHtml,
          ...matterResult.data,
        } as ContentItem
      }),
  )

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.publishedDate && b.publishedDate) {
      return a.publishedDate < b.publishedDate ? 1 : -1
    }
    return 0
  })
}

export async function getContentById(id: string): Promise<ContentItem | null> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and content
    return {
      id,
      slug: `/content/${id}`,
      content: contentHtml,
      ...matterResult.data,
    } as ContentItem
  } catch (error) {
    return null
  }
}

export async function getContentBySlug(slug: string): Promise<ContentItem | null> {
  // Extract ID from slug (e.g., "/content/first-grocery-trip" -> "first-grocery-trip")
  const id = slug.replace("/content/", "")
  return getContentById(id)
}

export async function getFeaturedContent(): Promise<ContentItem[]> {
  const allContent = await getAllContent()
  return allContent.filter((item) => item.featured)
}

export async function getRelatedContent(currentId: string, tags: string[], limit = 4): Promise<ContentItem[]> {
  const allContent = await getAllContent()

  return allContent
    .filter((item) => item.id !== currentId && item.tags.some((tag) => tags.includes(tag)))
    .slice(0, limit)
}
