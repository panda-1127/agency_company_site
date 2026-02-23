"use client"

import { AnimateOnScroll } from "@/components/section-heading"

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-in-up">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={100}>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Hit your business goals with our{" "}
            <span className="text-primary">Software Development Services</span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Covering the entire software development lifecycle, we build software that drives
            meaningful change and lasting success for enterprises worldwide.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
