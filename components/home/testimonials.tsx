"use client"

import { Star, Quote } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

const testimonials = [
  {
    quote:
      "Their commitment to delivering solid, reliable solutions is unmatched. They have consistently met or exceeded expectations across every engagement.",
    name: "Marcus Chen",
    role: "VP of Technology, SolarEdge Systems",
    rating: 5,
    stats: [
      { value: "+442", label: "New Users Onboarded" },
      { value: "+1,600", label: "Processes Automated" },
    ],
  },
  {
    quote:
      "NexaByte is a highly skilled software delivery partner. Their developers have immense experience building front-end solutions that are both scalable and secure. Communication is first class.",
    name: "Sarah Mitchell",
    role: "Group Product Manager, MobiPay",
    rating: 5,
    stats: [
      { value: "17,000+", label: "Devices in Use" },
      { value: "400+", label: "Trusted Partners" },
    ],
  },
  {
    quote:
      "Thanks to NexaByte we have seen significant improvement in system performance and uptime, and a reduction in cloud infrastructure costs. Their proactivity and customer-centric approach stands out.",
    name: "Viktor Jagar",
    role: "CTO, DataVault LLC",
    rating: 5,
    stats: [
      { value: "160+", label: "Retailers Supported" },
      { value: "35%", label: "Average Conversions Increase" },
    ],
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="Testimonials"
            title="What our clients think of us"
          />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <div className="relative mx-auto max-w-4xl">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={cn(
                  "transition-all duration-500",
                  i === active ? "block" : "hidden"
                )}
              >
                <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
                  <Quote className="mb-6 h-10 w-10 text-primary/30" />
                  <blockquote className="text-lg leading-relaxed text-foreground lg:text-xl">
                    {`"${t.quote}"`}
                  </blockquote>
                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                      <div className="mt-2 flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star
                            key={j}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="hidden gap-8 sm:flex">
                      {t.stats.map((stat) => (
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
