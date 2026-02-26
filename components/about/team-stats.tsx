"use client"

import { AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function TeamStats() {
  const { t } = useLanguage()

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {t.teamStats.badge}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {t.teamStats.title}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 ">
          {t.teamStats.stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} animation="fade-in-up" delay={i * 80}>
              <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50">
                <p className="text-3xl font-bold text-primary lg:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
