"use client"

import { SectionHeading, AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function Openings() {
  const { t } = useLanguage()

  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label={t.openings.label}
            title={t.openings.title}
            description={t.openings.description}
          />
        </AnimateOnScroll>
        <p className="text-3xl text-center"
        >{t.openings.emptyMessage}</p>
      </div>
    </section>
  )
}
