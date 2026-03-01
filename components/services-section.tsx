"use client"

import { useLanguage } from "@/lib/language-context"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Globe,
  Brain,
  Cloud,
  Smartphone,
  Bitcoin,
  Shield,
} from "lucide-react"

const iconMap: Record<string, typeof Globe> = {
  code: Globe,
  brain: Brain,
  cloud: Cloud,
  mobile: Smartphone,
  database: Bitcoin,
  shield: Shield,
}

const colorMap = [
  "from-[#dc2626] to-[#f59e0b]",
  "from-[#0ea5e9] to-[#8b5cf6]",
  "from-[#10b981] to-[#0ea5e9]",
  "from-[#f59e0b] to-[#dc2626]",
  "from-[#8b5cf6] to-[#dc2626]",
  "from-[#0ea5e9] to-[#10b981]",
]

export function ServicesSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="services"
      className="relative bg-secondary/50 py-24 lg:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-lg font-semibold text-accent">
            {t.services.tag}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-4 max-w-2xl text-balance text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
        >
          {t.services.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground"
        >
          {t.services.subtitle}
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Gradient accent top */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colorMap[i]} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[i]} text-white shadow-lg`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center text-lg font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
