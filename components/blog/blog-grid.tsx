"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimateOnScroll } from "@/components/section-heading"

const categories = ["All", "Technical", "Business", "Blockchain", "AI & ML", "Cloud"]

const posts = [
  {
    image: "/images/blog-1.jpg",
    category: "Blockchain",
    date: "February 10, 2026",
    title: "The Rise of Decentralized Applications in Enterprise",
    excerpt:
      "Exploring how blockchain technology is reshaping enterprise operations with transparency, security, and efficiency at scale.",
  },
  {
    image: "/images/blog-2.jpg",
    category: "AI & ML",
    date: "January 25, 2026",
    title: "AI Agents in Business: Where Do They Provide the Most Value?",
    excerpt:
      "When used right, AI agents can quietly transform how businesses operate. Learn where they deliver the most impact.",
  },
  {
    image: "/images/blog-3.jpg",
    category: "Cloud",
    date: "January 10, 2026",
    title: "Cloud Migration Strategies for Modern Enterprises",
    excerpt:
      "A comprehensive guide to planning and executing successful cloud migration with minimal disruption to operations.",
  },
  {
    image: "/images/blog-1.jpg",
    category: "Technical",
    date: "December 22, 2025",
    title: "Scaling Beyond Product-Market Fit: SaaS Architecture Guide",
    excerpt:
      "The tech stack that fueled your MVP can become the very thing that slows you down. Learn how to architect for scale.",
  },
  {
    image: "/images/blog-2.jpg",
    category: "Business",
    date: "December 19, 2025",
    title: "The Hidden Tech Debt That Can Kill Your Series A Momentum",
    excerpt:
      "You just raised your Seed round. The clock is ticking. Learn how to avoid the most dangerous forms of technical debt.",
  },
  {
    image: "/images/blog-3.jpg",
    category: "Business",
    date: "December 18, 2025",
    title: "Building Compliant AI: How to Architect for GDPR and HIPAA",
    excerpt:
      "If one thing can derail an AI rollout faster than a weak model, it is compliance failure. Here is how to avoid it.",
  },
  {
    image: "/images/blog-1.jpg",
    category: "Blockchain",
    date: "December 15, 2025",
    title: "Smart Contract Security: Best Practices for 2026",
    excerpt:
      "A deep dive into the most common vulnerabilities in smart contracts and how to build more secure decentralized applications.",
  },
  {
    image: "/images/blog-2.jpg",
    category: "Technical",
    date: "December 10, 2025",
    title: "Is It Worth It? A Framework for Projecting AI Software Returns",
    excerpt:
      "Every company buying into AI hits the same moment of truth. Learn a proven framework for evaluating AI ROI.",
  },
  {
    image: "/images/blog-3.jpg",
    category: "Cloud",
    date: "December 5, 2025",
    title: "Kubernetes in Production: Lessons From 100+ Deployments",
    excerpt:
      "After managing Kubernetes across dozens of enterprise clients, here are the patterns that actually work at scale.",
  },
]

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category Filters */}
        <AnimateOnScroll>
          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <AnimateOnScroll key={`${post.title}-${i}`} animation="fade-in-up" delay={i * 80}>
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={340}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.date}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary text-balance">
                    {post.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
