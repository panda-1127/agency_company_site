"use client"

import Link from "next/link"
import {
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Link2,
  ArrowRight,
} from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building and maintaining websites, web applications, and seamless digital user experiences that drive business growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating and optimizing mobile apps for iOS, Android, and cross-platform experiences that users love.",
  },
  {
    icon: Palette,
    title: "Design & User Experience",
    description:
      "Crafting intuitive, visually appealing, and user-centered digital experiences and interfaces.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Developing intelligent systems, automating tasks, and enhancing decision-making with data-driven solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Managed Services",
    description:
      "Optimizing, securing, and maintaining cloud infrastructure for seamless business operations at scale.",
  },
  {
    icon: Link2,
    title: "Blockchain Development",
    description:
      "Building decentralized applications, smart contracts, and blockchain infrastructure for the next generation of digital trust.",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="What We Do"
            title="Hit your business goals with our Software Development Services"
            description="Covering the entire software development lifecycle, we build software that drives meaningful change and lasting success."
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} animation="fade-in-up" delay={i * 100}>
              <Link
                href="/services"
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
