"use client"

import { useState } from "react"
import "./homesection.css"
import ScrollToTop from "../ScrollTop/layout"

export default function HomeSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="home-section">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Meena Venkatesh</h1>
          </div>
          <button className="hamburger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li>
                <a href="#home" className="nav-link active" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#AboutSection" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="connect-btn"
            onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }}
          >
            Connect With Me
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/meena.jpeg" alt="MEENA" />
            </div>
            <h1 className="main-title">
              <span className="gradient-text">{"I'm "} Meena Venkatesh</span>
              {", Chartered Accountant based in India."}
            </h1>
            <p className="description">
              I’m a Chartered Accountant with 7+ years of experience helping startups and fast-growing companies achieve
              financial transparency, compliance, and growth.
            </p>
            <div className="cta-buttons">
              <button
                className="connect-btn"
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                }}
              >
                Connect With Me
              </button>
              <a
                href="https://calendly.com/meenavenkatesh17/quick-sync"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                Let's Sync
              </a>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </main>
    </div>
  )
}
