import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Flame, ThermometerSnowflakeIcon as ThermometerSnow, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CookingTechniquesPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cooking Techniques</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Master these fundamental cooking methods and you'll be able to prepare countless delicious meals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="stovetop" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="stovetop">Stovetop Basics</TabsTrigger>
                <TabsTrigger value="oven">Oven Techniques</TabsTrigger>
                <TabsTrigger value="prep">Prep Methods</TabsTrigger>
                <TabsTrigger value="timing">Timing & Planning</TabsTrigger>
              </TabsList>
              <TabsContent value="stovetop" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Stovetop Cooking Fundamentals</h2>
                    <p className="text-gray-500">
                      Most of your cooking will happen on the stovetop. Master these techniques to create countless
                      meals.
                    </p>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Flame className="h-5 w-5 text-[#FCAE47]" />
                            <span>Sautéing</span>
                          </CardTitle>
                          <CardDescription>Quick cooking in a small amount of fat</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm">
                              Sautéing is a quick cooking method that uses a hot pan and a small amount of fat to cook
                              food rapidly. It's perfect for vegetables, thin cuts of meat, and creating flavor bases
                              for other dishes.
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <p className="font-medium">Key Steps:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Heat pan before adding oil</li>
                                  <li>Cut food into uniform pieces</li>
                                  <li>Don't overcrowd the pan</li>
                                  <li>Stir or toss frequently</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium">Perfect For:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Onions & garlic</li>
                                  <li>Vegetables</li>
                                  <li>Thin cuts of meat</li>
                                  <li>Stir-fries</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Flame className="h-5 w-5 text-[#FCAE47]" />
                            <span>Boiling & Simmering</span>
                          </CardTitle>
                          <CardDescription>Cooking in liquid at different temperatures</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm">
                              Boiling is cooking in water at 212°F (100°C) with large bubbles, while simmering uses
                              lower heat with small bubbles. Knowing when to boil versus simmer is key to properly
                              cooking many foods.
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <p className="font-medium">Boiling is best for:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Pasta</li>
                                  <li>Blanching vegetables</li>
                                  <li>Hard-boiled eggs</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium">Simmering is best for:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Rice</li>
                                  <li>Soups and stews</li>
                                  <li>Sauces</li>
                                  <li>Tougher cuts of meat</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href="/cooking-techniques/stovetop-guide">Complete Stovetop Guide</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Person cooking on stovetop"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="oven" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Oven Cooking Techniques</h2>
                    <p className="text-gray-500">
                      The oven is perfect for hands-off cooking and developing deep flavors through roasting and baking.
                    </p>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Flame className="h-5 w-5 text-[#FCAE47]" />
                            <span>Roasting</span>
                          </CardTitle>
                          <CardDescription>Cooking with dry heat to develop flavor</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm">
                              Roasting uses dry heat to cook food, creating delicious browned exteriors and tender
                              interiors. It's one of the easiest cooking methods that delivers amazing results.
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <p className="font-medium">Key Steps:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Preheat oven completely</li>
                                  <li>Use high enough temperature</li>
                                  <li>Don't overcrowd the pan</li>
                                  <li>Toss with oil and seasonings</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium">Perfect For:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Vegetables</li>
                                  <li>Chicken and meats</li>
                                  <li>Potatoes</li>
                                  <li>Sheet pan meals</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Flame className="h-5 w-5 text-[#FCAE47]" />
                            <span>Baking</span>
                          </CardTitle>
                          <CardDescription>Cooking with surrounding heat</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm">
                              Baking surrounds food with even heat, perfect for casseroles, baked pasta dishes, and
                              one-dish meals. It's ideal for beginners because it requires minimal attention once the
                              food is in the oven.
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <p className="font-medium">Key Steps:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Follow temperature exactly</li>
                                  <li>Use the middle rack</li>
                                  <li>Check for doneness</li>
                                  <li>Let rest before serving</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium">Perfect For:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Casseroles</li>
                                  <li>Baked pasta</li>
                                  <li>One-dish meals</li>
                                  <li>Baked proteins</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href="/cooking-techniques/oven-guide">Complete Oven Guide</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Food being roasted in oven"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="prep" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Food Preparation Methods</h2>
                    <p className="text-gray-500">
                      Good preparation makes cooking faster, easier, and more enjoyable. Master these basic techniques.
                    </p>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Utensils className="h-5 w-5 text-[#FCAE47]" />
                            <span>Cutting Techniques</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm">
                              Consistent cutting ensures even cooking and better presentation. These basic cuts will
                              handle most recipes.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="space-y-2">
                                <p className="font-medium">Dice</p>
                                <p className="text-xs text-gray-500">
                                  Cutting food into small cubes of uniform size. Common for onions, carrots, potatoes.
                                </p>
                              </div>
                              <div className="space-y-2">
                                <p className="font-medium">Slice</p>
                                <p className="text-xs text-gray-500">
                                  Cutting food into thin, flat pieces. Used for vegetables, meats, and bread.
                                </p>
                              </div>
                              <div className="space-y-2">
                                <p className="font-medium">Mince</p>
                                <p className="text-xs text-gray-500">
                                  Cutting into very small pieces. Common for garlic, herbs, and aromatics.
                                </p>
                              </div>
                              <div className="space-y-2">
                                <p className="font-medium">Julienne</p>
                                <p className="text-xs text-gray-500">
                                  Cutting into thin matchstick shapes. Used for stir-fries and salads.
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Utensils className="h-5 w-5 text-[#FCAE47]" />
                            <span>Mise en Place</span>
                          </CardTitle>
                          <CardDescription>"Everything in its place" - the key to stress-free cooking</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Mise en place is the practice of preparing and organizing all ingredients before you start
                            cooking. This simple habit transforms cooking from chaotic to calm.
                          </p>
                          <ul className="mt-2 space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Read the entire recipe before starting</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Gather all ingredients and tools</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Measure, chop, and prepare everything</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Organize ingredients in order of use</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href="/cooking-techniques/prep-guide">Complete Prep Guide</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Food preparation techniques"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="timing" className="pt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Timing & Meal Planning</h2>
                    <p className="text-gray-500">
                      One of the biggest challenges for new cooks is getting everything ready at the same time. Here's
                      how to master timing.
                    </p>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-[#FCAE47]" />
                            <span>Meal Timing Basics</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Getting all components of a meal ready at the same time is a skill that comes with practice.
                            These strategies will help.
                          </p>
                          <ul className="mt-2 space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Start with the longest-cooking item first</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Work backward from when you want to eat</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Use "holding techniques" for items that finish early</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-[#FCAE47] mt-0.5" />
                              <span>Prepare cold items while hot items are cooking</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <ThermometerSnow className="h-5 w-5 text-[#FCAE47]" />
                            <span>Holding & Reheating</span>
                          </CardTitle>
                          <CardDescription>Keep food at the right temperature until serving</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm">
                              Sometimes components finish at different times. Here's how to hold food properly until
                              everything is ready.
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <p className="font-medium">Keeping Food Warm:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Oven at 200°F (93°C)</li>
                                  <li>Covered with foil</li>
                                  <li>Warming drawer if available</li>
                                  <li>Insulated container</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium">Reheating Safely:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Microwave with splash of water</li>
                                  <li>Stovetop with lid</li>
                                  <li>Oven for larger portions</li>
                                  <li>Heat to 165°F (74°C) for safety</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href="/cooking-techniques/timing-guide">Complete Timing Guide</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Meal timing and planning"
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
