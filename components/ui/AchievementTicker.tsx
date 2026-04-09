'use client'

const items = [
  { icon: '🏆', text: '1st Place — Unihack × Centauri Media Hackathon 2025' },
  { icon: '◈', text: 'BSc Cyber Security — Predicted First Class Honours' },
  { icon: '🏆', text: 'Best Innovator Project — HS2, 2022' },
  { icon: '◈', text: 'D*D*D* — Level 3 Extended Diploma in IT' },
  { icon: '◈', text: 'Visiting Demonstrator — Birmingham City University' },
  { icon: '◈', text: '9 GCSEs at Grade 6 and Above' },
  { icon: '🏏', text: '2nd Best County Figures — Warwickshire Cricket League, 2023' },
]

// Duplicate for seamless loop
const ticker = [...items, ...items]

export default function AchievementTicker() {
  return (
    <div
      className="relative w-full overflow-hidden border-y border-cyber-cyan/20 bg-cyber-dark/60 py-3"
      aria-label="Achievement highlights"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-cyber-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-cyber-black to-transparent" />

      <div className="flex animate-ticker whitespace-nowrap">
        {ticker.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-8 font-mono text-xs text-cyber-muted shrink-0"
          >
            <span className="text-cyber-cyan text-[10px] opacity-60">◆</span>
            <span className="text-[11px] tracking-wide">{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
