"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function CtaSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-card py-24 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute -left-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-primary/5 blur-[80px]" />
        <div className="absolute -right-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <AnimateOnScroll animation="fade-in-up">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {t.cta_section.label}
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={100}>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {t.cta_section.title}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.cta_section.description}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={300}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                {t.cta_section.start_project}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-border text-foreground hover:bg-secondary hover:text-foreground"
            >
              <Link href="/services">{t.cta_section.explore_services}</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
