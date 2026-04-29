'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800)
    const hideTimer = setTimeout(() => setHidden(true), 2400)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050a0e] transition-opacity duration-[600ms] ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={fadeOut}
    >
      <div className="scan-overlay" />
      <div className="absolute inset-0 cyber-grid-bg" />

      {/* Corner labels */}
      <div className="absolute top-8 left-8 font-mono text-[#1a3a4a] text-xs opacity-60 select-none">
        <div>SYS::INIT</div>
        <div>LOAD::0xBA</div>
      </div>
      <div className="absolute top-8 right-8 font-mono text-[#1a3a4a] text-xs opacity-60 text-right select-none">
        <div>v2.0.4</div>
        <div>SECURE</div>
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-[#1a3a4a] text-xs opacity-40 select-none">
        01000010 01000001
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-[#1a3a4a] text-xs opacity-40 text-right select-none">
        BILALARSHAD.DEV
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="relative">
          <Image
            src="/android-chrome-192x192.png"
            alt="Bilal Arshad logo"
            width={96}
            height={96}
            priority
            style={{ filter: 'drop-shadow(0 0 12px rgba(0,245,255,0.8)) drop-shadow(0 0 30px rgba(0,245,255,0.4))' }}
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-[#00f5ff] opacity-60" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-[#00f5ff] opacity-60" />
        </div>

        {/* Name */}
        <div className="text-center">
          <h1
            className="font-display font-black text-3xl sm:text-4xl tracking-[0.3em] uppercase"
            style={{ color: '#00f5ff', textShadow: '0 0 20px rgba(0,245,255,0.6), 0 0 60px rgba(0,245,255,0.2)' }}
          >
            BILAL ARSHAD
          </h1>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="h-px w-8 bg-[#00f5ff] opacity-30" />
            <p className="font-mono text-[#6b8a9a] text-[11px] tracking-widest uppercase">
              Cyber Security · Developer
            </p>
            <div className="h-px w-8 bg-[#00f5ff] opacity-30" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64">
          <div className="relative h-px bg-[#1a3a4a] w-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-px bg-[#00f5ff]"
              style={{
                width: '100%',
                animation: 'loadingFill 1.6s ease-out forwards',
                boxShadow: '0 0 8px rgba(0,245,255,0.9)',
              }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-mono text-[10px] text-[#6b8a9a] tracking-widest">INITIALIZING</span>
            <span className="font-mono text-[10px] text-[#00f5ff] terminal-cursor" />
          </div>
        </div>
      </div>
    </div>
  )
}
