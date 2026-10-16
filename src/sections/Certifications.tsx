import { ArrowUpRight, Cloud, Terminal } from 'lucide-react'
import { credentials } from '../data/portfolioData'
import { Reveal, SectionHeading } from '../components/Shared'

export default function Certifications() {
  return <section id="certifications" className="section" tabIndex={-1} aria-labelledby="certifications-title"><div className="container">
    <SectionHeading number="05" label="PROFESSIONAL DEVELOPMENT" title={<span id="certifications-title">Certifications & Training</span>} description="Continuous learning through technology-focused courses, certifications, and training programs." />
    <div className="certifications-grid">{credentials.map((credential, index) => <Reveal key={credential.title} delay={index * 0.04}><article className="certification-card"><div className="certification-top"><span className="certification-icon">{credential.provider === 'Cisco' ? <Terminal size={23} strokeWidth={1.5} /> : <Cloud size={24} strokeWidth={1.5} />}</span><span className="credential-type">{credential.type}</span></div><p className="credential-provider">{credential.provider}</p><h3>{credential.title}</h3><div className="certification-bottom">{credential.date ? <span>{credential.date}</span> : <span>Completion date not provided</span>}{(credential.url || credential.certificate) && <a href={credential.url || credential.certificate} target="_blank" rel="noreferrer" aria-label={`View ${credential.title} credential (opens in a new tab)`}><ArrowUpRight size={19} /></a>}</div></article></Reveal>)}</div>
  </div></section>
}
