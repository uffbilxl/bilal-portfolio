'use client'

import { useState, useEffect } from 'react'
import { profile } from '@/data/profile'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-black/90 backdrop-blur-md border-b border-cyber-border shadow-lg shadow-cyber-cyan/5'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-cyber-cyan font-bold text-xl tracking-widest hover:text-shadow-neon transition-all duration-300"
          style={{ textShadow: '0 0 10px rgba(0,245,255,0.5)' }}
        >
          BA
          <span className="text-cyber-muted text-sm ml-1 font-mono font-normal">
            .exe
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono text-xs uppercase tracking-wider transition-all duration-200 pb-1 border-b ${
                  active === link.href
                    ? 'text-cyber-cyan border-cyber-cyan'
                    : 'text-cyber-muted border-transparent hover:text-cyber-text hover:border-cyber-border'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-cyber-muted hover:text-cyber-cyan transition-colors duration-200 border border-cyber-border hover:border-cyber-cyan px-3 py-1.5 rounded-sm"
          >
            LinkedIn ↗
          </a>
          <a href={profile.cvPath} className="cyber-btn cyber-btn-solid text-xs px-4 py-2" download>
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-cyber-cyan border border-cyber-border p-2 rounded-sm hover:bg-cyber-card transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="font-mono text-xs">{menuOpen ? '[×]' : '[≡]'}</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-cyber-black/95 backdrop-blur-md border-b border-cyber-border">
          <ul className="px-4 py-4 flex flex-col gap-3" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm text-cyber-muted hover:text-cyber-cyan block py-2 border-b border-cyber-border/30"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-cyber-cyan mr-2">{'>'}</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn text-xs flex-1 justify-center"
              >
                LinkedIn
              </a>
              <a href={profile.cvPath} className="cyber-btn cyber-btn-solid text-xs flex-1 justify-center" download>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
