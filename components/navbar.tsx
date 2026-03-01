"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Globe, Icon } from "lucide-react"

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "portfolio", href: "#portfolio" },
  { key: "team", href: "#team" },
  { key: "testimonials", href: "#testimonials" },
  { key: "contact", href: "#contact" },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { locale, t, toggleLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navT = t.nav

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "glass-effect bg-background/80 shadow-lg border-b border-border"
            : "bg-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <Image className="inline-block" src={"/logo.png"} width={50} height={50} alt="logo" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-foreground">
                  C3
                </span>
                <span className="text-sm leading-tight text-muted-foreground">
                  Core
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-lg font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {navT[link.key as keyof typeof navT]}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-lg font-medium text-foreground transition-all hover:bg-secondary"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4" />
                <span>{locale === "en" ? "CN" : "EN"}</span>
              </button>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-all hover:bg-secondary"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
              )}

              {/* CTA */}
              <a
                href="#contact"
                className="hidden rounded-lg bg-primary px-4 py-2 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 sm:block"
              >
                {navT.getStarted}
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="glass-effect fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 p-4 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {navT[link.key as keyof typeof navT]}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-lg font-semibold text-primary-foreground"
              >
                {navT.getStarted}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
