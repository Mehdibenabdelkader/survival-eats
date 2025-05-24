import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ShoppingCart, Utensils, BookOpen, DollarSign, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Utensils className="h-5 w-5" />
            <span>Snackademy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/grocery-basics" className="text-sm font-medium hover:underline underline-offset-4">
              Grocery Basics
            </Link>
            <Link href="/kitchen-essentials" className="text-sm font-medium hover:underline underline-offset-4">
              Kitchen Essentials
            </Link>
            <Link href="/cooking-techniques" className="text-sm font-medium hover:underline underline-offset-4">
              Cooking Techniques
            </Link>
            <Link href="/content" className="text-sm font-medium hover:underline underline-offset-4">
              All Content
            </Link>
            <Link href="/chat" className="text-sm font-medium hover:underline underline-offset-4">
              Ask Assistant
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[1.2rem] w-[1.2rem]"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Learn to Feed Yourself
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Your step-by-step guide to buying groceries and cooking for yourself, even if you've never boiled
                    water.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/get-started">
                      Get Started <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Hero image of simple cooking"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Snackademy?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We break down the basics of food independence into simple, actionable steps that anyone can follow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <Card>
                <CardHeader>
                  <ShoppingCart className="h-10 w-10 text-[#FCAE47] mb-2" />
                  <CardTitle>Grocery Basics</CardTitle>
                  <CardDescription>
                    Learn how to navigate stores, read labels, and buy what you actually need.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    From shopping lists to budget planning, we'll help you master the grocery store without overwhelm.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/grocery-basics">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Utensils className="h-10 w-10 text-[#FCAE47] mb-2" />
                  <CardTitle>Kitchen Essentials</CardTitle>
                  <CardDescription>The only tools you actually need to start cooking delicious meals.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>No expensive gadgets required. We focus on affordable, versatile equipment for beginners.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/kitchen-essentials">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-[#FCAE47] mb-2" />
                  <CardTitle>Cooking Techniques</CardTitle>
                  <CardDescription>Master simple cooking methods that work for dozens of meals.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Learn fundamental techniques that build your confidence and expand your cooking abilities.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/cooking-techniques">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <MessageCircle className="h-10 w-10 text-[#FCAE47] mb-2" />
                  <CardTitle>AI Assistant</CardTitle>
                  <CardDescription>Get personalized help with your cooking questions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our AI assistant can answer your questions about cooking, shopping, and meal planning.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/chat">Ask Assistant</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Person planning meals"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Food Independence Starts Here
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                    Our step-by-step guides take you from total beginner to confident home cook with practical,
                    no-nonsense advice.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-[#FCAE47]" />
                    <span>Save money by cooking at home</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-[#FCAE47]" />
                    <span>Learn to shop efficiently and reduce waste</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-[#FCAE47]" />
                    <span>Build confidence with simple, repeatable techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-[#FCAE47]" />
                    <span>Get personalized help from our AI assistant</span>
                  </li>
                </ul>
                <div>
                  <Button asChild>
                    <Link href="/get-started">Start Your Journey</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Thousands of Food Survivors
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our community is growing every day with people just like you who are learning to feed themselves.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500">
                  Subscribe to our newsletter for free guides, tips, and updates. No spam, ever.
                </p>
              </div>
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
