"use client"

import type React from "react"
import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import "./contactsec.css"

const ContactSection = () => {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    setMounted(true) // ✅ Only render after client mounts
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
        "service_v836ikv",   // 🔹 replace with your Service ID
        "template_9zrk5os",  // 🔹 replace with your Template ID
        formData,
        "SXRMY_ZUUL-YtRdnJ"    // 🔹 replace with your Public Key
      )
      .then(() => {
        setFormMessage({ type: "success", text: "✅ Message sent successfully!" })
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setFormMessage(null), 5000) // Clear message after 5 seconds
      })
      .catch(() => {
        setFormMessage({ type: "error", text: "❌ Failed to send message. Please try again." })
      })
      .finally(() => setLoading(false))
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", newsletterEmail)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            Get in <span className="highlight-pill">touch</span>
          </h2>
        </div>

        {/* Main Contact Content */}
        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's talk</h3>
            <p className="contact-description">
              I'm currently available to take on new projects, so feel free to send me a message about anything that you
              want me to work on. You can contact anytime.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <span>services@cameenavenkatesh.co.in</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <span>+91 7975789916</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <span>Bengaluru , India</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Write your message here</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <div className="recaptcha-container">
                  <input type="checkbox" id="recaptcha" required />
                  <label htmlFor="recaptcha">I am human</label>
                  <div className="recaptcha-logo">reCAPTCHA</div>
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit now"}
              </button>

              {/* Feedback message */}
              {formMessage && (
                <p className={`form-message ${formMessage.type}`}>
                  {formMessage.text}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-info">
              <h3 className="newsletter-title">Meena Venkatesh</h3>
              <p className="newsletter-description">
                I'm a Chartered Accountant with 7+ years of experience helping startups and fast-growing companies
                achieve financial transparency, compliance, and growth.
              </p>
            </div>

            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-container">
                <div className="newsletter-icon">✉️</div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="footer-section">
          <div className="footer-content">
            <p className="copyright">© 2025 Meena Venkatesh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
