import type { Metadata } from "next"
import { Inter, Noto_Sans_SC } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sc",
  weight: ["300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "C3 Core",
  description:
    "C3 Core delivers world-class software development, blockchain, AI, cloud, and digital transformation services. Your strategic partner in building the future."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <title>C3 Core</title>
      <link rel="icon" href="/logo.png" sizes="any"></link>
      <body
        className={`${inter.variable} ${notoSansSC.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
