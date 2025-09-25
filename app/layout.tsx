import React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import Header from "./components/common/header"
import Footer from "./components/common/footer"

export const metadata: Metadata = {
  title: "Meena - Chartered Accountant",
  description: "Professional accounting services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  )
}
