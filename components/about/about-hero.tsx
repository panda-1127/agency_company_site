"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/section-heading"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background pb-24 pt-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <AnimateOnScroll animation="fade-in-up">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                The NexaByte Way
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  {"We're a results-driven team of engineering and creative professionals with a knack for innovation and using the latest technologies to help enterprises achieve digital transformation."}
                </p>
                <p>
                  {"So far, we've built robust systems for players in solar, fintech, ecommerce, education, and mobility industries across the US, UK, and Australia."}
                </p>
                <p>
                  {"What started as a couple of technical teams building fixed-scope projects using bleeding edge tech soon turned into a fully formed customer-centric tech organization offering challenging positions for colleagues and constant growth at competitive prices for our clients."}
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="slide-in-right" delay={200} className="flex-1">
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/about-team.jpg"
                alt="NexaByte team working together"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
