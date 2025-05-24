import { getAllContent, getFeaturedContent } from "@/lib/content"
import ContentPageClient from "./content-page-client"

export default async function ContentPage() {
  const [allContent, featuredContent] = await Promise.all([getAllContent(), getFeaturedContent()])

  return <ContentPageClient allContent={allContent} featuredContent={featuredContent} />
}
