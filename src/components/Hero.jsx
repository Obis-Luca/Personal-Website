import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, stats } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'
import { fadeUp, stagger } from '../styles/motion'
import './Hero.css'

const ROLES = [
  'Software Development Engineer',
  'Distributed Systems',
  'Cloud Architecture',
  'Full-Stack Builder',
]

// Timing for the typewriter loop (ms).
const TYPE_SPEED = 65
const DELETE_SPEED = 32
const HOLD_FULL = 1500
const HOLD_EMPTY = 350

function useTypewriter(words) {
  const [text, setText] = useState('')
  const stateRef = useRef({ wordIndex: 0, deleting: false })

  useEffect(() => {
    let timer

    const tick = () => {
      const { wordIndex, deleting } = stateRef.current
      const word = words[wordIndex]
      const nextLen = deleting ? text.length - 1 : text.length + 1
      const next = word.slice(0, nextLen)
      setText(next)

      let delay = deleting ? DELETE_SPEED : TYPE_SPEED

      if (!deleting && next === word) {
        delay = HOLD_FULL
        stateRef.current.deleting = true
      } else if (deleting && next === '') {
        delay = HOLD_EMPTY
        stateRef.current.deleting = false
        stateRef.current.wordIndex = (wordIndex + 1) % words.length
      }

      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, TYPE_SPEED)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return text
}

function StatItem({ stat, active }) {
  const count = useCountUp(stat.value, active)
  const rounded = Math.round(count)
  const display = rounded >= 1000 ? rounded.toLocaleString() : String(rounded)

  return (
    <motion.div className="hero-stat" variants={fadeUp}>
      <div className="hero-stat-num">
        {display}
        {stat.suffix && <span className="hero-stat-suffix">{stat.suffix}</span>}
      </div>
      <div className="hero-stat-label">{stat.label}</div>
      <div className="hero-stat-sub mono">{stat.sub}</div>
    </motion.div>
  )
}

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 6.5 9 6 9-6" />
  </svg>
)

export default function Hero() {
  const typed = useTypewriter(ROLES)
  const [countActive, setCountActive] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setCountActive(true), 600)
    return () => clearTimeout(id)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-ring" aria-hidden="true" />

      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-status" variants={fadeUp}>
            <span className="hero-dot" aria-hidden="true" />
            <span className="mono">&gt; SDE @ Amazon · {profile.location}</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeUp}>
            Luca <span className="gradient-text">Obis</span>
          </motion.h1>

          <motion.div className="hero-type" variants={fadeUp} aria-live="polite">
            <span className="hero-type-prefix mono">~/</span>
            <span className="hero-type-text">{typed}</span>
            <span className="hero-caret" aria-hidden="true" />
          </motion.div>

          <motion.p className="hero-tagline" variants={fadeUp}>
            {profile.tagline}
          </motion.p>

          <motion.p className="hero-blurb" variants={fadeUp}>
            {profile.blurb}
          </motion.p>

          <motion.div className="hero-cta" variants={fadeUp}>
            <motion.a
              href="#projects"
              className="hero-btn hero-btn-primary"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="hero-btn hero-btn-ghost glass"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.a>
          </motion.div>

          <motion.div className="hero-socials" variants={fadeUp}>
            <a className="hero-social" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a className="hero-social" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a className="hero-social" href={profile.links.email} aria-label="Email">
              <MailIcon />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-stats glass"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={countActive} />
          ))}
        </motion.div>
      </div>

      <div className="hero-scroll mono" aria-hidden="true">
        <span>scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}
