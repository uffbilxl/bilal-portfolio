'use client'

import { useState, useEffect, useRef } from 'react'
import { terminalLines } from '@/data/profile'

export default function TerminalWidget() {
  const [lines, setLines] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [minimised, setMinimised] = useState(false)
  const [hidden, setHidden] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (charIndex < terminalLines[currentIndex].length) {
      intervalRef.current = setTimeout(() => {
        setCurrentText((p) => p + terminalLines[currentIndex][charIndex])
        setCharIndex((p) => p + 1)
      }, 35)
    } else {
      // Finished typing current line
      intervalRef.current = setTimeout(() => {
        setLines((prev) => [...prev.slice(-6), currentText])
        setCurrentText('')
        setCharIndex(0)
        setCurrentIndex((p) => (p + 1) % terminalLines.length)
      }, 1200)
    }
    return () => { if (intervalRef.current) clearTimeout(intervalRef.current) }
  }, [charIndex, currentIndex, currentText])

  if (hidden) return null

  return (
    <div
      className="fixed bottom-6 right-6 z-40 w-80 font-mono text-xs"
      style={{ filter: 'drop-shadow(0 0 12px rgba(0,245,255,0.3))' }}
      role="complementary"
      aria-label="Terminal widget"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between bg-cyber-dark border border-cyber-cyan px-3 py-2 border-b-0">
        <span className="text-cyber-cyan tracking-wider text-[10px] uppercase">
          ⬡ terminal — bilal@bcu:~$
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setMinimised(!minimised)}
            className="text-cyber-muted hover:text-cyber-cyan transition-colors text-[10px]"
            aria-label={minimised ? 'Expand terminal' : 'Minimise terminal'}
          >
            {minimised ? '[+]' : '[-]'}
          </button>
          <button
            onClick={() => setHidden(true)}
            className="text-cyber-muted hover:text-red-400 transition-colors text-[10px]"
            aria-label="Close terminal"
          >
            [×]
          </button>
        </div>
      </div>

      {!minimised && (
        <div className="bg-cyber-black/95 border border-cyber-cyan p-3 min-h-[120px] max-h-52 overflow-y-auto">
          {lines.map((line, i) => (
            <div key={i} className="text-cyber-muted text-[11px] leading-relaxed mb-0.5">
              {line}
            </div>
          ))}
          {currentText && (
            <div className="text-cyber-green text-[11px] leading-relaxed">
              {currentText}
              <span className="terminal-cursor" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
