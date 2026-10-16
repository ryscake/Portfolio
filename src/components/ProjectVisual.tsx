import { ArrowUpRight, Crosshair, MapPin, ShoppingBag, Waves } from 'lucide-react'
import type { Project } from '../data/portfolioData'

export default function ProjectVisual({ project }: { project: Project }) {
  if (project.image) return <div className={`project-visual visual-${project.visual}`}><img src={project.image} alt={project.imageAlt || `${project.title} screenshot`} loading="lazy" width="900" height="600" /></div>
  return <div className={`project-visual visual-${project.visual}`} aria-label={`Abstract placeholder artwork for ${project.title}; project screenshot not yet supplied`} role="img">
    <div className="project-art-grid" aria-hidden="true" />
    <div className="visual-project-number" aria-hidden="true">/ {project.number}</div>
    {project.visual === 'rescue' && <div className="rescue-art" aria-hidden="true">
      <div className="radar-ring radar-one" /><div className="radar-ring radar-two" /><div className="radar-ring radar-three" />
      <div className="radar-axis axis-horizontal" /><div className="radar-axis axis-vertical" />
      <div className="rescue-mark"><Crosshair size={49} strokeWidth={1.15} /></div>
      <span className="radar-point point-one" /><span className="radar-point point-two" /><span className="radar-point point-three" />
      <span className="rescue-art-label"><MapPin size={12} />SANTA CRUZ, LAGUNA</span>
      <span className="rescue-wordmark">smart<span>rescue</span><sup>+</sup></span>
      <span className="art-caption">CONNECT. LOCATE. RESPOND.</span>
    </div>}
    {project.visual === 'commerce' && <div className="commerce-art" aria-hidden="true"><div className="commerce-circle" /><div className="shopping-bag bag-back"><ShoppingBag size={70} strokeWidth={0.9} /></div><div className="shopping-bag bag-front"><ShoppingBag size={82} strokeWidth={0.9} /><span>e.</span></div><span className="commerce-wordmark">A better way<br />to <em>shop.</em></span><ArrowUpRight className="commerce-arrow" size={60} strokeWidth={0.8} /></div>}
    {project.visual === 'resort' && <div className="resort-art" aria-hidden="true"><div className="resort-arch arch-back" /><div className="resort-arch arch-front"><span>n.</span><Waves size={50} strokeWidth={0.8} /></div><span className="resort-wordmark">NISSY<span>A MOMENT AWAY.</span></span><span className="resort-sun" /></div>}
    <span className="placeholder-label"><span />CONCEPT PLACEHOLDER · SCREENSHOT COMING SOON</span>
  </div>
}
