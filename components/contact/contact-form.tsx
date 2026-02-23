"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/section-heading"

export function ContactForm() {
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
          Contact Us
        </span>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in-up" delay={100}>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
          Your IT strategy begins here
        </h1>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in-up" delay={200}>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us about your project and {"we'll"} get back to you within 24 hours.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in-up" delay={300}>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="john@company.com"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
              Company
            </label>
            <input
              id="company"
              type="text"
              placeholder="Your Company"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
              {"What's your biggest challenge that software can solve?"} *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell us about your project, goals, and timeline..."
              className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <p className="text-xs text-muted-foreground">
            By submitting, you agree to {"NexaByte's"} Privacy Policy.
          </p>

          <Button
            type="submit"
            size="lg"
            className="h-12 w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
            disabled={submitted}
          >
            {submitted ? "Message Sent!" : "Send Message"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </AnimateOnScroll>
    </div>
  )
}
