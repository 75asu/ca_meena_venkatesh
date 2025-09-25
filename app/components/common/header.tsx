'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"
import { navItems, personalInfo } from "../../constants/constatnts"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    // Add scroll effect for enhanced glassmorphism
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                    ${isScrolled
                        ? "bg-white/10 backdrop-blur-xl  shadow-lg"
                        : "bg-white/5 backdrop-blur-md  shadow-md"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-5">
                    <div className="flex items-center justify-between h-[70px]">

                        {/* Logo with gradient */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="group">
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent transition-all duration-300">
                                    {personalInfo.name}
                                </h1>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-5 py-3 font-medium text-gray-300 transition-all duration-300 hover:text-white hover:-translate-y-0.5 group"
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded transform scale-x-0 group-hover:scale-x-75 transition-all duration-300 mx-auto" />
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Connect Button with glassmorphism */}
                        <div className="hidden md:flex items-center">
                            <Link
                                href={'/about'}
                                className="relative overflow-hidden bg-purple-400/20 backdrop-blur-[10px] border border-purple-400/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(139,92,246,0.4)] hover:border-purple-400/50 group"
                            >
                                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 transition-all duration-300 group-hover:left-0 -z-10" />
                                <span className="relative z-10">About Me</span>
                            </Link>
                        </div>

                        {/* Mobile Hamburger Button with glassmorphism */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden relative w-12 h-12 rounded-lg bg-white/10 backdrop-blur-[10px] border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none group"
                            aria-label="Toggle menu"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                {isMenuOpen ? (
                                    <HiX className="w-6 h-6 text-gray-300/70 transition-all duration-300" />
                                ) : (
                                    <HiMenu className="w-6 h-6 text-gray-300/60 transition-all duration-300" />
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Navigation Menu with enhanced glassmorphism */}
            <nav className={`fixed top-[70px] left-0 right-0 z-40 
                ${isMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"} 
                flex justify-center border border-gray-500/10
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
                transition-all duration-300 md:hidden`}
            >
                <div className="flex flex-col items-center w-full max-w-md px-6 py-8 space-y-3">
                    {navItems.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="w-full text-center px-4 py-3 text-lg font-medium text-gray-100 rounded-xl hover:text-white  transition-all duration-200 group"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <span className="relative">
                                {link.label}
                                <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full -translate-x-1/2 transition-all duration-200" />
                            </span>
                        </Link>
                    ))}
                    <Link
                        href={'/about'}
                        onClick={closeMenu}
                        className="relative overflow-hidden bg-purple-400/20 backdrop-blur-[10px] border border-purple-400/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(139,92,246,0.4)] hover:border-purple-400/50 group"
                    >
                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 transition-all duration-300 group-hover:left-0 -z-10" />
                        <span className="relative z-10">About Me</span>
                    </Link>
                </div>
            </nav>

        </>
    )
}