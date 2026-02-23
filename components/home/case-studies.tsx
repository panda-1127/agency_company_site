"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"

const cases = [
  {
    number: "01",
    title: "FinStream",
    subtitle: "Fintech Dashboard & Payment Platform",
    tags: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    image: "/images/case-study-1.jpg",
    description:
      "Built a comprehensive fintech dashboard that processes 10,000+ transactions daily with real-time analytics.",
  },
  {
    number: "02",
    title: "SolarTrack Pro",
    subtitle: "Solar Energy Management System",
    tags: ["React Native", "Python", "TensorFlow", "Azure", "IoT"],
    image: "/images/case-study-2.jpg",
    description:
      "Mobile platform for monitoring and optimizing solar installations across 200+ commercial sites.",
  },
  {
    number: "03",
    title: "MarketHub",
    subtitle: "eCommerce & Order Management",
    tags: ["Next.js", "Tailwind", ".NET", "Azure", "Microservices"],
    image: "/images/case-study-3.jpg",
    description:
      "End-to-end ecommerce platform handling virtual warehousing and multi-channel order management.",
  },
]

export function CaseStudies() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="Case Studies"
            title="Software Development Case Studies"
            description="From scale-ups to large enterprises, we are trusted to build systems from their initial idea to their final release and further."
          />
        </AnimateOnScroll>

        <div className="flex flex-col gap-16">
          {cases.map((item, i) => (
            <AnimateOnScroll
              key={item.title}
              animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              delay={100}
            >
              <div
                className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <span className="text-5xl font-bold text-primary/20">{item.number}</span>
                  <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base font-medium text-primary">{item.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Read the full story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="flex-1 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={item.image}
                    alt={`${item.title} case study screenshot`}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
