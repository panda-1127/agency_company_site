"use client"

import { useLanguage } from "@/lib/language-context"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [active, setActive] = useState(0)

  const next = () =>
    setActive((prev) => (prev + 1) % t.testimonials.items.length)
  const prev = () =>
    setActive(
      (prev) =>
        (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length
    )

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 lg:py-32"
      ref={ref}
    >
      {/* Background accent */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <span className="inline-block rounded-full bg-[#8b5cf6]/10 px-4 py-1.5 text-lg font-semibold text-[#8b5cf6]">
            {t.testimonials.tag}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-4 max-w-2xl text-balance text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
        >
          {t.testimonials.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground"
        >
          {t.testimonials.subtitle}
        </motion.p>

        {/* Testimonial Cards */}
        <div className="relative mx-auto max-w-4xl">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-lg sm:p-12"
          >
            <Quote className="mb-6 h-10 w-10 text-primary/20" />

            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-[#f59e0b] text-[#f59e0b]"
                />
              ))}
            </div>

            <blockquote className="mb-8 text-lg leading-relaxed text-foreground sm:text-xl">
              {`"${t.testimonials.items[active].quote}"`}
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                {t.testimonials.items[active].author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {t.testimonials.items[active].author}
                </div>
                <div className="text-lg text-muted-foreground">
                  {t.testimonials.items[active].company}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {t.testimonials.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-muted-foreground/30"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
