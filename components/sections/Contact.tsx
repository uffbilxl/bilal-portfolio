import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

export default function Contact() {
  return (
    <SectionWrapper id="contact" label="Contact Bilal Arshad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="08 // Contact" title="Get In Touch" accent="cyan" />

        <div className="max-w-2xl">
          <p className="text-cyber-text text-base leading-relaxed mb-10">
            Actively seeking placements, internships, and part-time roles in cyber security,
            penetration testing, or software development. Feel free to reach out directly — I
            always respond promptly.
          </p>

          <div className="space-y-4 mb-10">
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-5 border border-cyber-cyan/30 bg-cyber-card/40 p-5 card-cut group hover:border-cyber-cyan/70 hover:bg-cyber-card/60 transition-all duration-300"
            >
              <div className="w-12 h-12 border border-cyber-cyan/30 bg-cyber-cyan/5 flex items-center justify-center font-mono text-cyber-cyan text-xl flex-shrink-0 group-hover:bg-cyber-cyan/10 transition-colors">
                @
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-cyber-muted text-xs uppercase tracking-wider mb-1">Email</p>
                <p className="text-cyber-cyan font-mono text-sm truncate">{profile.email}</p>
              </div>
              <span className="font-mono text-cyber-muted text-sm group-hover:text-cyber-cyan transition-colors">↗</span>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 border border-cyber-cyan/30 bg-cyber-card/40 p-5 card-cut group hover:border-cyber-cyan/70 hover:bg-cyber-card/60 transition-all duration-300"
            >
              <div className="w-12 h-12 border border-cyber-cyan/30 bg-cyber-cyan/5 flex items-center justify-center font-mono text-cyber-cyan text-xl flex-shrink-0 group-hover:bg-cyber-cyan/10 transition-colors">
                in
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-cyber-muted text-xs uppercase tracking-wider mb-1">LinkedIn</p>
                <p className="text-cyber-cyan font-mono text-sm truncate">linkedin.com/in/bilal-arshad-4a07812b4</p>
              </div>
              <span className="font-mono text-cyber-muted text-sm group-hover:text-cyber-cyan transition-colors">↗</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-5 border border-cyber-border bg-cyber-card/30 p-5 card-cut">
              <div className="w-12 h-12 border border-cyber-border bg-cyber-card/50 flex items-center justify-center font-mono text-cyber-muted text-xl flex-shrink-0">
                ◈
              </div>
              <div>
                <p className="font-mono text-cyber-muted text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-cyber-text font-mono text-sm">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="cyber-btn cyber-btn-solid">
              Send Email →
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn"
            >
              Connect on LinkedIn ↗
            </a>
          </div>

          {/* Status */}
          <div className="mt-8 flex items-center gap-3 font-mono text-sm">
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
            <span className="text-cyber-green">OPEN TO:</span>
            <span className="text-cyber-muted">Placements · Internships · Part-Time Roles</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
