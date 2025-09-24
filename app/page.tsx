"use client"

import { useState } from "react"
import Link from "next/link"
import {HiMail, HiOutlineCalendar, HiPhone, } from "react-icons/hi"
import { personalInfo } from "./constants/constatnts"

export default function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", newsletterEmail)
    // Add your newsletter subscription logic here
    setNewsletterEmail("")
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center py-20 mt-5">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 relative z-10 animate-fade-in">
            <div className="flex justify-center items-center flex-shrink-0">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-[200px] h-[200px] rounded-full object-cover border-4 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-[5px]"
              />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-0 text-white text-center max-w-4xl ">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                {"I'm "} {personalInfo.name}
              </span>
              {`, ${personalInfo.title} based in ${personalInfo.location}.`}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-0 max-w-4xl text-center">
              {personalInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-white border-none px-8 py-4 rounded-full text-lg font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(139,92,246,0.4)] flex items-center gap-2"
              >
                <HiOutlineCalendar className="w-5 h-5 inline-block" />
                <span>Connect With Me</span>
              </button>
              <Link
                href={personalInfo.calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-[10px] text-white border border-white/30 px-7 py-4 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 hover:border-white/50 hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)] flex items-center gap-2"
              >
                <HiPhone className="w-5 h-5 inline-block" />
                <span>Book a call</span>
              </Link>
            </div>

            {/* Newsletter Section with glassmorphism */}
            <div className="w-full max-w-lg mt-8">
              <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-[10px] border border-gray-400/10 hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleNewsletterSubmit}>
                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <HiMail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="w-full bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(139,92,246,0.4)] whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}