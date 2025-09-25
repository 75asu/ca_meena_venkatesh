"use client"

import { personalInfo } from "./constants/constatnts"

export default function Home() {
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-0 text-white text-center max-w-4xl">
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
            <a
              href={'/contact'}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-white border-none px-8 py-4 rounded-full text-lg font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(139,92,246,0.4)] flex items-center gap-2"
            >
              Connect With Me
            </a>
            <a
              href={personalInfo.calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-[10px] text-white border border-white/30 px-7 py-4 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 hover:border-white/50 hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)] flex items-center gap-2"
            >
              Book a call
            </a>
          </div>

          {/* Substack iframe */}
          <div className="w-full max-w-md mx-auto mt-8 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
            <iframe src="https://sujitgouda.substack.com/embed" width="480" height="150" style={{ border: "1px solid #EEE", background: "white" }} frameBorder="0" scrolling="no"></iframe>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4 w-full">
            Stay updated with my latest posts
          </p>
        </div>
      </div>
    </section>
  )
}
