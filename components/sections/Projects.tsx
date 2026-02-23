'use client'

import { useState } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/data/profile'

type Project = typeof projects[0]

const colorMap = {
  cyan: {
    border: 'border-cyber-cyan/40',
    text: 'text-cyber-cyan',
    bg: 'bg-cyber-cyan/5',
    badge: 'bg-cyber-cyan/10 border-cyber-cyan/30 text-cyber-cyan',
    hover: 'hover:border-cyber-cyan/70',
    shadow: '0 0 20px rgba(0,245,255,0.15)',
  },
  green: {
    border: 'border-cyber-green/40',
    text: 'text-cyber-green',
    bg: 'bg-cyber-green/5',
    badge: 'bg-cyber-green/10 border-cyber-green/30 text-cyber-green',
    hover: 'hover:border-cyber-green/70',
    shadow: '0 0 20px rgba(57,255,20,0.15)',
  },
  purple: {
    border: 'border-cyber-purple/40',
    text: 'text-cyber-purple',
    bg: 'bg-cyber-purple/5',
    badge: 'bg-cyber-purple/10 border-cyber-purple/30 text-cyber-purple',
    hover: 'hover:border-cyber-purple/70',
    shadow: '0 0 20px rgba(191,95,255,0.15)',
  },
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const c = colorMap[project.color as keyof typeof colorMap]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-cyber-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`relative max-w-2xl w-full border ${c.border} bg-cyber-dark card-cut-lg`}
        style={{ boxShadow: c.shadow }}
      >
        {/* Header */}
        <div className={`${c.bg} border-b ${c.border} p-6 flex items-start justify-between`}>
          <div>
            <p className={`font-mono text-xs tracking-widest ${c.text} mb-2`}>{project.category}</p>
            <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-cyber-muted hover:text-white transition-colors text-sm border border-cyber-border px-2 py-1 hover:border-cyber-cyan"
            aria-label="Close project details"
          >
            [×]
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Summary */}
          <p className="text-cyber-text leading-relaxed">{project.summary}</p>

          {/* Bullets */}
          <div>
            <p className={`font-mono text-xs tracking-widest ${c.text} mb-3`}>{'// '} key_contributions</p>
            <ul className="space-y-3" role="list">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`font-mono text-xs ${c.text} mt-0.5 flex-shrink-0`}>0{i + 1}.</span>
                  <span className="text-cyber-text text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <p className={`font-mono text-xs tracking-widest ${c.text} mb-3`}>{'// '} tech_stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className={`skill-pill ${c.badge} border`}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <SectionWrapper id="projects" label="IT Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="03 // Projects" title="Built & Deployed" accent="cyan" />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const c = colorMap[project.color as keyof typeof colorMap]
            return (
              <article
                key={project.id}
                className={`group relative border ${c.border} ${c.hover} bg-cyber-card/40 p-6 sm:p-8 card-cut card-scanline transition-all duration-300 cursor-pointer`}
                style={{ transitionDelay: `${idx * 50}ms` }}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title}`}
              >
                {/* Number */}
                <div className={`font-display text-5xl font-black ${c.text} opacity-10 absolute top-4 right-6 select-none`} aria-hidden="true">
                  0{project.id}
                </div>

                {/* Category badge */}
                <div className={`inline-block skill-pill ${c.badge} border mb-4`}>
                  {project.category}
                </div>

                {/* Title */}
                <h3 className={`font-display text-xl font-bold text-white mb-3 group-hover:${c.text.replace('text-', 'text-')} transition-colors`}>
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-cyber-muted text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.summary}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className={`skill-pill ${c.badge} border text-[10px]`}>{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="skill-pill border-cyber-border text-cyber-border text-[10px]">+{project.tech.length - 3}</span>
                  )}
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-2 font-mono text-xs ${c.text} group-hover:opacity-100 opacity-60 transition-opacity`}>
                  <span>View Details</span>
                  <span>→</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </SectionWrapper>
  )
}
