import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/content'
import { useInView } from '../hooks/useInView'
import { fadeUp, stagger } from '../styles/motion'
import './Projects.css'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="proj-arrow" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
    <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
  </svg>
)

// Mouse-tracking spotlight: write cursor position to CSS custom props on the card.
function handleMove(e) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  el.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

function ProjectCard({ project, index }) {
  const { name, blurb, featured, category, description, highlights, metrics, stack, link } = project
  const hasLink = Boolean(link)
  const isPrivate = !hasLink
  // Featured projects without a public repo are live/shipped products.
  const privateLabel = featured ? 'Live product' : 'Private repo'

  const CardTag = hasLink ? motion.a : motion.div
  const linkProps = hasLink
    ? { href: link, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <CardTag
      className={`proj-card glass ${featured ? 'is-featured' : ''} ${hasLink ? 'is-link' : ''}`}
      layout
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.25 } }}
      onMouseMove={handleMove}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      {...linkProps}
      aria-label={hasLink ? `${name} — view on GitHub` : name}
    >
      <span className="proj-card-glow" aria-hidden="true" />
      <span className="proj-card-spotlight" aria-hidden="true" />

      <div className="proj-card-inner">
        <header className="proj-card-top">
          <span className="proj-cat mono">{category}</span>
          <div className="proj-metrics">
            {metrics.map((m) => (
              <span key={m} className="proj-metric mono">{m}</span>
            ))}
          </div>
        </header>

        <h3 className="proj-name">{name}</h3>
        <p className="proj-blurb">{blurb}</p>
        <p className="proj-desc">{description}</p>

        <ul className="proj-highlights">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <footer className="proj-card-foot">
          <div className="proj-stack">
            {stack.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>

          {hasLink ? (
            <span className="proj-link mono">
              <GithubIcon />
              View on GitHub
              <ArrowIcon />
            </span>
          ) : (
            <span className="proj-private mono">
              <LockIcon />
              {privateLabel}
            </span>
          )}
        </footer>
      </div>
    </CardTag>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.08 })
  const [active, setActive] = useState('All')

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category))
    return ['All', ...Array.from(set)]
  }, [])

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="projects" className="section proj">
      <div className="container">
        <motion.div
          className="proj-header"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.span className="section-tag" variants={fadeUp}>
            03 / Projects
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Things I&apos;ve <span className="gradient-text">built</span>
          </motion.h2>
          <motion.p className="proj-subtitle" variants={fadeUp}>
            From petabyte pipelines to products with real users.
          </motion.p>

          <motion.div className="proj-filters" variants={fadeUp} role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                className={`proj-pill mono ${active === cat ? 'is-active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {active === cat && (
                  <motion.span
                    className="proj-pill-bg"
                    layoutId="proj-pill-bg"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    aria-hidden="true"
                  />
                )}
                <span className="proj-pill-label">{cat}</span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div ref={ref} className="proj-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
