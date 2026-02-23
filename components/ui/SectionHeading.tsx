interface SectionHeadingProps {
  label: string
  title: string
  accent?: 'cyan' | 'green' | 'purple'
}

const accentClasses = {
  cyan: 'text-cyber-cyan',
  green: 'text-cyber-green',
  purple: 'text-cyber-purple',
}

const accentBorderClasses = {
  cyan: 'bg-cyber-cyan',
  green: 'bg-cyber-green',
  purple: 'bg-cyber-purple',
}

export default function SectionHeading({ label, title, accent = 'cyan' }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p className={`font-mono text-xs tracking-widest uppercase mb-3 ${accentClasses[accent]}`}>
        {'// '}{label}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-wide">
        {title}
      </h2>
      <div className={`mt-4 h-px w-20 ${accentBorderClasses[accent]}`}
        style={{ boxShadow: accent === 'cyan' ? '0 0 8px rgba(0,245,255,0.6)' : accent === 'green' ? '0 0 8px rgba(57,255,20,0.6)' : '0 0 8px rgba(191,95,255,0.6)' }}
      />
    </div>
  )
}
