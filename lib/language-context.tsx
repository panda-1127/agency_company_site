"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "./translations"

interface LanguageContextType {
  locale: Locale
  t: Translations
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "en" ? "zh" : "en"))
  }

  const t = translations[locale]

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
