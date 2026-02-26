"use client"

import { Search, Pencil, Code, Rocket } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

const icons = [Search, Pencil, Code, Rocket]

export function ProcessSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label={t.process.label}
            title={t.process.title}
            description={t.process.description}
          />
        </AnimateOnScroll>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-20 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

          {t.process.steps.map((step, i) => {
            const Icon = icons[i]

            return (
              <AnimateOnScroll key={step.title} animation="fade-in-up" delay={i * 150}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-4 ring-card">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                    Step {step.step}
                  </span>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
