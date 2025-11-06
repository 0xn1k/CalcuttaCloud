"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "10 UI/UX Design Trends Shaping 2025",
    excerpt:
      "Discover the latest design trends that are revolutionizing user experiences and how to implement them in your projects.",
    category: "Design",
    author: "Priya Sharma",
    date: "Nov 5, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "SEO in 2025: What Actually Works",
    excerpt:
      "Cut through the noise and learn the SEO strategies that drive real results for modern businesses.",
    category: "Marketing",
    author: "Rahul Mehta",
    date: "Nov 3, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Building Your Brand Identity: A Complete Guide",
    excerpt:
      "Everything you need to know about creating a memorable brand identity that resonates with your audience.",
    category: "Branding",
    author: "Anjali Gupta",
    date: "Nov 1, 2025",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Next.js vs React: Choosing the Right Framework",
    excerpt:
      "A detailed comparison to help you make the right choice for your next web development project.",
    category: "Development",
    author: "Arjun Das",
    date: "Oct 28, 2025",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Social Media Marketing: Platform-Specific Strategies",
    excerpt:
      "Master Instagram, LinkedIn, Facebook, and Twitter with our platform-specific marketing playbook.",
    category: "Marketing",
    author: "Sneha Roy",
    date: "Oct 25, 2025",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "The Art of Creating Wedding Invitation Videos",
    excerpt:
      "Learn how to create stunning, cinematic wedding invitation videos that couples and guests will love.",
    category: "Creative",
    author: "Amit Banerjee",
    date: "Oct 22, 2025",
    readTime: "4 min read",
  },
  {
    id: 7,
    title: "Marketing Automation: Tools & Best Practices",
    excerpt:
      "Streamline your marketing workflows with automation tools like Zapier, Make, and HubSpot.",
    category: "Automation",
    author: "Vikram Singh",
    date: "Oct 20, 2025",
    readTime: "6 min read",
  },
  {
    id: 8,
    title: "Mobile App Development: iOS vs Android",
    excerpt:
      "Understanding the key differences and deciding which platform to prioritize for your app.",
    category: "Development",
    author: "Neha Kapoor",
    date: "Oct 18, 2025",
    readTime: "7 min read",
  },
  {
    id: 9,
    title: "Content Marketing That Converts",
    excerpt:
      "Create compelling content that not only attracts visitors but converts them into loyal customers.",
    category: "Marketing",
    author: "Raj Chatterjee",
    date: "Oct 15, 2025",
    readTime: "5 min read",
  },
];

const categories = ["All", "Design", "Marketing", "Development", "Branding", "Creative"];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog & Insights
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Expert insights on design, development, marketing, and digital transformation.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-12 flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  category === "All"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
              >
                {/* Image Placeholder */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-10">📝</div>
                  </div>
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-3 flex-1 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium">{post.author}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-8 py-3 font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105">
              Load More Articles
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
