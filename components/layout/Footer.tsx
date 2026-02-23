import { profile } from '@/data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-cyber-border bg-cyber-black/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-display text-cyber-cyan text-lg font-bold tracking-widest"
              style={{ textShadow: '0 0 8px rgba(0,245,255,0.4)' }}>
              BILAL ARSHAD
            </p>
            <p className="font-mono text-cyber-muted text-xs mt-1">
              {'// '} Cyber Security Student · Birmingham, UK
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6" role="list">
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-cyber-muted hover:text-cyber-cyan transition-colors uppercase tracking-wider"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={profile.cvPath}
                  className="font-mono text-xs text-cyber-muted hover:text-cyber-cyan transition-colors uppercase tracking-wider"
                  download
                >
                  CV ↓
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-mono text-xs text-cyber-muted hover:text-cyber-cyan transition-colors uppercase tracking-wider"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="font-mono text-cyber-muted text-xs">
            <span className="text-cyber-cyan">©{year}</span> Bilal Arshad
            <span className="text-cyber-border mx-2">|</span>
            <span className="text-cyber-border">All rights reserved</span>
          </p>
        </div>

        {/* Bottom cyber bar */}
        <div className="mt-8 pt-6 border-t border-cyber-border/30 flex justify-center">
          <p className="font-mono text-cyber-border text-xs tracking-widest">
            [ SYSTEM SECURE · NETWORK ONLINE · STATUS: AVAILABLE FOR OPPORTUNITIES ]
          </p>
        </div>
      </div>
    </footer>
  )
}
