import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { skills } from '@/data/profile'

const colorMap = {
  cyan: {
    border: 'border-cyber-cyan/30',
    text: 'text-cyber-cyan',
    bg: 'bg-cyber-cyan/5',
    dot: 'bg-cyber-cyan',
    hover: 'hover:border-cyber-cyan/60',
    icon: 'text-cyber-cyan',
  },
  green: {
    border: 'border-cyber-green/30',
    text: 'text-cyber-green',
    bg: 'bg-cyber-green/5',
    dot: 'bg-cyber-green',
    hover: 'hover:border-cyber-green/60',
    icon: 'text-cyber-green',
  },
  purple: {
    border: 'border-cyber-purple/30',
    text: 'text-cyber-purple',
    bg: 'bg-cyber-purple/5',
    dot: 'bg-cyber-purple',
    hover: 'hover:border-cyber-purple/60',
    icon: 'text-cyber-purple',
  },
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" label="Technical Skills" className="bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="02 // Skills" title="Technical Arsenal" accent="green" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => {
            const c = colorMap[skillGroup.color as keyof typeof colorMap]
            return (
              <div
                key={skillGroup.category}
                className={`border ${c.border} ${c.bg} ${c.hover} bg-cyber-card/30 p-6 card-cut card-scanline transition-all duration-300 group`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`font-mono text-2xl ${c.icon}`} aria-hidden="true">
                    {skillGroup.icon}
                  </span>
                  <div>
                    <h3 className={`font-display text-sm font-bold ${c.text} tracking-wider uppercase`}>
                      {skillGroup.category}
                    </h3>
                    <p className="font-mono text-cyber-border text-xs">
                      {skillGroup.items.length} skills
                    </p>
                  </div>
                </div>

                {/* Items */}
                <ul className="space-y-2.5" role="list">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} aria-hidden="true" />
                      <span className="font-mono text-cyber-text text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
