import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { education } from '@/data/profile'

export default function Education() {
  return (
    <SectionWrapper id="education" label="Education Timeline" className="bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="05 // Education" title="Academic Journey" accent="purple" />

        <div className="max-w-3xl">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-10 pb-12 last:pb-0">
              {/* Timeline line */}
              {idx < education.length - 1 && (
                <div
                  className="timeline-line"
                  aria-hidden="true"
                />
              )}

              {/* Dot */}
              <div
                className={`absolute left-0 top-1 w-9 h-9 border-2 flex items-center justify-center font-mono text-xs font-bold ${
                  edu.current
                    ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10'
                    : 'border-cyber-purple text-cyber-purple bg-cyber-purple/10'
                }`}
                style={{
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
                aria-hidden="true"
              >
                {edu.current ? '◉' : '◎'}
              </div>

              {/* Content */}
              <div
                className={`border ${edu.current ? 'border-cyber-cyan/40' : 'border-cyber-purple/30'} bg-cyber-card/40 p-6 card-cut card-scanline`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <p className={`font-mono text-xs tracking-wider mb-1 ${edu.current ? 'text-cyber-cyan' : 'text-cyber-purple'}`}>
                      {edu.period}
                      {edu.current && (
                        <span className="ml-2 inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-cyber-green rounded-full animate-pulse" />
                          <span className="text-cyber-green">CURRENT</span>
                        </span>
                      )}
                    </p>
                    {edu.institution && <h3 className="font-display text-xl font-bold text-white">{edu.institution}</h3>}
                  </div>
                  <span
                    className={`font-mono text-xs px-3 py-1 border ${
                      edu.current
                        ? 'border-cyber-cyan/30 text-cyber-cyan bg-cyber-cyan/5'
                        : 'border-cyber-purple/30 text-cyber-purple bg-cyber-purple/5'
                    }`}
                  >
                    {edu.grade}
                  </span>
                </div>

                <p className="text-cyber-text font-medium mb-1">{edu.qualification}</p>
                {edu.note && (
                  <p className="font-mono text-cyber-muted text-xs mb-4">↳ {edu.note}</p>
                )}

                {edu.modules.length > 0 && (
                  <div className="mt-4">
                    <p className="font-mono text-cyber-muted text-xs mb-2 tracking-wider">MODULES</p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.modules.map((m) => (
                        <span
                          key={m}
                          className="font-mono text-[10px] px-2 py-0.5 border border-cyber-border text-cyber-muted bg-cyber-black/40"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
