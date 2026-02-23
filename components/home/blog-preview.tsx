"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

const articles = [
  {
    image: "/images/blog-1.jpg",
    category: "Blockchain",
    date: "February 10, 2026",
    title: "The Rise of Decentralized Applications in Enterprise",
    excerpt:
      "Exploring how blockchain technology is reshaping enterprise operations with transparency, security, and efficiency at scale.",
    slug: "rise-of-decentralized-apps",
  },
  {
    image: "/images/blog-2.jpg",
    category: "AI & ML",
    date: "January 25, 2026",
    title: "AI Agents in Business: Where Do They Provide the Most Value?",
    excerpt:
      "When used right, AI agents can quietly transform how businesses operate. Learn where they deliver the most impact.",
    slug: "ai-agents-business-value",
  },
  {
    image: "/images/blog-3.jpg",
    category: "Cloud",
    date: "January 10, 2026",
    title: "Cloud Migration Strategies for Modern Enterprises",
    excerpt:
      "A comprehensive guide to planning and executing successful cloud migration with minimal disruption to operations.",
    slug: "cloud-migration-strategies",
  },
]

export function BlogPreview() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="From Our Blog"
            title="Latest articles on software development and beyond"
          />
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <AnimateOnScroll key={article.slug} animation="fade-in-up" delay={i * 100}>
              <Link
                href="/blog"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={340}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.date}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary text-balance">
                    {article.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View More Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
