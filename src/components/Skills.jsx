import { motion } from 'framer-motion'
import { skillGroups } from '../data/content'
import { useInView } from '../hooks/useInView'
import './Skills.css'

// A single proficiency bar that fills from 0 to `level%` once its card is in view.
function SkillBar({ skill, index, inView }) {
  return (
    <motion.li
      className="skills-bar"
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.12 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="skills-bar-head">
        <span className="skills-bar-name mono">{skill.name}</span>
        <span className="skills-bar-level mono">{skill.level}</span>
      </div>
      <div className="skills-track" role="presentation">
        <motion.span
          className="skills-fill"
          initial={{ width: '0%' }}
          animate={inView ? { width: `${skill.level}%` } : { width: '0%' }}
          transition={{ duration: 1, delay: 0.18 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="skills-fill-glow" aria-hidden="true" />
        </motion.span>
      </div>
    </motion.li>
  )
}

function SkillCard({ group, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, once: true })

  return (
    <motion.article
      ref={ref}
      className="skills-card glass"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="skills-card-head">
        <span className="skills-marker" aria-hidden="true" />
        <h3 className="skills-card-title">{group.title}</h3>
        <span className="skills-card-count mono">{group.skills.length}</span>
      </header>

      <ul className="skills-list">
        {group.skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} index={i} inView={inView} />
        ))}
      </ul>
    </motion.article>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-tag">04 / Skills</span>
        <h2 className="section-title">
          My <span className="gradient-text">toolkit</span>
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
