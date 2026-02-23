import { HeroSection } from "@/components/home/hero-section"
import { LogoMarquee } from "@/components/home/logo-marquee"
import { ServicesOverview } from "@/components/home/services-overview"
import { CaseStudies } from "@/components/home/case-studies"
import { Testimonials } from "@/components/home/testimonials"
import { EngagementModels } from "@/components/home/engagement-models"
import { BlogPreview } from "@/components/home/blog-preview"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <ServicesOverview />
      <CaseStudies />
      <Testimonials />
      <EngagementModels />
      <BlogPreview />
      <CtaSection />
    </>
  )
}
