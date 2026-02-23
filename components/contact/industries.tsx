"use client"

import { Sun, Bus, GraduationCap, Landmark, ShoppingCart, Stethoscope } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

const industries = [
  {
    icon: Sun,
    title: "Solar & Energy",
    description:
      "Apps and systems designed to make installers' lives better, connecting data points and helping them manage projects and budgets efficiently.",
  },
  {
    icon: Bus,
    title: "Mobility",
    description:
      "Portals and apps created to make traveling smoother, payments faster, and managing programs and fleets smarter.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Solutions crafted to make communication more efficient between institutions and stakeholders with relevant integrations.",
  },
  {
    icon: Landmark,
    title: "Fintech",
    description:
      "Secure, scalable financial technology platforms handling payments, lending, and regulatory compliance at enterprise scale.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description:
      "End-to-end commerce solutions with inventory management, multi-channel selling, and optimized checkout experiences.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "HIPAA-compliant healthcare applications connecting patients, providers, and payers with seamless data exchange.",
  },
]

export function Industries() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="Industries"
            title="Industries we've worked with"
            description="We bring deep domain expertise across multiple verticals to deliver solutions that truly understand your business."
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
