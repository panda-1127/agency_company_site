import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { TechStack } from "@/components/services/tech-stack"
import { ProcessSection } from "@/components/services/process-section"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive software development services including web, mobile, blockchain, AI, cloud, and UX design.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <TechStack />
      <ProcessSection />
      <CtaSection />
    </>
  )
}
