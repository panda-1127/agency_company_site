"use client"

import { Users, Layers, Target, Compass } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

const models = [
  {
    icon: Users,
    title: "Technical Staff Augmentation",
    description:
      "A flexible, cost-effective way to quickly scale teams without the long-term commitment of full-time hires, ensuring seamless integration and efficient progress.",
  },
  {
    icon: Layers,
    title: "Dedicated Delivery Team",
    description:
      "Using an Agile-based approach, the team adapts responsively to meet project objectives while working closely with client leadership for maximum alignment.",
  },
  {
    icon: Target,
    title: "Project Based",
    description:
      "Tailored for fixed-scope projects with defined timeframes and budgets, this method delivers specific outcomes and encourages early understanding of requirements.",
  },
  {
    icon: Compass,
    title: "Technical Leadership",
    description:
      "Experienced technical leaders offer strategic direction and mentorship, aligning technology efforts with business goals without the costs of full-time employees.",
  },
]

export function EngagementModels() {
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
            label="How We Work"
            title="Empowering Growth with Flexibility & Expertise"
            description="All our services are grounded in a customer-centric approach and cutting-edge tech expertise."
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model, i) => (
            <AnimateOnScroll key={model.title} animation="fade-in-up" delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <model.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-foreground">{model.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {model.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
