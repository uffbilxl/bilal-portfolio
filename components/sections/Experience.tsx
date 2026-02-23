import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { experience } from '@/data/profile'

export default function Experience() {
  return (
    <SectionWrapper id="experience" label="Work Experience and Volunteering">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="05 // Experience" title="Work & Volunteering" accent="green" />

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <article
              key={idx}
              className={`border ${exp.type === 'employment' ? 'border-cyber-green/30 hover:border-cyber-green/60' : 'border-cyber-purple/30 hover:border-cyber-purple/60'} bg-cyber-card/40 p-6 sm:p-8 card-cut card-scanline transition-colors duration-300`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 border uppercase tracking-wider ${
                        exp.type === 'employment'
                          ? 'border-cyber-green/30 text-cyber-green bg-cyber-green/5'
                          : 'border-cyber-purple/30 text-cyber-purple bg-cyber-purple/5'
                      }`}
                    >
                      {exp.type === 'employment' ? '⚡ Employment' : '✦ Volunteering'}
                    </span>
                    <span className={`font-mono text-xs ${exp.type === 'employment' ? 'text-cyber-green' : 'text-cyber-purple'}`}>
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-cyber-muted font-mono text-sm mt-0.5">{exp.company}</p>
                </div>
              </div>

              <ul className="space-y-2.5" role="list">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`font-mono text-xs flex-shrink-0 mt-0.5 ${exp.type === 'employment' ? 'text-cyber-green' : 'text-cyber-purple'}`}>
                      ▸
                    </span>
                    <span className="text-cyber-text text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
