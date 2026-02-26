"use client"

import { UserCheck, Lightbulb, Handshake } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function Values() {
  const { t } = useLanguage()

  const values = [
    { icon: UserCheck, ...t.values.items[0] },
    { icon: Lightbulb, ...t.values.items[1] },
    { icon: Handshake, ...t.values.items[2] },
  ]

  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label={t.values.label}
            title={t.values.title}
            description={t.values.description}
          />
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, i) => (
            <AnimateOnScroll key={value.title} animation="fade-in-up" delay={i * 150}>
              <div className="group flex flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
