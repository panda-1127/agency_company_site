"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function BlogHero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <AnimateOnScroll animation="fade-in-up">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                {t.blogHero.badge}
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                {t.blogHero.title}
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                {t.blogHero.description}
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="slide-in-right" delay={200} className="flex-1">
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/blog-hero.jpg"
                alt="Technology blog hero"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
