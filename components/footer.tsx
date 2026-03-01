"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Linkedin, ArrowUp } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

export function Footer() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-card">
      {/* Gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <Image className="inline-block" src={"/logo.png"} width={50} height={50} alt="logo" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-foreground">
                  C3
                </span>
                <span className="text-md leading-tight text-muted-foreground">
                  Core
                </span>
              </div>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              {t.footer.quickLinks}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: t.nav.home, href: "#home" },
                { label: t.nav.about, href: "#about" },
                { label: t.nav.services, href: "#services" },
                { label: t.nav.portfolio, href: "#portfolio" },
                { label: t.nav.team, href: "#team" },
                { label: t.nav.contact, href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-lg text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              {t.footer.services}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {t.services.items.map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-lg text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              {t.footer.newsletter}
            </h3>
            <p className="mb-4 text-lg text-muted-foreground">
              {t.footer.newsletterText}
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                required
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-primary px-4 py-2 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-lg text-muted-foreground">
            {"© 2025 C3 Core Consulting. "}{t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-lg text-muted-foreground transition-colors hover:text-primary"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="text-lg text-muted-foreground transition-colors hover:text-primary"
            >
              {t.footer.terms}
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
