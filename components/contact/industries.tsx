"use client"

import { Sun, Bus, GraduationCap, Landmark, ShoppingCart, Stethoscope } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function Industries() {
  const { t } = useLanguage()
  const icons = [Sun, Bus, GraduationCap, Landmark, ShoppingCart, Stethoscope]
  const industries = t.industries.items.map((item, i) => ({
    icon: icons[i],
    ...item
  }))

  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label={t.industries.label}
            title={t.industries.title}
            description={t.industries.description}
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <AnimateOnScroll key={ind.title} animation="fade-in-up" delay={i * 80}>
              <div className="group flex flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ind.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{ind.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {ind.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
