"use client"

import type React from "react"
import { useState, useEffect } from "react"
import emailjs from "emailjs-com"

export default function Page(){
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setFormMessage(null)

    emailjs
      .send(
        "service_v836ikv",
        "template_9zrk5os",
        formData,
        "SXRMY_ZUUL-YtRdnJ"
      )
      .then(() => {
        setFormMessage({ type: "success", text: "Message sent successfully!" })
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setFormMessage(null), 5000)
      })
      .catch(() => {
        setFormMessage({ type: "error", text: "Failed to send message. Please try again." })
      })
      .finally(() => setLoading(false))
  }

  const contactDetails = [
    {
      icon: "📧",
      label: "Email",
      value: "services@cameenavenkatesh.co.in",
      delay: "0ms"
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 7975789916",
      delay: "100ms"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Bengaluru, India",
      delay: "200ms"
    }
  ]

  return (
    <section id="contact" className="min-h-screen py-24 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">Contact</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-6">
            Let's <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your financial operations? Let's discuss your project.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div 
              className="opacity-0 translate-y-8 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              {/* Introduction */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Start Your Journey
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm currently available to take on new projects and would love to discuss how 
                  I can help your business achieve financial excellence.
                </p>
                <div className="relative p-6 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 border border-purple-500/20 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-2xl blur-sm"></div>
                  <div className="relative">
                    <p className="text-gray-300 leading-relaxed">
                      Whether you're a startup looking to establish robust financial processes 
                      or a scaling company needing expert compliance support, I'm here to help.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
                {contactDetails.map((contact, index) => (
                  <div
                    key={contact.label}
                    className="group opacity-0 translate-y-6 animate-fade-in"
                    style={{ animationDelay: contact.delay }}
                  >
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-400 mb-1">{contact.label}</div>
                        <div className="text-white font-medium group-hover:text-purple-300 transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div 
              className="opacity-0 translate-y-8 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">Send a Message</h3>
                  <p className="text-gray-400">Fill out the form below and I'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  {/* Verification */}
                  <div className="flex items-center gap-3 p-4 bg-gray-900/30 border border-gray-600 rounded-xl">
                    <input
                      type="checkbox"
                      id="verification"
                      required
                      className="w-5 h-5 rounded border-gray-500 text-purple-400 focus:ring-purple-400 focus:ring-2"
                    />
                    <label htmlFor="verification" className="text-sm text-gray-300 flex-1">
                      I verify that I am human and agree to receive communications
                    </label>
                    <div className="text-xs text-gray-500 font-mono">VERIFY</div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {/* Feedback Message */}
                  {formMessage && (
                    <div className={`p-4 rounded-xl text-center font-medium ${
                      formMessage.type === "success" 
                        ? "bg-green-500/10 border border-green-500/30 text-green-400" 
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                    }`}>
                      {formMessage.text}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Promise */}
        <div 
          className="mt-16 text-center opacity-0 translate-y-8 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/30 border border-gray-700/50 rounded-full backdrop-blur-sm">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">
              Typically responds within 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

