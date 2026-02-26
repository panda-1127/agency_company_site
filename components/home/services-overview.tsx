"use client"

import Link from "next/link"
import {
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Link2,
  ArrowRight,
} from "lucide-react"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context";

export function ServicesOverview() {
  const { t } = useLanguage();
  const services = t.services_overview.services;

  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{
        backgroundImage:
          "url('/images/background-services.webp')",
        backgroundSize: "w-full h-full",
      }} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label={t.services_overview.label}
            title={t.services_overview.title}
            description={t.services_overview.description}
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} animation="fade-in-up" delay={i * 100}>
              <Link
                href="/services"
                className="group relative flex flex-col h-80 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 "
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundBlendMode: 'soft-light'
                }}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {t.services_overview.learn}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          >
            {t.services_overview.all}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </ section>
  )
}
