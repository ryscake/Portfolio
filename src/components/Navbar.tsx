import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../data/portfolioData'
import { Logo, ResumeButton } from './Shared'

export default function Navbar({ active, resumeAvailable }: { active: string; resumeAvailable: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    menuRef.current?.querySelector('a')?.focus()
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
      if (event.key === 'Tab') {
        const items = [toggleRef.current, ...Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter(Boolean) as HTMLElement[]
        const first = items[0]
        const last = items.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    const onResize = () => { if (window.innerWidth >= 1100) setOpen(false) }
    document.addEventListener('keydown', keyboard)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', keyboard)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = (id?: string) => {
    setOpen(false)
    if (id) window.setTimeout(() => {
      const section = document.getElementById(id)
      section?.focus({ preventScroll: true })
    }, 0)
  }

  return <header className={`navbar ${scrolled || open ? 'navbar-scrolled' : ''}`}>
    <div className="container nav-inner">
      <Logo onClick={() => close()} />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(link => <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} className={active === link.id ? 'active' : ''}>{link.label}</a>)}
      </nav>
      <div className="nav-actions"><div className="nav-resume"><ResumeButton available={resumeAvailable} compact /></div><button ref={toggleRef} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    </div>
    <AnimatePresence>
      {open && <motion.div id="mobile-menu" ref={menuRef} className="mobile-menu" initial={{ opacity: 0, height: reduced ? 'auto' : 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: reduced ? 'auto' : 0 }} transition={{ duration: reduced ? 0 : 0.25 }}>
        <nav aria-label="Mobile navigation" className="container">{navigation.map((link, index) => <a key={link.id} href={`#${link.id}`} onClick={() => close(link.id)} aria-current={active === link.id ? 'location' : undefined}><span className="mobile-nav-number">0{index + 1}</span>{link.label}<ArrowUpRight size={20} /></a>)}</nav>
        <p className="mobile-menu-note">CAVINTI, LAGUNA · PHILIPPINES</p>
      </motion.div>}
    </AnimatePresence>
  </header>
}
