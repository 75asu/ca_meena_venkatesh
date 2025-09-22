'use client'
import AboutSection from "@/components/About/layout"
import ContactSection from "@/components/Contact/contactsec"
import HomeSection from "@/components/Home/layout"
import ServicesSection from "@/components/Services/layout"
import WorkSection from "@/components/Work/layout"
import React from "react"

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection/>
      <ContactSection/>
    </main>
  )
}
