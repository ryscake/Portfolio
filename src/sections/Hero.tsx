import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Code2, MapPin, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolioData'
import { ResumeButton, ScrollHint, SocialLinks } from '../components/Shared'

function RotatingTitle() {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()
  useEffect(() => {
    if (reduced) return
    const timer = window.setInterval(() => setIndex(value => (value + 1) % portfolio.roles.length), 4200)
    return () => window.clearInterval(timer)
  }, [reduced])
  return <div className="rotating-title"><span className="title-dash" /><span className="sr-only">{portfolio.title}</span><span aria-hidden="true"><AnimatePresence mode="wait"><motion.span key={index} initial={{ opacity: 0, y: reduced ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -8 }} transition={{ duration: 0.3 }}>{portfolio.roles[index]}</motion.span></AnimatePresence></span></div>
}

function HeroVisual() {
  return <div className="hero-visual">
    <div className="visual-grid" aria-hidden="true" />
    <div className="visual-corner corner-tl" aria-hidden="true" /><div className="visual-corner corner-br" aria-hidden="true" />
    <span className="visual-coordinate" aria-hidden="true">14.24° N / 121.51° E</span>
    <div className="orbit orbit-outer" aria-hidden="true" /><div className="orbit orbit-inner" aria-hidden="true" />
    <div className="portrait-frame">
      {portfolio.portrait ? <img className="portrait-image" src={portfolio.portrait} alt={portfolio.name} width="500" height="600" fetchPriority="high" /> : <>
        <div className="portrait-light" aria-hidden="true" />
        <svg className="hero-monogram" viewBox="0 0 280 280" aria-hidden="true"><defs><linearGradient id="monogram" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f4f4f4"/><stop offset=".5" stopColor="#9c9c9c"/><stop offset="1" stopColor="#3c3c3c"/></linearGradient></defs><path d="M52 65V215M52 151L126 65M52 146L115 215M130 65L180 215L230 65" fill="none" stroke="url(#monogram)" strokeWidth="19" strokeLinejoin="miter"/><path d="M19 211C-8 162 65 90 157 71C249 52 295 82 270 126" fill="none" stroke="#c1121f" strokeWidth="3"/><circle cx="270" cy="126" r="5" fill="#e63946"/></svg>
        <div className="portrait-caption"><span className="tiny-cross">+</span><span>YOUR PORTRAIT GOES HERE<span>THOUGHTFULLY UNDER CONSTRUCTION</span></span><span className="tiny-cross">+</span></div>
      </>}
      <div className="portrait-topline" aria-hidden="true"><span>KV / PERSONAL PORTFOLIO</span><span>01</span></div>
    </div>
    <div className="floating-tag tag-top"><Sparkles size={15} /><span>Ideas into impact.</span></div>
    <div className="floating-tag tag-bottom"><span className="code-icon"><Code2 size={22} /></span><span>CREATIVE MIND.<strong>Practical solutions.</strong></span><ArrowUpRight size={17} /></div>
    <span className="visual-side-label" aria-hidden="true">CODE · DESIGN · CONTINUOUS GROWTH</span>
  </div>
}

export default function Hero({ resumeAvailable }: { resumeAvailable: boolean }) {
  const reduced = useReducedMotion()
  const entrance = { initial: { opacity: 0, y: reduced ? 0 : 18 }, animate: { opacity: 1, y: 0 } }
  return <section id="home" className="hero" tabIndex={-1} aria-labelledby="hero-heading">
    <div className="hero-glow" aria-hidden="true" />
    <div className="container hero-content">
      <div className="hero-copy">
        <motion.p {...entrance} transition={{ duration: 0.6 }} className="eyebrow hero-eyebrow"><span className="red-dot" />WELCOME TO MY PORTFOLIO</motion.p>
        <motion.h1 id="hero-heading" {...entrance} transition={{ duration: 0.7, delay: 0.08 }}><span className="hero-greeting">Hi, I'm</span>Krystal Margareth<span className="hero-surname">Villanueva<span className="red">.</span></span></motion.h1>
        <motion.div {...entrance} transition={{ duration: 0.7, delay: 0.16 }}><RotatingTitle /></motion.div>
        <motion.p {...entrance} transition={{ duration: 0.7, delay: 0.24 }} className="hero-description">{portfolio.introduction}</motion.p>
        <motion.div {...entrance} transition={{ duration: 0.7, delay: 0.32 }} className="hero-buttons"><a className="button button-primary" href="#projects">View My Projects<ArrowUpRight size={17} /></a><ResumeButton available={resumeAvailable} /></motion.div>
        <motion.div {...entrance} transition={{ duration: 0.7, delay: 0.4 }} className="hero-social"><SocialLinks /><span className="social-divider" /><a href="#contact" className="connect-link">Let's connect<ArrowRight size={15} /></a></motion.div>
      </div>
      <motion.div className="hero-art" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}><HeroVisual /></motion.div>
      <div className="hero-bottom"><ScrollHint /><span className="hero-location"><MapPin size={13} />BASED IN LAGUNA, PHILIPPINES</span><span className="hero-index">DESIGNING THE NEXT CHAPTER <span>↗</span></span></div>
    </div>
    <div className="hero-interest-strip" aria-label="Areas of interest"><div className="container"><span>SOFTWARE DEVELOPMENT</span><span className="strip-star" aria-hidden="true">✳</span><span>WEB & MOBILE APPLICATIONS</span><span className="strip-star" aria-hidden="true">✳</span><span>UI/UX DESIGN</span><span className="strip-star" aria-hidden="true">✳</span><span>CONTINUOUS LEARNING</span></div></div>
  </section>
}
