import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Check, X } from 'lucide-react'
import type { Project } from '../data/portfolioData'
import ProjectVisual from './ProjectVisual'
import { ExternalLink } from './Shared'

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    const dialog = dialogRef.current
    if (!project || !dialog) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    dialog.scrollTop = 0
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [project])

  return <dialog ref={dialogRef} className="project-modal" aria-labelledby="project-modal-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose() } }}>
    {project && <motion.div initial={{ opacity: 0, y: reduced ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.25 }}>
      <button className="modal-close" onClick={onClose} aria-label="Close project details" autoFocus><X size={21} /></button>
      <ProjectVisual project={project} />
      <div className="modal-content"><p className="eyebrow">PROJECT {project.number} / {project.featured ? 'CAPSTONE' : 'ACADEMIC WORK'}</p><h2 id="project-modal-title">{project.title}</h2><p className="project-category">{project.category}</p>
        <h3>Overview</h3><p>{project.overview}</p><h3>Problem addressed</h3><p>{project.problem}</p><h3>Key features</h3><ul className="modal-features">{project.features.map(feature => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
        {project.technologies?.length ? <><h3>Technologies</h3><div className="feature-tags">{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div></> : null}
        {(project.githubUrl || project.demoUrl) && <div className="modal-links">{project.githubUrl && <ExternalLink href={project.githubUrl}>GitHub repository</ExternalLink>}{project.demoUrl && <ExternalLink href={project.demoUrl}>Live demo</ExternalLink>}</div>}
        {!project.image && <p className="modal-note">The artwork above is a concept placeholder. Actual project screenshots will be added when available.</p>}
      </div>
    </motion.div>}
  </dialog>
}
