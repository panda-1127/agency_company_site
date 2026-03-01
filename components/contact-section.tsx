"use client"

import { useLanguage } from "@/lib/language-context"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
} from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 2000)
  }

  const contactInfo = [
    { icon: MapPin, text: t.contact.info.address, color: "text-primary bg-primary/10" },
    { icon: Mail, text: t.contact.info.email, color: "text-accent bg-accent/10", href: `mailto:${t.contact.info.email}` },
    { icon: Phone, text: t.contact.info.phone, color: "text-[#10b981] bg-[#10b981]/10", href: `tel:${t.contact.info.phone}` },
    { icon: Clock, text: t.contact.info.hours, color: "text-[#f59e0b] bg-[#f59e0b]/10" },
  ]

  return (
    <section
      id="contact"
      className="relative bg-secondary/50 py-24 lg:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-lg font-semibold text-primary">
            {t.contact.tag}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-4 max-w-2xl text-balance text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
        >
          {t.contact.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground"
        >
          {t.contact.subtitle}
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-col gap-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg leading-relaxed text-foreground transition-colors hover:text-primary"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-lg leading-relaxed text-foreground">
                        {item.text}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117033.214!2d113.8956!3d22.4805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f1c8b2b9e6a1%3A0x5b6a9c2c9a7f1abc!2sFusion%20Fitness%20Gym%2C%20Nanshan%2C%20Shenzhen%2C%20Guangdong%2C%20China!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="C3 Core office location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-lg font-medium text-foreground">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder={t.contact.form.name}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-lg font-medium text-foreground">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder={t.contact.form.email}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-lg font-medium text-foreground">
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t.contact.form.company}
                />
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-lg font-medium text-foreground">
                  {t.contact.form.message}
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t.contact.form.message}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-lg font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70"
              >
                {sending ? (
                  t.contact.form.sending
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
