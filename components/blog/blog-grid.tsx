"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function BlogGrid() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState(t.blog.categories[0])

  const filtered =
    activeCategory === t.blog.categories[0]
      ? t.blog.posts
      : t.blog.posts.filter((p) => p.category === activeCategory)

  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category Filters */}
        <AnimateOnScroll>
          <div className="mb-12 flex flex-wrap gap-2">
            {t.blog.categories.map((cat) => (
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
            <AnimateOnScroll
              key={`${post.title}-${i}`}
              animation="fade-in-up"
              delay={i * 80}
            >
              <article className="group flex flex-col overflow-hidden rounded-2xl h-96 border border-border bg-background transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
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
                    <Link href={post.url} target="_blank">
                      {t.blog.readMore}
                      <ArrowRight className="h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
                    </Link>
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