"use client"

import { useLanguage } from "@/lib/language-context"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Github } from "lucide-react"
import Image from "next/image"

const teamImages = [
  "/images/team-1.jpg",
  "/images/team-2.jpg",
  "/images/team-3.jpg",
  "/images/team-4.jpg",
]

const socials = [
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Github, href: "https://github.com" },
]

export function TeamSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="team"
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
          <span className="inline-block rounded-full bg-[#10b981]/10 px-4 py-1.5 text-lg font-semibold text-[#10b981]">
            {t.team.tag}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-4 max-w-2xl text-balance text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
        >
          {t.team.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground"
        >
          {t.team.subtitle}
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.team.members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={teamImages[i]}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  suppressHydrationWarning
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Social links overlay */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {socials.map((social, j) => (
                    <a
                      key={j}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-card/90 text-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mb-2 text-lg font-medium text-primary">
                  {member.role}
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
