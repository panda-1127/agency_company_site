"use client"
import { useLanguage } from "@/context/language-context"

export function LogoMarquee() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-border bg-card py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {t.marquee.label}
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-card to-transparent" />
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {t.marquee.items.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex h-12 items-center gap-2 rounded-lg px-6 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" role="listitem"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-xs font-bold text-primary" aria-hidden="true"> 
                {client.charAt(0).toUpperCase()}
              </div>
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
