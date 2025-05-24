import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, ShoppingCart, DollarSign, Bookmark } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GroceryBasicsPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Grocery Shopping Basics</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Everything you need to know about navigating stores, making lists, and buying food that actually makes
                  sense for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="getting-started" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="shopping-lists">Shopping Lists</TabsTrigger>
                <TabsTrigger value="budgeting">Budgeting</TabsTrigger>
                <TabsTrigger value="food-storage">Food Storage</TabsTrigger>
              </TabsList>
              <TabsContent value="getting-started" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Your First Grocery Trip</h2>
                    <p className="text-gray-500">
                      Grocery shopping doesn't have to be overwhelming. Here's how to prepare for and navigate your
                      first intentional grocery shopping trip.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#FCAE47] mt-0.5" />
                        <span>Plan before you go - know what meals you want to make</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#FCAE47] mt-0.5" />
                        <span>
                          Start with a small list of essentials rather than trying to stock an entire kitchen at once
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#FCAE47] mt-0.5" />
                        <span>
                          Shop the perimeter of the store first - that's where fresh foods are usually located
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#FCAE47] mt-0.5" />
                        <span>Compare prices by looking at the unit price, not just the total price</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#FCAE47] mt-0.5" />
                        <span>Don't shop when you're hungry - you'll buy more than you need</span>
                      </li>
                    </ul>
                    <Button asChild className="mt-4">
                      <Link href="/grocery-basics/first-trip-guide">Read Full Guide</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Person shopping for groceries"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="shopping-lists" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Creating Effective Shopping Lists</h2>
                    <p className="text-gray-500">
                      A good shopping list is your best tool for staying on budget and getting what you actually need.
                    </p>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>The Staples List</CardTitle>
                          <CardDescription>Items you should always have on hand</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4 text-[#FCAE47]" />
                              <span>Rice or pasta</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4 text-[#FCAE47]" />
                              <span>Canned beans</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4 text-[#FCAE47]" />
                              <span>Eggs</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4 text-[#FCAE47]" />
                              <span>Frozen vegetables</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4 text-[#FCAE47]" />
                              <span>Onions & garlic</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4 text-[#FCAE47]" />
                              <span>Cooking oil</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4 text-[#FCAE47]" />
                              <span>Salt & pepper</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4 text-[#FCAE47]" />
                              <span>Bread</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Organizing Your List</CardTitle>
                          <CardDescription>Group items by store section to shop efficiently</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">
                            Group your shopping list by store sections (produce, dairy, meat, etc.) to save time and
                            avoid forgetting items. This also helps you stick to your list and avoid impulse purchases.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href="/grocery-basics/shopping-lists">Download Templates</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Shopping list and groceries"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="budgeting" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Food Budgeting for Beginners</h2>
                    <p className="text-gray-500">
                      Learn how to eat well without breaking the bank. These simple strategies will help you save money
                      while still eating nutritious meals.
                    </p>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-[#FCAE47]" />
                            <span>Budget-Friendly Protein Sources</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>Eggs - versatile and nutritious</li>
                            <li>Canned tuna - long shelf life and ready to eat</li>
                            <li>Dried or canned beans - high in protein and fiber</li>
                            <li>Chicken thighs - more flavor and less expensive than breasts</li>
                            <li>Tofu - absorbs flavors and works in many dishes</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-[#FCAE47]" />
                            <span>Money-Saving Shopping Habits</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>Buy in-season produce for better prices</li>
                            <li>Check store flyers for weekly sales</li>
                            <li>Consider store brands instead of name brands</li>
                            <li>Buy in bulk for items you use frequently</li>
                            <li>Reduce food waste by planning meals around what you have</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href="/grocery-basics/budget-meal-plans">View Budget Meal Plans</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Budget-friendly groceries"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="food-storage" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Food Storage Fundamentals</h2>
                    <p className="text-gray-500">
                      Proper food storage extends shelf life, prevents waste, and keeps your food safe to eat. Here's
                      what you need to know.
                    </p>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Bookmark className="h-5 w-5 text-[#FCAE47]" />
                            <span>Refrigerator Organization</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <strong>Top shelf:</strong> Ready-to-eat foods, leftovers, drinks
                            </li>
                            <li>
                              <strong>Middle shelves:</strong> Dairy, eggs, packaged foods
                            </li>
                            <li>
                              <strong>Bottom shelf:</strong> Raw meat, poultry, and seafood (to prevent drips)
                            </li>
                            <li>
                              <strong>Crisper drawers:</strong> Fruits and vegetables
                            </li>
                            <li>
                              <strong>Door:</strong> Condiments, butter, soft cheeses
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Bookmark className="h-5 w-5 text-[#FCAE47]" />
                            <span>Pantry Storage Tips</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>Store dry goods in airtight containers</li>
                            <li>Keep onions and potatoes separate (but both in dark, cool places)</li>
                            <li>First in, first out - use older items before newer ones</li>
                            <li>Label containers with contents and date</li>
                            <li>Keep pantry cool, dark, and dry to extend shelf life</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href="/grocery-basics/food-storage-guide">Complete Storage Guide</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Organized food storage"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
