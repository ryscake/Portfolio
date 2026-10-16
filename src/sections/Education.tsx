import { GraduationCap, Award } from 'lucide-react'
import { education } from '../data/portfolioData'
import { Reveal, SectionHeading } from '../components/Shared'

export default function Education() {
  return <section id="education" className="section section-alt" tabIndex={-1} aria-labelledby="education-title"><div className="container education-grid">
    <div><SectionHeading number="04" label="ACADEMIC BACKGROUND" title={<span id="education-title">Education</span>} description="Building a foundation. Expanding what's possible." /><Reveal className="education-aside"><GraduationCap size={70} strokeWidth={0.65} /><p>Always a student.<br /><span className="muted">Always moving forward.</span></p></Reveal></div>
    <div className="timeline">{education.map((item, index) => <Reveal key={item.school} delay={index * 0.08} className="timeline-item"><span className={`timeline-dot ${item.current ? 'timeline-dot-current' : ''}`} /><article className="education-card"><div className="education-card-top"><span className="education-years">{item.years}</span>{item.current && <span className="current-badge">IN PROGRESS</span>}</div><h3>{item.degree}</h3><p className="education-school">{item.school}</p><p className="education-campus">{item.campus}</p><div className="education-detail"><span>{item.detailLabel}</span><p>{!item.current && <Award size={16} />}{item.detail}</p></div></article></Reveal>)}</div>
  </div></section>
}
