import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/context/language-context"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "C3 Core",
    template: "%s | C3 Core",
  },
  description:
    "C3 Core delivers world-class software development, blockchain, AI, cloud, and digital transformation services. Your strategic partner in building the future.",
}

export const viewport: Viewport = {
  themeColor: "#0f182e",
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
      <body className="font-sans antialiased min-h-screen bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main className="relative flex min-h-screen flex-col">{children}</main>
            <Footer />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>

      </body>
    </html>
  )
}
