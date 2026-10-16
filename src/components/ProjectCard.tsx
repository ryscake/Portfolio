import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/portfolioData'
import { ExternalLink, Reveal } from './Shared'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return <Reveal className={project.featured ? 'featured-project-wrapper' : ''}><article className={`project-card ${project.featured ? 'project-featured' : ''}`}>
    <button className="project-preview-button" aria-label={`View ${project.title} project details`} onClick={() => onOpen(project)}><ProjectVisual project={project} /><span className="preview-open" aria-hidden="true"><ArrowUpRight size={22} /></span></button>
    <div className="project-card-copy">
      <div className="project-topline"><p className="eyebrow">{project.featured ? <><span className="red-dot" />FEATURED CAPSTONE PROJECT</> : <><span className="project-number">{project.number}</span>ACADEMIC PROJECT</>}</p></div>
      <h3>{project.title}</h3><p className="project-category">{project.category}</p>
      <p className="project-description">{project.featured ? project.overview : project.shortDescription}</p>
      {project.featured && <div className="feature-tags"><span>Location-based reporting</span><span>Incident prioritization</span><span>Response coordination</span></div>}
      {project.technologies?.length ? <div className="feature-tags">{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div> : null}
      <div className="project-card-actions"><button className="project-details-link" onClick={() => onOpen(project)}>View Project Details<ArrowRight size={17} /></button>{project.githubUrl && <ExternalLink href={project.githubUrl}>GitHub</ExternalLink>}{project.demoUrl && <ExternalLink href={project.demoUrl}>Live Demo</ExternalLink>}</div>
    </div>
  </article></Reveal>
}
