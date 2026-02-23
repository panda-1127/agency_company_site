"use client"

import {
  Heart,
  GraduationCap,
  Home,
  Dumbbell,
  Coffee,
  Globe,
} from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

const perks = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, and vision coverage for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Annual learning budget, conference attendance, and access to top-tier online courses.",
  },
  {
    icon: Home,
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours. We trust you to manage your time effectively.",
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness",
    description: "Monthly gym membership reimbursement to keep you healthy and energized.",
  },
  {
    icon: Coffee,
    title: "Team Events",
    description: "Regular team outings, hackathons, and social events to build strong connections.",
  },
  {
    icon: Globe,
    title: "Travel Opportunities",
    description: "Work with international clients and travel to exciting locations for on-site projects.",
  },
]

export function Perks() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="Why NexaByte"
            title="Perks & Benefits"
            description="We invest in our people because great software is built by happy, motivated teams."
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk, i) => (
            <AnimateOnScroll key={perk.title} animation="fade-in-up" delay={i * 80}>
              <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <perk.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">{perk.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {perk.description}
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
