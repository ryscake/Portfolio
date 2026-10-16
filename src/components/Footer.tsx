import { ArrowUp } from 'lucide-react'
import { portfolio } from '../data/portfolioData'
import { Logo, SocialLinks } from './Shared'

export default function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div><Logo /><p>Thoughtful code. Purposeful design.</p></div><nav aria-label="Footer navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav><SocialLinks github={false} /><a className="back-top" href="#home">Back to top<ArrowUp size={16} /></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {portfolio.displayName}. All rights reserved.</p><p>Designed & Developed by {portfolio.name}</p><span className="footer-signoff"><span className="red-dot" />MADE WITH INTENTION</span></div></div></footer>
}
