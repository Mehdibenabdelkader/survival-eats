import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Utensils, ChefHat } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function KitchenEssentialsPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kitchen Essentials</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  The only tools you actually need to start cooking delicious meals - no expensive gadgets required.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="starter-kit" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="starter-kit">Starter Kit</TabsTrigger>
                <TabsTrigger value="knives">Knives & Cutting</TabsTrigger>
                <TabsTrigger value="cookware">Cookware</TabsTrigger>
                <TabsTrigger value="tools">Tools & Gadgets</TabsTrigger>
              </TabsList>
              <TabsContent value="starter-kit" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">The Absolute Essentials</h2>
                    <p className="text-gray-500">
                      You don't need a fully stocked kitchen to start cooking. These basic items will get you through
                      most beginner recipes.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Utensils className="h-5 w-5 text-[#FCAE47]" />
                            <span>Must-Have Tools</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Chef's knife (8-inch)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Cutting board</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Measuring cups & spoons</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Mixing bowls (2-3 sizes)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Wooden spoon & spatula</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <ChefHat className="h-5 w-5 text-[#FCAE47]" />
                            <span>Basic Cookware</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Large pot (for pasta, soups)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Medium saucepan</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Large skillet/frying pan</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Baking sheet</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Casserole dish</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      You can find affordable versions of all these items at discount stores, thrift shops, or online.
                      Focus on durability rather than brand names.
                    </p>
                    <Button asChild className="mt-4">
                      <Link href="/kitchen-essentials/budget-shopping-guide">Budget Shopping Guide</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Basic kitchen essentials"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="knives" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Knives & Cutting Basics</h2>
                    <p className="text-gray-500">
                      A good knife is your most important kitchen tool. Learn which ones you need and how to use them
                      safely.
                    </p>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>The Only Knives You Need</CardTitle>
                          <CardDescription>Start with these three essential knives</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-4">
                            <li className="grid grid-cols-[auto_1fr] gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-[#FCAE47]">
                                <span className="font-bold">1</span>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">Chef's Knife (8-inch)</p>
                                <p className="text-sm text-gray-500">Your all-purpose knife for most cutting tasks</p>
                              </div>
                            </li>
                            <li className="grid grid-cols-[auto_1fr] gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-[#FCAE47]">
                                <span className="font-bold">2</span>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">Paring Knife</p>
                                <p className="text-sm text-gray-500">
                                  For small, precise tasks like peeling or trimming
                                </p>
                              </div>
                            </li>
                            <li className="grid grid-cols-[auto_1fr] gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-[#FCAE47]">
                                <span className="font-bold">3</span>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">Serrated Knife</p>
                                <p className="text-sm text-gray-500">
                                  For bread and slicing tomatoes or other soft items
                                </p>
                              </div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Knife Safety & Care</CardTitle>
                          <CardDescription>Keep your knives sharp and your fingers safe</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Always cut on a stable cutting board, never in your hand</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Keep knives sharp - dull knives are more dangerous</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Hand wash knives and dry immediately - never put in dishwasher</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Store knives in a block, on a magnetic strip, or with blade guards</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href="/kitchen-essentials/knife-skills">Basic Knife Skills Guide</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Basic kitchen knives"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="cookware" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Essential Cookware</h2>
                    <p className="text-gray-500">
                      You don't need a complete set of pots and pans. These versatile pieces will handle most cooking
                      tasks.
                    </p>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>The Five Essential Pieces</CardTitle>
                          <CardDescription>These will cover 90% of your cooking needs</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-4">
                            <li className="grid grid-cols-[auto_1fr] gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-[#FCAE47]">
                                <span className="font-bold">1</span>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">10-12 inch Skillet/Frying Pan</p>
                                <p className="text-sm text-gray-500">For sautéing, frying, and one-pan meals</p>
                              </div>
                            </li>
                            <li className="grid grid-cols-[auto_1fr] gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-[#FCAE47]">
                                <span className="font-bold">2</span>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">3-4 quart Saucepan</p>
                                <p className="text-sm text-gray-500">For sauces, grains, and small batches of soup</p>
                              </div>
                            </li>
                            <li className="grid grid-cols-[auto_1fr] gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-[#FCAE47]">
                                <span className="font-bold">3</span>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">Large Pot (6-8 quart)</p>
                                <p className="text-sm text-gray-500">For pasta, soups, stews, and batch cooking</p>
                              </div>
                            </li>
                            <li className="grid grid-cols-[auto_1fr] gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-[#FCAE47]">
                                <span className="font-bold">4</span>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">Rimmed Baking Sheet</p>
                                <p className="text-sm text-gray-500">
                                  For roasting vegetables, sheet pan meals, and baking
                                </p>
                              </div>
                            </li>
                            <li className="grid grid-cols-[auto_1fr] gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-[#FCAE47]">
                                <span className="font-bold">5</span>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">9x13 Baking Dish</p>
                                <p className="text-sm text-gray-500">For casseroles, baked pasta, and roasting</p>
                              </div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href="/kitchen-essentials/cookware-guide">Complete Cookware Guide</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Essential cookware"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="tools" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Useful Tools & Gadgets</h2>
                    <p className="text-gray-500">
                      Beyond the basics, these affordable tools will make cooking easier and more enjoyable.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Measuring & Prep Tools</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Measuring cups (dry and liquid)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Measuring spoons</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Mixing bowls (various sizes)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Colander/strainer</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Box grater</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Cooking Utensils</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Wooden spoon</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Silicone spatula</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Tongs</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Whisk</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Ladle</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="sm:col-span-2">
                        <CardHeader>
                          <CardTitle>Worth the Investment</CardTitle>
                          <CardDescription>These items cost a bit more but save time and effort</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <div>
                                <span className="font-medium">Digital food thermometer</span>
                                <p className="text-xs text-gray-500">Ensures food safety and prevents overcooking</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <div>
                                <span className="font-medium">Immersion blender</span>
                                <p className="text-xs text-gray-500">
                                  Makes soups, sauces, and smoothies with minimal cleanup
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <div>
                                <span className="font-medium">Rice cooker</span>
                                <p className="text-xs text-gray-500">Perfect rice every time with no monitoring</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <div>
                                <span className="font-medium">Slow cooker</span>
                                <p className="text-xs text-gray-500">
                                  Set-and-forget meals that cook while you're away
                                </p>
                              </div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href="/kitchen-essentials/tools-guide">Complete Tools Guide</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Kitchen tools and gadgets"
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
            © 2024 Survival Eats. All rights reserved.
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
