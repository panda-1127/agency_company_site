"use client"

import Image from "next/image"
import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function CaseStudies() {
  const { t } = useLanguage()
  const cases = t.caseStudies.cases

  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label={t.caseStudies.label}
            title={t.caseStudies.title}
            description={t.caseStudies.description}
          />
        </AnimateOnScroll>

        <div className="flex flex-col gap-16">
          {cases.map((item, i) => {
            const Icon = item.icon

            return (
              <AnimateOnScroll
                key={item.title}
                animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                delay={100}
              >
                <div
                  className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  <div className="flex-1">
                    {Icon && (
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    )}
                    <span className="text-5xl font-bold text-primary/20">{item.number}</span>
                    <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-base font-medium text-primary">{item.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags?.map(tag => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
