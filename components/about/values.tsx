"use client"

import { UserCheck, Lightbulb, Handshake } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

const values = [
  {
    icon: UserCheck,
    title: "Customer Centricity",
    description:
      "Quality in software development comes from truly understanding the client's niche and industry. We focus not only on the quality of products we deliver but also on the experience clients have with us while we work together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation as a Collective Mindset",
    description:
      "We are intentional about creating a culture of innovation where everyone feels empowered to think outside the box. This is key to staying ahead and delivering the best possible products and services.",
  },
  {
    icon: Handshake,
    title: "Collaboration as a Key Driver",
    description:
      "When starting a project, we always think about how important it is to focus not just on sharing results but to fully embrace the journey together, achieving milestones as one team with common goals.",
  },
]

export function Values() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="Our Values"
            title="What guides us"
            description="Our mission is to help build cutting-edge software solutions specifically designed to improve operational efficiency, increase productivity, and enhance customer experience."
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
