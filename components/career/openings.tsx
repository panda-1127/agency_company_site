"use client"

import { Clock, MapPin, ArrowRight } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

const jobs = [
  {
    title: "Senior Full Stack Developer",
    location: "San Francisco / Remote",
    date: "January 13, 2026",
    type: "Full-time",
  },
  {
    title: "Senior Frontend Developer",
    location: "San Francisco",
    date: "January 13, 2026",
    type: "Full-time",
  },
  {
    title: "Blockchain Engineer",
    location: "Remote",
    date: "January 10, 2026",
    type: "Full-time",
  },
  {
    title: "AI / ML Engineer",
    location: "San Francisco / Remote",
    date: "January 8, 2026",
    type: "Full-time",
  },
  {
    title: "Senior .NET Developer",
    location: "San Francisco",
    date: "January 5, 2026",
    type: "Full-time",
  },
  {
    title: "Product Manager / Business Analyst",
    location: "San Francisco / Remote",
    date: "December 28, 2025",
    type: "Full-time",
  },
]

export function Openings() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="Current Openings"
            title="Join like-minded individuals"
            description="Join a team that builds bespoke software solutions by connecting data, technology, and aesthetics."
          />
        </AnimateOnScroll>

        <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <AnimateOnScroll key={job.title} animation="fade-in-up" delay={i * 80}>
              <div className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      {job.date}
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
