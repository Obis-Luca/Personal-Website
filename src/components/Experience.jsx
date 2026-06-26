import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { experience } from '../data/content'
import { useInView } from '../hooks/useInView'
import './Experience.css'

function TimelineEntry({ item }) {
  const [ref, inView] = useInView({ threshold: 0.25, once: true })

  return (
    <div ref={ref} className="exp-entry">
      {/* Node on the spine */}
      <div className={`exp-node ${item.current ? 'exp-node--current' : ''}`} aria-hidden="true">
        {item.current && <span className="exp-node-pulse" />}
        <span className="exp-node-dot" />
      </div>

      <motion.article
        className="exp-card glass"
        initial={{ opacity: 0, x: 40, y: 24 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="exp-card-head">
          <h3 className="exp-company">{item.company}</h3>
          <div className="exp-head-meta">
            {item.current && (
              <span className="exp-current-pill">
                <span className="exp-current-dot" /> Current
              </span>
            )}
            <span className="exp-period mono">{item.period}</span>
          </div>
        </header>

        <p className="exp-role">
          {item.role}
          {item.team && <span className="exp-team"> · {item.team}</span>}
        </p>

        <p className="exp-summary">{item.summary}</p>

        <ul className="exp-points">
          {item.points.map((point, i) => (
            <li key={i} className="exp-point">
              <span className="exp-marker" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="exp-stack">
          {item.stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  )
}

export default function Experience() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.6', 'end 0.4'],
  })
  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="section exp">
      <div className="container">
        <span className="section-tag">02 / Experience</span>
        <h2 className="section-title">
          Where I&rsquo;ve <span className="gradient-text">worked</span>
        </h2>

        <div className="exp-timeline" ref={timelineRef}>
          {/* Spine: static track + animated drawing overlay */}
          <div className="exp-spine" aria-hidden="true">
            <motion.div
              className="exp-spine-fill"
              style={{ scaleY: spineScale }}
            />
          </div>

          <div className="exp-entries">
            {experience.map((item) => (
              <TimelineEntry key={item.company} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
