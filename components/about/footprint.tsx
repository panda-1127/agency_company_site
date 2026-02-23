"use client"

import { Building2, MapPin } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

const locations = [
  {
    icon: Building2,
    title: "Headquarters in San Francisco",
    description:
      "With a world-class talent pool and a thriving tech ecosystem, our main development office sits in the heart of the Bay Area with satellite offices across the US.",
  },
  {
    icon: MapPin,
    title: "Global Client Locations",
    description:
      "By employing top talent worldwide, we deliver exceptional results through solid solutions to our clients in the US, UK, Australia, and across Europe.",
  },
]

export function Footprint() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="Our Footprint"
            title="Where we operate"
          />
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((loc, i) => (
            <AnimateOnScroll key={loc.title} animation="fade-in-up" delay={i * 150}>
              <div className="flex items-start gap-6 rounded-2xl border border-border bg-background p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <loc.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{loc.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {loc.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
