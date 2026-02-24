"use client"

import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

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
        <p className="text-3xl text-center"
        >No developers in team yet</p>
      </div>
    </section>
  )
}
