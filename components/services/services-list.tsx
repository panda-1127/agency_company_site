"use client"

import {
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Link2,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/language-context"

const visuals = [
  {
    icon: Globe,
    color: "text-primary",
    bg: "bg-primary/10",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: Smartphone,
    color: "text-accent",
    bg: "bg-accent/10",
    borderHover: "hover:border-accent/50",
  },
  {
    icon: Palette,
    color: "text-chart-3",
    bg: "bg-chart-3/10",
    borderHover: "hover:border-chart-3/50",
  },
  {
    icon: Brain,
    color: "text-primary",
    bg: "bg-primary/10",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: Cloud,
    color: "text-accent",
    bg: "bg-accent/10",
    borderHover: "hover:border-accent/50",
  },
  {
    icon: Link2,
    color: "text-chart-3",
    bg: "bg-chart-3/10",
    borderHover: "hover:border-chart-3/50",
  },
]

export function ServicesList() {
  const { t } = useLanguage()

  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {t.servicesList.services.map((service, i) => {
            const visual = visuals[i]
            const Icon = visual.icon
            return (
              <AnimateOnScroll
                key={service.title}
                animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              >
                <div
                  className={cn(
                    "flex flex-col gap-8 rounded-2xl border border-border bg-background p-8 transition-all duration-300 lg:flex-row lg:items-start lg:gap-12 lg:p-12",
                    visual.borderHover
                  )}
                >
                  <div className="flex-1">
                    <div
                      className={cn(
                        "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl",
                        visual.bg,
                        visual.color
                      )}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                      {service.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.servicesList.offerLabel}
                    </h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle
                            className={cn("mt-0.5 h-5 w-5 shrink-0", visual.color)}
                          />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
