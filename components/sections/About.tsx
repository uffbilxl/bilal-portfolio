import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { profile, stats } from '@/data/profile'

export default function About() {
  return (
    <SectionWrapper id="about" label="About Bilal Arshad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="01 // About" title="Who I Am" accent="cyan" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <div
              className="border border-cyber-border bg-cyber-card/40 p-6 sm:p-8 card-cut card-scanline mb-6"
            >
              <p className="font-mono text-cyber-cyan text-xs mb-4 tracking-widest">
                {'// '} profile.bio
              </p>
              <p className="text-cyber-text leading-relaxed text-base">
                {profile.longBio}
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-sm">
              <span className="text-cyber-cyan">📍</span>
              <span className="text-cyber-muted">{profile.location}</span>
              <span className="text-cyber-border">·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-cyan hover:underline"
              >
                linkedin.com/in/bilal-arshad ↗
              </a>
            </div>
          </div>

          {/* Stats + Focus */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border border-cyber-border bg-cyber-card/40 p-5 card-cut hover:border-cyber-cyan/50 transition-colors duration-300 card-scanline"
                >
                  <p className="font-display text-xl font-bold text-cyber-cyan mb-1"
                    style={{ textShadow: '0 0 8px rgba(0,245,255,0.3)' }}>
                    {s.value}
                  </p>
                  <p className="font-mono text-white text-sm font-medium">{s.label}</p>
                  <p className="font-mono text-cyber-muted text-xs mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Focus areas */}
            <div className="border border-cyber-border bg-cyber-card/40 p-6 card-cut">
              <p className="font-mono text-cyber-cyan text-xs tracking-widest mb-4">{'// '} focus_areas</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Cyber Security', 'Penetration Testing', 'Network Engineering',
                  'Python Development', 'Linux Administration', 'Forensics',
                  'Cryptography', 'Cloud Security',
                ].map((area) => (
                  <span
                    key={area}
                    className="skill-pill border-cyber-cyan/30 text-cyber-cyan bg-cyber-cyan/5 hover:bg-cyber-cyan/10 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Status bar */}
            <div className="border border-cyber-green/30 bg-cyber-green/5 p-4 flex items-center gap-3 font-mono text-sm">
              <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse flex-shrink-0" />
              <span className="text-cyber-green">OPEN TO:</span>
              <span className="text-cyber-muted">Placements · Internships · Part-Time Roles</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
