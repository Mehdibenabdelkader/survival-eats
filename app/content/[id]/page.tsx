import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, FileText, Play, Tag, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Extended content data with full article content
interface ContentItem {
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
  content: string
  author?: string
  publishedDate?: string
}

const contentData: ContentItem[] = [
  {
    id: "1",
    title: "Your First Grocery Trip: Complete Beginner's Guide",
    description:
      "Everything you need to know for your first intentional grocery shopping trip, from planning to execution.",
    type: "both",
    tags: ["groceries", "beginner", "planning"],
    readTime: "8 min read",
    videoLength: "12:30",
    image: "/placeholder.svg?height=400&width=800",
    slug: "/grocery-basics/first-trip-guide",
    youtubeUrl: "https://youtube.com/watch?v=example1",
    youtubeEmbedId: "dQw4w9WgXcQ", // Example YouTube video ID
    featured: true,
    author: "Snackademy Team",
    publishedDate: "2024-01-15",
    content: `
# Your First Grocery Trip: Complete Beginner's Guide

Going grocery shopping for the first time can feel overwhelming, but with the right preparation and mindset, it becomes much more manageable. This comprehensive guide will walk you through everything you need to know to make your first grocery trip successful.

## Before You Go: Planning is Key

### 1. Set a Budget
Before stepping foot in the store, decide how much you want to spend. A good rule of thumb for beginners is to start with $50-75 for a week's worth of basic meals. This gives you room to buy essentials without overspending.

### 2. Plan Your Meals
Think about 3-4 simple meals you want to make this week. Don't try to plan elaborate dishes - focus on simple combinations like:
- Pasta with marinara sauce and vegetables
- Rice with beans and frozen vegetables
- Sandwiches with soup
- Scrambled eggs with toast

### 3. Make a Shopping List
Write down everything you need, organized by store section:

**Produce:**
- Onions (1 bag)
- Bananas (1 bunch)
- Frozen vegetables (2 bags)

**Pantry:**
- Rice or pasta (1 box)
- Canned beans (2 cans)
- Pasta sauce (1 jar)
- Bread (1 loaf)

**Dairy/Protein:**
- Eggs (1 dozen)
- Milk (1 container)
- Cheese (1 package)

## At the Store: Navigation Tips

### Start with the Perimeter
Most grocery stores are laid out with fresh foods around the perimeter and packaged foods in the center aisles. Start by walking the perimeter to get your bearings and pick up fresh items first.

### Read Unit Prices
Don't just look at the total price - check the unit price (price per ounce, pound, etc.) to compare value between different sizes and brands.

### Don't Shop Hungry
This classic advice exists for a reason. When you're hungry, everything looks appealing and you're more likely to buy items you don't need.

### Stick to Your List
It's okay to deviate slightly if you see a good deal on something you use regularly, but try to stick close to your planned purchases.

## Common Beginner Mistakes to Avoid

1. **Buying too much produce** - Start small. Produce spoils quickly if you're not used to cooking regularly.

2. **Ignoring store brands** - Store brands are often 20-30% cheaper than name brands with similar quality.

3. **Shopping without a plan** - This leads to either buying random items that don't make complete meals, or spending way more than intended.

4. **Not checking expiration dates** - Always check dates, especially on dairy and meat products.

## After Shopping: Storage Tips

When you get home, put away perishables first:
- Refrigerate dairy, meat, and fresh produce immediately
- Store onions and potatoes in a cool, dark place (but not together)
- Keep bread in a cool, dry place or freeze half if you won't use it quickly

## Building Confidence

Remember, grocery shopping is a skill that improves with practice. Your first few trips might feel awkward or take longer than expected, and that's completely normal. Each time you go, you'll become more familiar with the store layout, prices, and what works for your cooking style.

Start simple, be patient with yourself, and focus on buying ingredients for meals you actually know how to make. As your confidence grows, you can gradually expand your shopping and cooking repertoire.

## Quick Reference Checklist

**Before leaving home:**
- [ ] Set a budget
- [ ] Plan 3-4 simple meals
- [ ] Write a shopping list organized by store section
- [ ] Eat something so you're not shopping hungry

**At the store:**
- [ ] Start with the perimeter
- [ ] Compare unit prices, not just total prices
- [ ] Check expiration dates
- [ ] Stick to your list

**After shopping:**
- [ ] Put away perishables immediately
- [ ] Store items properly to maximize freshness
- [ ] Plan when you'll cook your first meal

With these fundamentals in place, you'll be well-prepared for a successful first grocery shopping experience.
    `,
  },
  {
    id: "2",
    title: "Essential Kitchen Tools for Beginners",
    description: "The only tools you actually need to start cooking - no expensive gadgets required.",
    type: "post",
    tags: ["kitchen", "tools", "beginner"],
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=800",
    slug: "/kitchen-essentials/starter-kit",
    featured: true,
    author: "Snackademy Team",
    publishedDate: "2024-01-10",
    content: `
# Essential Kitchen Tools for Beginners

Starting to cook can feel overwhelming when you see all the gadgets and tools available. The truth is, you need very few tools to make delicious, nutritious meals. This guide focuses on the absolute essentials that will serve you well as you begin your cooking journey.

## The Absolute Must-Haves

### 1. Chef's Knife (8-inch)
A good chef's knife is your most important tool. It handles 90% of your cutting tasks, from chopping vegetables to slicing meat. You don't need to spend a fortune - a $30-50 knife that feels comfortable in your hand will serve you well for years.

**What to look for:**
- Comfortable grip
- Good balance (not too heavy or light)
- Sharp blade (most knives come sharp, but dull quickly without proper care)

### 2. Cutting Board
You need a stable surface for all that chopping. A large wooden or plastic cutting board (at least 12x18 inches) gives you plenty of room to work safely.

**Pro tip:** If you choose plastic, get two - one for raw meat and one for everything else to prevent cross-contamination.

### 3. Large Skillet or Frying Pan
A 10-12 inch skillet handles most stovetop cooking tasks. Look for one with sloped sides that make it easy to stir and flip food.

**Material options:**
- **Stainless steel:** Durable, oven-safe, good for browning
- **Non-stick:** Easy cleanup, good for eggs and delicate foods
- **Cast iron:** Excellent heat retention, gets better with age

### 4. Medium Saucepan (2-3 quarts)
Perfect for cooking rice, making sauces, heating soup, or boiling eggs. Choose one with a tight-fitting lid.

### 5. Large Pot (6-8 quarts)
Essential for cooking pasta, making large batches of soup, or boiling vegetables. A heavy-bottomed pot distributes heat more evenly.

## Measuring and Mixing Essentials

### 6. Measuring Cups and Spoons
Get a set of dry measuring cups (1/4, 1/3, 1/2, 1 cup) and a liquid measuring cup (2-4 cups). Measuring spoons are crucial for seasonings and small amounts.

### 7. Mixing Bowls
A set of 2-3 bowls in different sizes handles most mixing tasks. Stainless steel or glass bowls are versatile and durable.

### 8. Wooden Spoon and Spatula
A wooden spoon won't scratch your pans and is perfect for stirring. A flexible spatula helps you scrape bowls clean and flip delicate foods.

## Nice-to-Have Tools

Once you're comfortable with the basics, these tools make cooking easier:

### 9. Tongs
Like having an extension of your hand - perfect for flipping, turning, and serving food safely.

### 10. Whisk
Essential for making smooth sauces, scrambling eggs, and mixing batters.

### 11. Can Opener
Unless everything you buy comes with pull-tabs, you'll need this basic tool.

### 12. Colander
For draining pasta, washing vegetables, and straining liquids.

## Baking Basics

If you plan to do any baking:

### 13. Rimmed Baking Sheet
Perfect for roasting vegetables, baking cookies, or making sheet pan meals.

### 14. 9x13 Baking Dish
Great for casseroles, baked pasta, or roasting larger items.

## Shopping Tips

**Start small:** Don't buy everything at once. Start with the first 8 items and add tools as you discover you need them.

**Quality over quantity:** It's better to have fewer, well-made tools than a drawer full of cheap gadgets that don't work well.

**Check thrift stores:** You can often find quality kitchen tools at thrift stores for a fraction of the retail price.

**Read reviews:** Before buying, check online reviews to see what other home cooks recommend.

## Care and Maintenance

**Knives:** Hand wash and dry immediately. Never put knives in the dishwasher.

**Pans:** Let them cool before washing to prevent warping. Use appropriate utensils to avoid scratching non-stick surfaces.

**Cutting boards:** Wash with hot, soapy water after each use. Sanitize occasionally with a diluted bleach solution.

## What You DON'T Need (Yet)

Avoid these common "beginner" purchases until you're sure you'll use them:
- Electric can openers
- Specialty gadgets (garlic presses, egg slicers, etc.)
- Knife sets (you only need one good knife to start)
- Expensive appliances (stand mixers, food processors)

## Building Your Kitchen Over Time

Your kitchen tools should grow with your cooking skills and interests. Start with these essentials, learn to use them well, and add new tools only when you find yourself frequently wishing you had them.

Remember: great cooks have been making amazing food with basic tools for thousands of years. Focus on learning techniques rather than accumulating gadgets, and you'll be well on your way to cooking confidence.
    `,
  },
  {
    id: "3",
    title: "Knife Skills 101: Safe Cutting Techniques",
    description: "Master basic knife skills and learn to cut safely and efficiently in the kitchen.",
    type: "video",
    tags: ["cooking", "knife-skills", "safety"],
    videoLength: "15:45",
    image: "/placeholder.svg?height=400&width=800",
    slug: "/kitchen-essentials/knife-skills",
    youtubeUrl: "https://youtube.com/watch?v=example2",
    youtubeEmbedId: "dQw4w9WgXcQ",
    author: "Snackademy Team",
    publishedDate: "2024-01-08",
    content: `
# Knife Skills 101: Safe Cutting Techniques

Good knife skills are the foundation of efficient cooking. This guide covers the essential techniques that will make you faster, safer, and more confident in the kitchen.

## Safety First

Before we dive into cutting techniques, let's establish the fundamental safety rules:

### The Golden Rules of Knife Safety

1. **Keep your knives sharp** - Dull knives are more dangerous because they require more pressure and are more likely to slip.

2. **Always cut on a stable surface** - Use a cutting board that doesn't slide around. Place a damp towel underneath if needed.

3. **Never cut toward your body** - Always cut away from yourself and keep your fingers clear of the blade path.

4. **Focus on what you're doing** - Don't let distractions cause accidents.

5. **Store knives properly** - Use a knife block, magnetic strip, or blade guards. Never leave knives loose in drawers.

## Proper Knife Grip

### The Chef's Grip
Hold the knife handle with your dominant hand, wrapping your fingers around the handle with your thumb and index finger gripping the sides of the blade just above the handle. This gives you maximum control.

### The Guide Hand
Your non-dominant hand guides the food and protects your fingers:
- Curl your fingertips under, creating a "claw" shape
- Use your knuckles as a guide for the knife blade
- Keep your thumb tucked back behind your fingers

## Basic Cutting Techniques

### 1. The Rock Chop
This is your go-to technique for most chopping tasks:
- Keep the tip of the knife on the cutting board
- Rock the blade down and forward through the food
- Lift the handle while keeping the tip down
- Use your guide hand to move the food, not the knife

### 2. Slicing
For clean, even slices:
- Draw the knife through the food in one smooth motion
- Don't saw back and forth
- Keep slices uniform for even cooking

### 3. Dicing
Perfect for onions, carrots, and other vegetables:
- Make parallel cuts horizontally (if the item is thick enough)
- Make parallel cuts vertically
- Cut across the vertical cuts to create dice

## Common Cuts Every Cook Should Know

### Julienne
Thin matchstick cuts, about 1/8 inch thick:
- Cut the item into 2-3 inch segments
- Square off the sides
- Cut into thin planks
- Stack planks and cut into thin strips

### Brunoise
Tiny, uniform dice (about 1/8 inch):
- Start with julienne cuts
- Cut across the strips to create small cubes

### Chiffonade
For cutting herbs and leafy greens:
- Stack the leaves
- Roll them tightly
- Cut across the roll to create thin ribbons

## Specific Techniques for Common Ingredients

### Onions
1. Cut off the top, leaving the root end intact
2. Peel away the outer layer
3. Cut in half from top to root
4. Make horizontal cuts (optional for large onions)
5. Make vertical cuts toward the root
6. Cut across to dice

### Garlic
1. Crush the clove with the flat side of your knife
2. Peel away the skin
3. Mince by rocking the knife over the garlic repeatedly

### Herbs
- For sturdy herbs like rosemary: strip leaves from stems, then chop
- For delicate herbs like basil: use the chiffonade technique

## Practice Exercises

### Exercise 1: Basic Knife Control
Practice the rock chop motion without any food:
- Keep the tip on the board
- Rock the blade up and down
- Focus on smooth, controlled movements

### Exercise 2: Onion Dicing
Onions are perfect for practicing because:
- They're inexpensive
- The layers help you see if your cuts are even
- You'll use this skill constantly

### Exercise 3: Carrot Coins and Sticks
- Practice making even slices (coins)
- Then practice cutting sticks (julienne)
- Focus on keeping pieces uniform

## Maintaining Your Knife

### Honing vs. Sharpening
- **Honing** realigns the blade edge (do this regularly)
- **Sharpening** removes metal to create a new edge (do this occasionally)

### Basic Honing Technique
1. Hold the honing steel vertically
2. Place the knife at a 20-degree angle
3. Draw the blade down and across the steel
4. Alternate sides with each stroke
5. Use light pressure - let the weight of the knife do the work

## Common Mistakes to Avoid

1. **Gripping the knife too tightly** - This causes fatigue and reduces control
2. **Cutting too fast** - Speed comes with practice; focus on technique first
3. **Using the wrong knife** - A chef's knife isn't always the best choice
4. **Neglecting the guide hand** - Proper hand position prevents accidents
5. **Working with dull knives** - Sharp knives are safer and more efficient

## Building Speed and Confidence

Start slowly and focus on:
- Consistent technique
- Even cuts
- Safety

Speed will come naturally as you practice. Many professional cooks say it's better to be slow and precise than fast and sloppy.

## When to Use Different Knives

- **Chef's knife:** Most cutting tasks
- **Paring knife:** Small, precise work like peeling or trimming
- **Serrated knife:** Bread, tomatoes, and other items with tough skins

Remember, good knife skills take time to develop. Be patient with yourself, practice regularly, and always prioritize safety over speed. With consistent practice, these techniques will become second nature, making your time in the kitchen more enjoyable and efficient.
    `,
  },
  // Add more content items with full article content...
]

function getContentById(id: string): ContentItem | undefined {
  return contentData.find((item) => item.id === id)
}

function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`
}

export default function ContentDetailPage({ params }: { params: { id: string } }) {
  const content = getContentById(params.id)

  if (!content) {
    notFound()
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
        {(content.type === "post" || content.type === "both") && (
          <section className="w-full py-8 md:py-12">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-8 md:p-12">
                    <div
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: content.content
                          .replace(/\n/g, "<br>")
                          .replace(/#{1,6}\s/g, (match) => {
                            const level = match.trim().length
                            return `<h${level} class="text-${4 - level}xl font-bold mt-8 mb-4">`
                          })
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Related Content */}
        <section className="w-full py-12 md:py-16 bg-stone-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Related Content</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {contentData
                  .filter((item) => item.id !== content.id && item.tags.some((tag) => content.tags.includes(tag)))
                  .slice(0, 4)
                  .map((item) => (
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
