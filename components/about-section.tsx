"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye, Heart } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32" ref={ref}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/about-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-background/80 dark:bg-background/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xl font-semibold text-primary">
            {t.about.tag}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-16 max-w-2xl text-balance text-center text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
        >
          {t.about.title}
        </motion.h2>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpg"
                alt="C3 Core team collaborating in modern office"
                width={600}
                height={650}
                className="h-[650px] w-full object-cover"
                suppressHydrationWarning
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -right-4 glass-effect rounded-xl border border-border bg-card/90 p-4 shadow-xl sm:right-4"
            >
              <div className="text-2xl font-bold text-primary">2025</div>
              <div className="text-lg text-muted-foreground">Founded in ShenZhen</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="mb-0.5 text-xl leading-relaxed text-justify text-muted-foreground">
              {t.about.description}
            </p>
            <p className="mb-0.5 text-xl leading-relaxed text-justify text-muted-foreground">
              {t.about.description2}
            </p>

            {/* Values Grid */}
            <div className="flex w-full flex-col gap-4">
              {[
                {
                  icon: Target,
                  title: t.about.mission,
                  desc: t.about.missionText,
                  color: "text-primary bg-primary/10",
                },
                {
                  icon: Eye,
                  title: t.about.vision,
                  desc: t.about.visionText,
                  color: "text-accent bg-accent/10",
                },
                {
                  icon: Heart,
                  title: t.about.values,
                  desc: t.about.valuesText,
                  color: "text-[#f59e0b] bg-[#f59e0b]/10",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className=" w-full rounded-xl border border-border bg-card p-4"
                >
                  <div
                    className={`mb-1 inline-flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="inline-block mb-0.5 text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-lg text-justify leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
