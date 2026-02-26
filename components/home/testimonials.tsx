"use client"

import { Star, Quote } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function Testimonials() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const testimonials = t.testimonials.items

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label={t.testimonials.label}
            title={t.testimonials.title}
          />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <div className="relative mx-auto max-w-4xl">
            {testimonials.map((item, i) => (
              <div
                key={item.name}
                className={cn(
                  "transition-all duration-500",
                  i === active ? "block" : "hidden"
                )}
              >
                <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
                  <Quote className="mb-6 h-10 w-10 text-primary/30" />
                  <blockquote className="text-lg leading-relaxed text-foreground lg:text-xl">
                     {`"${item.quote}"`}
                  </blockquote>
                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                      <div className="mt-2 flex gap-0.5">
                        {Array.from({ length: item.rating }).map((_, j) => (
                          <Star
                            key={j}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="hidden gap-8 sm:flex">
                      {item.stats.map((stat) => (
                        <div key={stat.label} className="text-right">
                          <p className="text-2xl font-bold text-primary">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === active
                      ? "w-8 bg-primary"
                      : "w-2 bg-secondary hover:bg-muted-foreground"
                  )}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
