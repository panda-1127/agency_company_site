"use client"

import { useLanguage } from "@/lib/language-context"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"

const projectImages = [
  "/images/portfolio-1.jpg",
  "/images/portfolio-2.jpg",
  "/images/portfolio-3.jpg",
  "/images/portfolio-4.jpg",
  "/images/portfolio-5.jpg",
  "/images/portfolio-6.jpg",
]

const categoryColors: Record<string, string> = {
  "ECommerce": "bg-primary/10 text-primary",
  "AI & Machine Learning": "bg-[#10b981]/10 text-[#10b981]",
  "Healthcare": "bg-[#f59e0b]/10 text-[#f59e0b]",
  "Blockchain": "bg-[#8b5cf6]/10 text-[#8b5cf6]",
  // Chinese categories
  "\u7535\u5B50\u5546\u52A1": "bg-primary/10 text-primary",
  "\u4eba\u5de5\u667a\u80fd\u4e0e\u673a\u5668\u5b66\u4e60": "bg-[#10b981]/10 text-[#10b981]",
  "\u536b\u751f\u4fdd\u5065": "bg-[#f59e0b]/10 text-[#f59e0b]",
  "\u533a\u5757\u94fe": "bg-[#8b5cf6]/10 text-[#8b5cf6]",
}

export function PortfolioSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="portfolio" className="relative py-24 lg:py-32" ref={ref}>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/portfolio-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-background/80 dark:bg-background/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <span className="inline-block rounded-full bg-[#f59e0b]/10 px-4 py-1.5 text-xl font-semibold text-[#f59e0b]">
            {t.portfolio.tag}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-4 max-w-2xl text-balance text-center text-4xl font-bold text-foreground sm:text-4xl lg:text-5xl"
        >
          {t.portfolio.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mb-16 max-w-2xl text-center text-2xl leading-relaxed text-muted-foreground"
        >
          {t.portfolio.subtitle}
        </motion.p>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={projectImages[i]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  suppressHydrationWarning
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Hover Overlay */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0,
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-foreground/60"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xl font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    {t.portfolio.viewProject}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute left-3 top-3">
                  <span
                    className={`rounded-full px-3 py-1 text-lg font-semibold ${categoryColors[project.category] || "bg-secondary text-secondary-foreground"
                      }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-xl text-justify leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="rounded-md bg-secondary px-2 py-1 text-lg font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xl font-medium text-primary transition-colors hover:underline"
                >
                  {t.portfolio.viewProject}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
