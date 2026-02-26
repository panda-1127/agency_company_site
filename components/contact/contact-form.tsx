"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/section-heading"
import { useLanguage } from "@/context/language-context"

export function ContactForm() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      <AnimateOnScroll animation="fade-in-up">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {t.contactForm.badge}
        </span>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in-up" delay={100}>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
         {t.contactForm.title}
        </h1>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in-up" delay={200}>
        <p className="mt-4 text-lg text-muted-foreground">
          {t.contactForm.description}
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in-up" delay={300}>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              {t.contactForm.labels.name}
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder={t.contactForm.placeholders.name}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              {t.contactForm.labels.email}
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder={t.contactForm.placeholders.email}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
              {t.contactForm.labels.company}
            </label>
            <input
              id="company"
              type="text"
              placeholder={t.contactForm.placeholders.company}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
              {t.contactForm.labels.message}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder={t.contactForm.placeholders.message}
              className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <p className="text-xs text-muted-foreground">
            {t.contactForm.privacy}
          </p>

          <Button
            type="submit"
            size="lg"
            className="h-12 w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
            disabled={submitted}
          >
            {submitted ? t.contactForm.submit.sent : t.contactForm.submit.default}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </AnimateOnScroll>
    </div>
  )
}
