import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { Testimonials } from "@/components/home/testimonials"
import { Industries } from "@/components/contact/industries"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with C3 Core. Let us help you build software that drives real business results.",
}

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pb-24 pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <Testimonials />
      <Industries />
    </>
  )
}
