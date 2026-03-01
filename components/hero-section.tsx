"use client"

import dynamic from "next/dynamic"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

const HeroScene = dynamic(
  () => import("./hero-scene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
)

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-background/70 dark:bg-background/70" />
      </div>

      {/* 3D Scene */}
      <HeroScene />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-lg font-medium text-primary">
                {t.hero.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {t.hero.title1}{" "}
              <span className="text-gradient">{t.hero.title2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                {t.hero.cta1}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="group flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-lg font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
              >
                <Play className="h-4 w-4 text-primary" />
                {t.hero.cta2}
              </a>
            </motion.div>
          </div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=" lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: t.hero.stat1, color: "bg-primary/30 border-primary/40" },
                { value: "50+", label: t.hero.stat2, color: "bg-accent/30 border-accent/40" },
                { value: "30+", label: t.hero.stat3, color: "bg-[#f59e0b]/30 border-[#f59e0b]/40" },
                { value: "1+", label: t.hero.stat4, color: "bg-[#10b981]/30 border-[#10b981]/40" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className={`glass-effect rounded-2xl border p-6 ${stat.color}`}
                >
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-lg text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-lg">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-6 w-4 rounded-full border-2 border-muted-foreground/50"
          >
            <div className="mx-auto mt-1 h-1.5 w-1 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
