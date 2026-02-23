import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay up to date with our latest articles on software development, blockchain, AI, cloud technology, and more.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <CtaSection />
    </>
  )
}
