'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/data/profile'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center cyber-grid-bg"
      aria-label="Hero section"
    >
      {/* Corner decorations */}
      <div className="absolute top-24 left-4 md:left-8 font-mono text-cyber-border text-xs opacity-40 select-none" aria-hidden="true">
        <div>01000010 01000001</div>
        <div>10000011 11000001</div>
        <div>01010001 00010110</div>
      </div>
      <div className="absolute top-24 right-4 md:right-8 font-mono text-cyber-border text-xs opacity-40 text-right select-none" aria-hidden="true">
        <div>SYS::INIT</div>
        <div>NET::ONLINE</div>
        <div>SEC::ACTIVE</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 border border-cyber-cyan/30 bg-cyber-cyan/5 px-4 py-2 mb-8 font-mono text-xs text-cyber-cyan tracking-wider transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
          >
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
            AVAILABLE FOR PLACEMENTS &amp; OPPORTUNITIES
          </div>

          {/* Name */}
          <h1
            className={`font-display font-black text-5xl sm:text-7xl lg:text-8xl mb-2 tracking-tight transition-all duration-700 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span style={{ color: '#00f5ff', textShadow: '0 0 20px rgba(0,245,255,0.5), 0 0 60px rgba(0,245,255,0.2)' }}>BILAL</span>
          </h1>
          <h1
            className={`font-display font-black text-5xl sm:text-7xl lg:text-8xl mb-6 tracking-tight transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ color: '#00f5ff', textShadow: '0 0 20px rgba(0,245,255,0.5), 0 0 60px rgba(0,245,255,0.2)' }}
          >
            ARSHAD
          </h1>

          {/* Tagline */}
          <div
            className={`font-mono text-cyber-muted text-sm sm:text-base mb-4 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-cyber-cyan mr-2">{'>'}</span>
            {profile.tagline}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-16 bg-cyber-cyan opacity-40" />
            <span className="font-mono text-xs text-cyber-border">BCU · BIRMINGHAM, UK · 2024–PRESENT</span>
            <div className="h-px flex-1 bg-cyber-border opacity-40" />
          </div>

          {/* Short bio */}
          <p
            className={`text-cyber-text text-base sm:text-lg leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            BSc (Hons) Cyber Security student at Birmingham City University — predicted{' '}
            <strong className="text-white">First Class Honours</strong>. Building secure systems,
            breaking things ethically, and bridging the gap between technology and the real world.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <a href="#projects" className="cyber-btn cyber-btn-solid">
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="cyber-btn">
              LinkedIn ↗
            </a>
            <a href={profile.cvPath} className="cyber-btn" download>
              Download CV ↓
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { val: '1st', label: 'Predicted Class' },
              { val: 'D*D*D*', label: 'Level 3 Diploma' },
              { val: '2+', label: 'Years Leadership' },
              { val: '4+', label: 'Tech Projects' },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-cyber-border bg-cyber-card/40 p-4"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
              >
                <p className="font-display text-2xl font-bold text-cyber-cyan" style={{ textShadow: '0 0 8px rgba(0,245,255,0.4)' }}>
                  {s.val}
                </p>
                <p className="font-mono text-cyber-muted text-xs mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
