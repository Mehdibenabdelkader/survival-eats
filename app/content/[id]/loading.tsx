export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="animate-pulse text-center">
        <div className="h-8 w-64 bg-gray-200 rounded mb-4 mx-auto"></div>
        <div className="h-4 w-48 bg-gray-200 rounded mx-auto"></div>
      </div>
    </div>
  )
}
