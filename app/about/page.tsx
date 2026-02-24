import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { Values } from "@/components/about/values"
import { TeamStats } from "@/components/about/team-stats"
import { BlogPreview } from "@/components/home/blog-preview"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NexaByte - a results-driven team of engineering and creative professionals with a knack for innovation.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <TeamStats />
      <BlogPreview />
      <CtaSection />
    </>
  )
}
