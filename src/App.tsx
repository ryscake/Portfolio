import { useState } from 'react'
import type { Project } from './data/portfolioData'
import { useActiveSection, useResumeAvailable } from './hooks/usePortfolio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import { ScrollProgress } from './components/Shared'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'

export default function App() {
  const active = useActiveSection()
  const resumeAvailable = useResumeAvailable()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <ScrollProgress /><Navbar active={active} resumeAvailable={resumeAvailable} />
    <main id="main" tabIndex={-1}><Hero resumeAvailable={resumeAvailable} /><About /><Skills /><Projects onOpen={setSelectedProject} /><Education /><Certifications /><Contact /></main>
    <Footer /><ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </>
}
