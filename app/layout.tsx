import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "NexaByte | Strategic IT Consultancy & Software Development",
    template: "%s | NexaByte",
  },
  description:
    "NexaByte delivers world-class software development, blockchain, AI, cloud, and digital transformation services. Your strategic partner in building the future.",
}

export const viewport: Viewport = {
  themeColor: "#0B1120",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
