import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Research from '@/components/sections/Research'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import TerminalWidget from '@/components/ui/TerminalWidget'
import ParticleBackground from '@/components/ui/ParticleBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Education />
      <Experience />
      <Achievements />
      <Contact />

      <TerminalWidget />
      <Footer />
    </main>
  )
}
