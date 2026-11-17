import { useState } from 'react'
import profilePhoto from '../assets/noble.jpeg'

const Navbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Base bar */}
      <div className="absolute inset-0 bg-[#1a1613]/90 backdrop-blur-xl border-b border-amber-200/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" />

      {/* Thin gold hairline at very top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

      <div className="relative container mx-auto px-6 py-4 flex justify-between items-center">

        {/* ── Brand / Profile ── */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-amber-400/40 group-hover:ring-amber-400 transition-all duration-500"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#1a1613]" />
          </div>
          <div className="leading-tight">
            <h1 className="font-serif text-lg tracking-tight text-amber-50">
              Josphat Mueke
            </h1>
            <p className="text-[10px] font-medium text-amber-300/70 tracking-[0.2em] uppercase">
              Economist · Statistician
            </p>
          </div>
        </div>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                className={`relative text-sm tracking-wide transition-colors duration-300 group ${
                  isActive ? 'text-amber-300' : 'text-stone-300 hover:text-amber-200'
                }`}
              >
                {link.name}
                {/* Hand-drawn-ish underline */}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-amber-400/80 transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
                {isActive && (
                  <span className="absolute -top-1 -right-2 w-1 h-1 rounded-full bg-amber-400" />
                )}
              </a>
            )
          })}
        </div>

        {/* ── CTA ── */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection('#contact') }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#1a1613] bg-gradient-to-b from-amber-300 to-amber-400 rounded-full hover:from-amber-200 hover:to-amber-300 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
        >
          Let's Talk
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* ── Mobile Toggle ── */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-amber-200/20 text-amber-100 hover:border-amber-300/50 hover:bg-amber-400/10 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h10M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden relative overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 bg-[#1a1613]/95 backdrop-blur-xl border-b border-amber-200/10 flex flex-col">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                className={`flex items-center justify-between px-2 py-3 text-sm border-b border-amber-200/5 last:border-0 transition-colors ${
                  isActive ? 'text-amber-300' : 'text-stone-300 hover:text-amber-200'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-amber-400/50">
                    0{i + 1}
                  </span>
                  {link.name}
                </span>
                <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;