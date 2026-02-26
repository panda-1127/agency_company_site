import type { Metadata } from "next"
import { CareerHero } from "@/components/career/career-hero"
import { Openings } from "@/components/career/openings"
import { Perks } from "@/components/career/perks"
import { BlogPreview } from "@/components/home/blog-preview"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join C3 Core - explore open positions and become part of a results-driven team pushing the boundaries of technology.",
}

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <Openings />
      <Perks />
      <BlogPreview />
      <CtaSection />
    </>
  )
}
