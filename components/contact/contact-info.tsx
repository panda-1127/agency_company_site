"use client"

import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github } from "lucide-react"
import { AnimateOnScroll } from "@/components/section-heading"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nexabyte.io",
    href: "mailto:hello@nexabyte.io",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Innovation Drive, San Francisco, CA 94105",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM PST",
    href: "#",
  },
]

export function ContactInfo() {
  return (
    <div className="flex flex-col justify-center">
      <AnimateOnScroll animation="slide-in-right">
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
          <h2 className="mb-6 text-xl font-semibold text-foreground">Get in Touch</h2>

          <div className="flex flex-col gap-6">
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-start gap-4 transition-colors"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <p className="mb-4 text-sm font-medium text-foreground">Follow Us</p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
