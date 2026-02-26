"use client"

import React from "react"
import { Users, Layers, Target, Compass } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

const iconMap = [Users, Layers, Target, Compass]

export function EngagementModels() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
        backgroundImage:
          "url('/images/background-studio.png')",
        backgroundSize: "w-full h-full",
      }} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label={t.engagement.label}
            title={t.engagement.title}
            description={t.engagement.description}
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.engagement.models.map((model, i) => {
            const Icon = iconMap[i] || Users
            return (
              <AnimateOnScroll key={model.title} animation="fade-in-up" delay={i * 100}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <div className="h-6 w-6">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-base font-semibold text-foreground">{model.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {model.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            )
          })
          }
        </div>
      </div>
    </section>
  )
}
