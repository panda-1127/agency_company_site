"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

const icons = { Clock }

export function BlogPreview() {
  const { t } = useLanguage()
  const articles = t.blogPreview.articles

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label={t.blogPreview.label}
            title={t.blogPreview.title}
          />
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <AnimateOnScroll key={article.title} animation="fade-in-up" delay={i * 100}>
              <Link
                href="/blog"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/images/blog-${i + 1}.jpg`}
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
                    {t.blogPreview.readMore}
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
            {t.blogPreview.viewMore}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
