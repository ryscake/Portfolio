import { useEffect, useState } from 'react'
import { navigation, portfolio } from '../data/portfolioData'

export function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const update = () => {
      const threshold = Math.min(window.innerHeight * 0.35, 220)
      const current = navigation.filter(({ id }) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= threshold
      }).at(-1)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive('contact')
      } else if (current) setActive(current.id)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return active
}

export function useResumeAvailable() {
  const [available, setAvailable] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    // Vite and some hosts return index.html for missing files: verify the actual PDF signature.
    fetch(portfolio.resume, { signal: controller.signal })
      .then(async response => {
        if (!response.ok) return
        const bytes = new Uint8Array(await response.arrayBuffer())
        const signature = String.fromCharCode(...bytes.slice(0, 5))
        if (!controller.signal.aborted) setAvailable(signature === '%PDF-')
      })
      .catch(() => { /* Missing résumé intentionally leaves the control disabled. */ })
    return () => controller.abort()
  }, [])
  return available
}
