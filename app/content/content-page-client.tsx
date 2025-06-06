"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search, Filter, Play, FileText, ExternalLink, Clock, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ContentItem } from "@/lib/content"

interface ContentPageClientProps {
  allContent: ContentItem[]
  featuredContent: ContentItem[]
}

export default function ContentPageClient({ allContent, featuredContent }: ContentPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [contentTypeFilter, setContentTypeFilter] = useState<"all" | "video" | "post" | "both">("all")

  const allTags = useMemo(() => {
    return Array.from(new Set(allContent.flatMap((item) => item.tags))).sort()
  }, [allContent])

  const filteredContent = useMemo(() => {
    return allContent.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => item.tags.includes(tag))

      const matchesType = contentTypeFilter === "all" || item.type === contentTypeFilter

      return matchesSearch && matchesTags && matchesType
    })
  }, [allContent, searchTerm, selectedTags, contentTypeFilter])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSelectedTags([])
    setContentTypeFilter("all")
    setSearchTerm("")
  }

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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <Link
                href="/"
                className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-sm gap-1 hover:bg-gray-50"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learning Content</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Discover all our guides, tutorials, and resources to help you master cooking and grocery shopping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredContent.map((item) => (
                <Link href={`/content/${item.id}`} key={item.id}>
                  <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          {getTypeIcon(item.type)}
                          <span className="text-xs">{getTypeLabel(item.type)}</span>
                        </Badge>
                      </div>
                      {item.type !== "post" && item.videoLength && (
                        <div className="absolute bottom-2 right-2">
                          <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                            <Clock className="h-3 w-3 mr-1" />
                            {item.videoLength}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className={`text-xs ${selectedTags.includes(tag) ? "bg-primary text-primary-foreground" : ""}`}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              toggleTag(tag)
                            }}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          {item.readTime && (
                            <span className="flex items-center gap-1">
                              <FileText className="h-3 w-3" />
                              {item.readTime}
                            </span>
                          )}
                        </div>
                        {item.youtubeUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.open(item.youtubeUrl, "_blank")
                            }}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Content with Filters */}
        <section className="w-full py-12 md:py-16 bg-stone-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <h2 className="text-2xl font-bold">All Content</h2>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search content..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full sm:w-64"
                    />
                  </div>
                  <Button variant="outline" onClick={clearFilters} className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Clear Filters
                  </Button>
                </div>
              </div>

              {/* Filters */}
              <div className="space-y-4">
                <Tabs value={contentTypeFilter} onValueChange={(value) => setContentTypeFilter(value as any)}>
                  <TabsList>
                    <TabsTrigger value="all">All Types</TabsTrigger>
                    <TabsTrigger value="video">Videos</TabsTrigger>
                    <TabsTrigger value="post">Articles</TabsTrigger>
                    <TabsTrigger value="both">Video + Article</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Filter by Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/80"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredContent.map((item) => (
                  <Link href={`/content/${item.id}`} key={item.id}>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            {getTypeIcon(item.type)}
                            <span className="text-xs">{getTypeLabel(item.type)}</span>
                          </Badge>
                        </div>
                        {item.type !== "post" && item.videoLength && (
                          <div className="absolute bottom-2 right-2">
                            <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                              <Clock className="h-3 w-3 mr-1" />
                              {item.videoLength}
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className={`text-xs ${selectedTags.includes(tag) ? "bg-primary text-primary-foreground" : ""}`}
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                toggleTag(tag)
                              }}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            {item.readTime && (
                              <span className="flex items-center gap-1">
                                <FileText className="h-3 w-3" />
                                {item.readTime}
                              </span>
                            )}
                          </div>
                          {item.youtubeUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                window.open(item.youtubeUrl, "_blank")
                              }}
                            >
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredContent.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No content found matching your filters.</p>
                  <Button onClick={clearFilters} className="mt-4">
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
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
