"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "zh"

const translations = {
  en: {
    nav: { home: "Home", services: "Services", about: "About Us", blog: "Blog", careers: "Careers", contact: "Contact", getInTouch: "Get in Touch" },
    hero: { title: "Strategic IT Consultancy", subtitle: "Building the future" },
    footer: { rights: "All rights reserved." }
  },
  zh: {
    nav: { home: "首页", services: "服务", about: "关于我们", blog: "博客", careers: "加入我们", contact: "联系我们", getInTouch: "立即咨询" },
    hero: { title: "战略性 IT 咨询", subtitle: "共创未来" },
    footer: { rights: "版权所有。" }
  }
}

const LanguageContext = createContext({
  lang: "en" as Language,
  setLang: (lang: Language) => {},
  t: translations.en
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en")

  // Load preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language
    if (saved) setLang(saved)
  }, [])

  const handleSetLang = (newLang: Language) => {
    setLang(newLang)
    localStorage.setItem("lang", newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)