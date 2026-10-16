import { Braces, Layers3, PenTool, Sparkles } from 'lucide-react'
import { skills } from '../data/portfolioData'
import { Reveal, SectionHeading } from '../components/Shared'

const icons = { code: Braces, layers: Layers3, design: PenTool, spark: Sparkles }

export default function Skills() {
  return <section id="skills" className="section section-alt" tabIndex={-1} aria-labelledby="skills-title"><div className="container">
    <div className="section-header-row"><SectionHeading number="02" label="TECHNICAL EXPERTISE" title={<span id="skills-title">Skills & Technologies</span>} description="Technologies, development tools, and design competencies that I use and continue to develop." /><span className="section-side-note">A TOOLKIT THAT KEEPS GROWING <span>↗</span></span></div>
    <div className="skills-grid">{skills.map((category, index) => { const Icon = icons[category.icon]; return <Reveal key={category.title} delay={index * 0.06} className="skill-wrapper"><article className="skill-card"><div className="skill-card-top"><Icon size={25} strokeWidth={1.4} /><span>0{index + 1}</span></div><h3>{category.title}</h3><div className="skill-chips">{category.items.map(item => <span key={item}>{item}</span>)}</div><span className="skill-card-line" aria-hidden="true" /></article></Reveal> })}</div>
  </div></section>
}
