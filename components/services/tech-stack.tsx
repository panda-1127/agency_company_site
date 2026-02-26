"use client"

import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function TechStack() {
  const { t } = useLanguage()

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label={t.techStack.label}
            title={t.techStack.title}
            description={t.techStack.description}
          />
        </AnimateOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.techStack.categories.map((cat, i) => (
            <AnimateOnScroll key={cat.label} animation="fade-in-up" delay={i * 100}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  {cat.label}
                </h3>
                <ul className="flex flex-col gap-3">
                  {cat.techs.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
