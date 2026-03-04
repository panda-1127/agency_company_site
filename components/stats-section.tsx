"use client"

import { useLanguage } from "@/lib/language-context"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(value.replace(/[^0-9.]/g, ""))
  const suffix = value.replace(/[0-9.]/g, "")
  const isPercentage = value.includes("%") || value.includes(".")

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = numericValue
    const duration = 2000
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, numericValue])

  return (
    <span>
      {isPercentage ? `${count === 999 ? "99.9" : count}` : count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative overflow-hidden py-20" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/stats-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-background/90 dark:bg-background/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center text-xl font-bold text-foreground sm:text-4xl"
        >
          {t.stats.title}
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {t.stats.items.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-foreground sm:text-5xl">
                <AnimatedCounter value={stat.value} inView={isInView} />
              </div>
              <div className="mt-2 text-2xl font-medium text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
