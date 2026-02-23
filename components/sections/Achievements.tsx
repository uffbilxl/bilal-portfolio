import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { achievements } from '@/data/profile'

const typeColors = {
  award: 'border-cyber-cyan/40 text-cyber-cyan bg-cyber-cyan/5 hover:bg-cyber-cyan/10',
  interest: 'border-cyber-green/40 text-cyber-green bg-cyber-green/5 hover:bg-cyber-green/10',
  credential: 'border-cyber-purple/40 text-cyber-purple bg-cyber-purple/5 hover:bg-cyber-purple/10',
  skill: 'border-cyber-border text-cyber-text bg-cyber-card/40 hover:bg-cyber-card/60',
  goal: 'border-cyber-cyan/20 text-cyber-muted bg-transparent hover:bg-cyber-card/30',
}

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" label="Achievements and Interests" className="bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="06 // Achievements" title="Awards & Interests" accent="cyan" />

        <div className="max-w-4xl">
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-8 font-mono text-xs text-cyber-muted">
            {[
              { type: 'award', label: 'Award' },
              { type: 'interest', label: 'Interest' },
              { type: 'credential', label: 'Credential' },
              { type: 'skill', label: 'Tool / Skill' },
            ].map(({ type, label }) => (
              <span key={type} className={`skill-pill border ${typeColors[type as keyof typeof typeColors]}`}>
                {label}
              </span>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {achievements.map((a, idx) => (
              <span
                key={idx}
                className={`skill-pill border transition-all duration-200 cursor-default py-2 px-4 text-sm ${typeColors[a.type as keyof typeof typeColors]}`}
              >
                {a.label}
              </span>
            ))}
          </div>

          {/* Decorative stats */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { num: '2', label: 'Industry Awards', color: 'cyan' },
              { num: '9+', label: 'GCSEs (Grade 6+)', color: 'green' },
              { num: '2+', label: 'Creative Tools Mastered', color: 'purple' },
            ].map((s) => (
              <div
                key={s.label}
                className={`border ${
                  s.color === 'cyan'
                    ? 'border-cyber-cyan/30 text-cyber-cyan'
                    : s.color === 'green'
                    ? 'border-cyber-green/30 text-cyber-green'
                    : 'border-cyber-purple/30 text-cyber-purple'
                } bg-cyber-card/30 p-5 text-center card-cut`}
              >
                <p className="font-display text-3xl font-black"
                  style={{
                    textShadow: s.color === 'cyan'
                      ? '0 0 10px rgba(0,245,255,0.4)'
                      : s.color === 'green'
                      ? '0 0 10px rgba(57,255,20,0.4)'
                      : '0 0 10px rgba(191,95,255,0.4)',
                  }}
                >
                  {s.num}
                </p>
                <p className="font-mono text-cyber-muted text-xs mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
