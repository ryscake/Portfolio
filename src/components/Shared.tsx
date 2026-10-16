import type { ReactNode } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolioData'

function Linkedin({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7M7.5 7v.1M11 17v-7m0 3c0-4 6-4 6 0v4"/></svg>
}

function Github({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 20v-3c-4 1-4-2-6-2m12 5v-3c0-1-.3-1.5-1-2 3-.3 5-1.5 5-5a4 4 0 0 0-1-3c.3-1 .3-2 0-3-1.5 0-2.5.7-3 1a12 12 0 0 0-6 0c-.5-.3-1.5-1-3-1-.3 1-.3 2 0 3a4 4 0 0 0-1 3c0 3.5 2 4.7 5 5-.7.5-1 1-1 2"/></svg>
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={{ opacity: 0, y: reduced ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduced ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function SectionHeading({ number, label, title, description }: { number: string; label: string; title: ReactNode; description?: string }) {
  return <Reveal className="section-heading">
    <p className="eyebrow"><span>{number}</span><span className="eyebrow-line" />{label}</p>
    <h2>{title}<span className="red">.</span></h2>
    {description && <p className="section-description">{description}</p>}
  </Reveal>
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return <a href="#home" className="logo" aria-label="Krystal Villanueva, home" onClick={onClick}>KV<span>.</span></a>
}

export function ResumeButton({ available, compact = false }: { available: boolean; compact?: boolean }) {
  if (available) return <a className={`button button-outline ${compact ? 'button-small' : ''}`} href={portfolio.resume} download><Download size={15} />Download Resume</a>
  return <span className="resume-control">
    <button className={`button button-outline ${compact ? 'button-small' : ''}`} disabled aria-describedby={compact ? 'resume-nav-note' : 'resume-hero-note'}><Download size={15} />Download Resume</button>
    <span id={compact ? 'resume-nav-note' : 'resume-hero-note'} className={compact ? 'resume-tooltip' : 'resume-note'}>Résumé PDF coming soon</span>
  </span>
}

export function SocialLinks({ github = true }: { github?: boolean }) {
  return <div className="social-links">
    <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)"><Linkedin size={18} /></a>
    {github && (portfolio.github ? <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)"><Github size={18} /></a> : <span className="social-disabled" role="img" aria-label="GitHub profile not yet provided" title="GitHub profile coming soon"><Github size={18} /></span>)}
    <a href={`mailto:${portfolio.email}`} aria-label={`Email ${portfolio.email}`}><Mail size={18} /></a>
  </div>
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="text-link">{children}<ArrowUpRight size={16} /><span className="sr-only"> (opens in a new tab)</span></a>
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduced = useReducedMotion()
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return <motion.div className="scroll-progress" style={{ scaleX: reduced ? scrollYProgress : smooth }} aria-hidden="true" />
}

export function ScrollHint() {
  return <a className="scroll-hint" href="#about"><span className="scroll-hint-icon"><ArrowDown size={14} /></span><span>SCROLL TO EXPLORE</span></a>
}
