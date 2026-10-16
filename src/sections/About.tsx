import { Code2, Compass, GraduationCap, MapPin, PenTool, CalendarDays } from 'lucide-react'
import { highlights, portfolio } from '../data/portfolioData'
import { Reveal, SectionHeading } from '../components/Shared'

const icons = { code: Code2, design: PenTool, learn: Compass }

export default function About() {
  return <section id="about" className="section" tabIndex={-1} aria-labelledby="about-title"><div className="container">
    <SectionHeading number="01" label="ABOUT ME" title={<span id="about-title">A Little About Me</span>} />
    <div className="about-grid">
      <Reveal className="about-copy"><p className="about-lead">Curiosity drives me.<br /><span className="muted">Purpose keeps me building.</span></p>{portfolio.biography.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</Reveal>
      <div className="highlight-list">{highlights.map(({ title, description, icon }, index) => { const Icon = icons[icon]; return <Reveal key={title} delay={index * 0.08}><article className="highlight-card"><span className="highlight-icon"><Icon size={22} strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{description}</p></div><span className="highlight-index">0{index + 1}</span></article></Reveal> })}</div>
    </div>
    <Reveal className="info-grid">{[
      { icon: MapPin, label: 'BASED IN', value: portfolio.location },
      { icon: Code2, label: 'STUDYING', value: portfolio.degree },
      { icon: GraduationCap, label: 'UNIVERSITY', value: portfolio.university },
      { icon: CalendarDays, label: 'EXPECTED GRADUATION', value: portfolio.expectedGraduation },
    ].map(({ icon: Icon, label, value }) => <div className="info-item" key={label}><Icon size={17} /><div><span>{label}</span><p>{value}</p></div></div>)}</Reveal>
  </div></section>
}
