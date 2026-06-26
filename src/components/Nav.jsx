import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { sections } from '../data/content'
import './Nav.css'

export default function Nav() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-45% 0px -50% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner container">
        <a href="#hero" className="nav__logo" onClick={(e) => go(e, 'hero')}>
          <span className="nav__logo-mark">LO</span>
          <span className="nav__logo-dot" />
        </a>

        <ul className="nav__links">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => go(e, s.id)}
                className={active === s.id ? 'is-active' : ''}
              >
                <span className="nav__num">{String(sections.indexOf(s)).padStart(2, '0')}</span>
                {s.label}
                {active === s.id && (
                  <motion.span className="nav__underline" layoutId="nav-underline" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav__cta" onClick={(e) => go(e, 'contact')}>
          Let's talk
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <motion.div
        className="nav__mobile"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => go(e, s.id)}
                className={active === s.id ? 'is-active' : ''}
              >
                <span className="nav__num">{String(sections.indexOf(s)).padStart(2, '0')}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}
