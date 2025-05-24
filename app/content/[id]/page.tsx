import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, FileText, Play, Tag, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getContentById, getRelatedContent } from "@/lib/content"

function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`
}

export default async function ContentDetailPage({ params }: { params: { id: string } }) {
  const content = await getContentById(params.id)

  if (!content) {
    notFound()
  }

  const relatedContent = await getRelatedContent(content.id, content.tags, 4)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4" />
      case "post":
        return <FileText className="h-4 w-4" />
      case "both":
        return (
          <div className="flex gap-1">
            <Play className="h-3 w-3" />
            <FileText className="h-3 w-3" />
          </div>
        )
      default:
        return null
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "video":
        return "Video"
      case "post":
        return "Article"
      case "both":
        return "Video + Article"
      default:
        return ""
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/content"
            className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-sm gap-1 hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Content</span>
          </Link>
          {content.youtubeUrl && (
            <Button variant="outline" asChild>
              <a
                href={content.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Watch on YouTube</span>
              </a>
            </Button>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-stone-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  {getTypeIcon(content.type)}
                  <span className="text-sm">{getTypeLabel(content.type)}</span>
                </Badge>
                {content.videoLength && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span className="text-sm">{content.videoLength}</span>
                  </Badge>
                )}
                {content.readTime && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    <span className="text-sm">{content.readTime}</span>
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{content.title}</h1>

              <p className="text-xl text-gray-600 mb-6">{content.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {content.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </Badge>
                ))}
              </div>

              {content.author && content.publishedDate && (
                <div className="text-sm text-gray-500 mb-8">
                  By {content.author} •{" "}
                  {new Date(content.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Video Section */}
        {(content.type === "video" || content.type === "both") && content.youtubeEmbedId && (
          <section className="w-full py-8 md:py-12">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-8">
                  <iframe
                    src={getYouTubeEmbedUrl(content.youtubeEmbedId)}
                    title={content.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        {(content.type === "post" || content.type === "both") && content.content && (
          <section className="w-full py-8 md:py-12">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-8 md:p-12">
                    <div
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-code:text-gray-900 prose-pre:bg-gray-100"
                      dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Related Content */}
        {relatedContent.length > 0 && (
          <section className="w-full py-12 md:py-16 bg-stone-50">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Related Content</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {relatedContent.map((item) => (
                    <Link href={`/content/${item.id}`} key={item.id}>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={300}
                            height={150}
                            className="w-full h-32 object-cover"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge variant="secondary" className="flex items-center gap-1">
                              {getTypeIcon(item.type)}
                              <span className="text-xs">{getTypeLabel(item.type)}</span>
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold line-clamp-2 mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
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
