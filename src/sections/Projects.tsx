import type { Project } from '../data/portfolioData'
import { projects } from '../data/portfolioData'
import ProjectCard from '../components/ProjectCard'
import { SectionHeading } from '../components/Shared'

export default function Projects({ onOpen }: { onOpen: (project: Project) => void }) {
  return <section id="projects" className="section projects-section" tabIndex={-1} aria-labelledby="projects-title"><div className="container">
    <div className="section-header-row"><SectionHeading number="03" label="SELECTED WORK" title={<span id="projects-title">Featured Projects</span>} description="A selection of academic and development projects demonstrating my technical interests, creativity, and problem-solving skills." /><span className="work-counter"><strong>03</strong>PROJECTS / IDEAS INTO ACTION</span></div>
    <div className="projects-grid">{projects.map(project => <ProjectCard key={project.id} project={project} onOpen={onOpen} />)}</div>
  </div></section>
}
