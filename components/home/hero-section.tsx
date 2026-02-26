"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    { value: "200+", label: t.hero.pro_desc },
    { value: "98%", label: t.hero.pro_client },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.7] bg-no-repeat bg-cover bg-center blur-sm "
          style={{
            backgroundImage:
              "url('/images/background-hero.jpg')",
            backgroundSize: "w-full h-full",
          }}
        />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-yellow-800/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-green-400/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pb-20 pt-32 lg:flex-row lg:gap-16 lg:px-8 lg:pt-40">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <AnimateOnScroll animation="fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-black">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              {t.hero.badge}
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
              {t.hero.title_1}{" "}
              <span className="text-primary">{t.hero.title_2}</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white lg:mx-0 text-pretty">
              {t.hero.disc}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-up" delay={300}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  {t.hero.btn1}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-border text-foreground hover:bg-secondary hover:text-foreground"
              >
                <Link href="/services">
                  <Play className="mr-2 h-4 w-4 text-primary" />
                  {t.hero.btn2}
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Stats */}
          <AnimateOnScroll animation="fade-in-up" delay={400}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-blue-800 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right image */}
        <AnimateOnScroll animation="slide-in-right" delay={200} className="flex-1">
          <div className="relative">
            <div className="animate-pulse-glow overflow-hidden rounded-2xl shadow-md shadow-background/80">
              <Image
                src="/images/hero-team.jpg"
                alt="C3 Core team collaborating on software development"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 animate-float rounded-xl border border-border bg-card/90 p-4 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                  <span className="text-lg font-bold text-accent">A+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.hero.iso}</p>
                  <p className="text-xs text-muted-foreground">{t.hero.iso_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
