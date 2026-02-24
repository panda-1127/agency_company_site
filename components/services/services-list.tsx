"use client"

import {
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Link2,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building and maintaining websites, web applications, and seamless digital user experiences that drive business growth and engagement.",
    features: [
      "Custom Web Applications",
      "Progressive Web Apps (PWA)",
      "Enterprise Portals & Dashboards",
      "API Development & Integration",
      "E-commerce Solutions",
      "Content Management Systems",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating and optimizing mobile apps for iOS, Android, and cross-platform experiences that users love and businesses depend on.",
    features: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "App Store Optimization",
      "Mobile UI/UX Design",
      "Performance Optimization",
      "Push Notifications & Analytics",
    ],
    color: "text-accent",
    bg: "bg-accent/10",
    borderHover: "hover:border-accent/50",
  },
  {
    icon: Palette,
    title: "Design & User Experience",
    description:
      "Crafting intuitive, visually appealing, and user-centered digital experiences and interfaces that convert visitors to customers.",
    features: [
      "UI/UX Research & Strategy",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Usability Testing",
      "Responsive Design",
      "Brand Identity Design",
    ],
    color: "text-chart-3",
    bg: "bg-chart-3/10",
    borderHover: "hover:border-chart-3/50",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Developing intelligent systems, automating tasks, and enhancing decision-making with data-driven AI and machine learning solutions.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Recommendation Engines",
      "Process Automation with AI",
      "Custom Model Training",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: Cloud,
    title: "Cloud Managed Services",
    description:
      "Optimizing, securing, and maintaining cloud infrastructure for seamless business operations at any scale.",
    features: [
      "Cloud Migration Strategy",
      "Networking Fundamentals",
      "DevOps & CI/CD Pipelines",
      "24/7 Monitoring & Support",
      "Cost Optimization",
      "Security & Compliance",
    ],
    color: "text-accent",
    bg: "bg-accent/10",
    borderHover: "hover:border-accent/50",
  },
  {
    icon: Link2,
    title: "Blockchain Development",
    description:
      "Building decentralized applications, smart contracts, and blockchain infrastructure for the next generation of digital trust and transparency.",
    features: [
      "Smart Contract Development",
      "DeFi Protocol Engineering",
      "NFT Marketplace Development",
      "Tokenization Solutions",
      "Blockchain Security Audits",
      "Web3 Integration",
    ],
    color: "text-chart-3",
    bg: "bg-chart-3/10",
    borderHover: "hover:border-chart-3/50",
  },
]

export function ServicesList() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {services.map((service, i) => (
            <AnimateOnScroll
              key={service.title}
              animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
            >
              <div
                className={cn(
                  "flex flex-col gap-8 rounded-2xl border border-border bg-background p-8 transition-all duration-300 lg:flex-row lg:items-start lg:gap-12 lg:p-12",
                  service.borderHover
                )}
              >
                <div className="flex-1">
                  <div
                    className={cn(
                      "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl",
                      service.bg,
                      service.color
                    )}
                  >
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="flex-1">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    What We Offer
                  </h4>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle
                          className={cn("mt-0.5 h-5 w-5 shrink-0", service.color)}
                        />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
