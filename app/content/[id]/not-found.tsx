import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Content Not Found</h1>
        <p className="text-gray-600 mb-6">The content you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/content">Back to All Content</Link>
        </Button>
      </div>
    </div>
  )
}
