import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Research() {
  return (
    <SectionWrapper id="research" label="Conference Paper and Research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="03 // Research" title="Published Research" accent="purple" />

        <div className="max-w-4xl">
          {/* Main paper card */}
          <div className="border border-cyber-purple/40 bg-cyber-card/40 p-6 sm:p-10 card-cut-lg card-scanline relative overflow-hidden mb-8"
            style={{ boxShadow: '0 0 30px rgba(191,95,255,0.1)' }}>

            {/* Background watermark */}
            <div className="absolute top-4 right-6 font-display text-8xl font-black text-cyber-purple/5 select-none pointer-events-none" aria-hidden="true">
              PAPER
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-cyber-purple/30 bg-cyber-purple/5 px-3 py-1.5 mb-6 font-mono text-xs text-cyber-purple tracking-wider"
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
              <span className="w-1.5 h-1.5 bg-cyber-purple rounded-full" />
              ACADEMIC CONFERENCE PAPER · 2026
            </div>

            {/* Title */}
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug mb-4">
              Prompt Injection Attacks Against Large Language Models: A Comprehensive Threat Model and Mitigation Framework
            </h3>

            {/* Author + institution */}
            <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-sm">
              <span className="text-cyber-purple">Bilal Arshad</span>
              <span className="text-cyber-border">·</span>
              <span className="text-cyber-muted">Birmingham City University</span>
              <span className="text-cyber-border">·</span>
              <span className="text-cyber-muted">School of Computing and Digital Technology</span>
            </div>

            <div className="h-px bg-cyber-purple/20 mb-6" />

            {/* Abstract */}
            <div className="mb-8">
              <p className="font-mono text-cyber-purple text-xs tracking-widest mb-3">{'// '} abstract</p>
              <p className="text-cyber-text text-sm leading-relaxed">
                As Large Language Models (LLMs) transition from standalone chatbots to integrated enterprise agents,
                they introduce a novel attack surface: prompt injection. This paper investigates the mechanics of both
                direct and indirect prompt injection attacks within the context of enterprise LLM deployments,
                establishing a comprehensive threat model using the STRIDE methodology. A multi-layered mitigation
                framework — the <strong className="text-white">Sentinel Framework</strong> — is proposed,
                incorporating context isolation, dual-LLM verification, and least-privilege architecture to harden
                LLM-integrated applications against manipulation.
              </p>
            </div>

            {/* Key findings */}
            <div className="mb-8">
              <p className="font-mono text-cyber-purple text-xs tracking-widest mb-4">{'// '} key_findings</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { stat: '71.2%', label: 'RAG Attack Success Rate', sub: 'Indirect injection via retrieval pipelines' },
                  { stat: '0%', label: 'API Misuse with HITL', sub: 'Human-in-the-loop eliminated tool misuse' },
                  { stat: '200', label: 'Adversarial Payloads', sub: 'Tested across GPT-4o, Claude 3.5 & Llama' },
                ].map((f) => (
                  <div key={f.label}
                    className="border border-cyber-purple/20 bg-cyber-purple/5 p-4"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                    <p className="font-display text-2xl font-bold text-cyber-purple mb-1"
                      style={{ textShadow: '0 0 8px rgba(191,95,255,0.4)' }}>
                      {f.stat}
                    </p>
                    <p className="text-white text-xs font-medium mb-1">{f.label}</p>
                    <p className="text-cyber-muted text-xs">{f.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div className="mb-8">
              <p className="font-mono text-cyber-purple text-xs tracking-widest mb-3">{'// '} index_terms</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Prompt Injection', 'Large Language Models', 'RAG Security',
                  'STRIDE Threat Model', 'Adversarial ML', 'LLM Security',
                  'Sentinel Framework', 'Enterprise AI Security',
                ].map((tag) => (
                  <span key={tag}
                    className="font-mono text-xs px-3 py-1 border border-cyber-purple/30 text-cyber-purple bg-cyber-purple/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="/Prompt_Injection_Attacks_Against_Large_Language_Models___Bilal_Arshad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn inline-flex"
              style={{
                borderColor: '#bf5fff',
                color: '#bf5fff',
              }}
              download
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Paper (PDF)
            </a>
          </div>

          {/* Sentinel Framework highlight */}
          <div className="border border-cyber-cyan/30 bg-cyber-cyan/5 p-6 card-cut">
            <p className="font-mono text-cyber-cyan text-xs tracking-widest mb-3">{'// '} original_contribution</p>
            <h4 className="font-display text-lg font-bold text-white mb-2">The Sentinel Framework</h4>
            <p className="text-cyber-text text-sm leading-relaxed">
              This paper proposes an original multi-layer mitigation architecture combining{' '}
              <span className="text-cyber-cyan">context isolation via UUID tag shuffling</span>,{' '}
              <span className="text-cyber-cyan">BERT-based input classification</span>,{' '}
              <span className="text-cyber-cyan">semantic output filtering</span>,{' '}
              <span className="text-cyber-cyan">least-privilege tool access</span>, and{' '}
              <span className="text-cyber-cyan">human-in-the-loop controls</span> — reducing API misuse injection success to 0% in simulation.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
