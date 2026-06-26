import { motion } from 'framer-motion'
import { education } from '../data/content'
import { useInView } from '../hooks/useInView'
import { fadeUp, stagger } from '../styles/motion'
import './About.css'

// Lines of the fake `luca.ts` object literal, tokenized for syntax-highlight styling.
const codeLines = [
  [{ t: 'kw', v: 'const' }, { t: 'sp', v: ' ' }, { t: 'var', v: 'luca' }, { t: 'op', v: ' = ' }, { t: 'pn', v: '{' }],
  [{ t: 'in', v: '  ' }, { t: 'key', v: 'role' }, { t: 'pn', v: ': ' }, { t: 'str', v: '"SDE @ Amazon"' }, { t: 'pn', v: ',' }],
  [
    { t: 'in', v: '  ' }, { t: 'key', v: 'focus' }, { t: 'pn', v: ': [' },
    { t: 'str', v: '"distributed systems"' }, { t: 'pn', v: ', ' },
    { t: 'str', v: '"cloud"' }, { t: 'pn', v: ', ' },
    { t: 'str', v: '"data eng"' }, { t: 'pn', v: '],' },
  ],
  [{ t: 'in', v: '  ' }, { t: 'key', v: 'scale' }, { t: 'pn', v: ': ' }, { t: 'str', v: '"~100 PB / day"' }, { t: 'pn', v: ',' }],
  [{ t: 'in', v: '  ' }, { t: 'key', v: 'based' }, { t: 'pn', v: ': ' }, { t: 'str', v: '"Iași, Romania"' }, { t: 'pn', v: ',' }],
  [{ t: 'in', v: '  ' }, { t: 'key', v: 'shipsProducts' }, { t: 'pn', v: ': ' }, { t: 'bool', v: 'true' }, { t: 'pn', v: ',' }],
  [{ t: 'pn', v: '}' }, { t: 'pn', v: ';' }],
]

const facts = [
  'Babeș-Bolyai University',
  'C2 English',
  'Builds from scratch',
  'Ships to prod',
]

function CapIcon() {
  return (
    <svg
      className="about-edu-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 9 12 4 2 9l10 5 10-5Z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 9v6" />
    </svg>
  )
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="section about">
      <div className="container about-grid" ref={ref}>
        {/* LEFT — narrative */}
        <motion.div
          className="about-left"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.span className="section-tag" variants={fadeUp}>
            01 / About
          </motion.span>

          <motion.h2 className="section-title" variants={fadeUp}>
            I build systems that run at <span className="gradient-text">scale</span> — and products people use.
          </motion.h2>

          <motion.p className="about-para" variants={fadeUp} custom={1}>
            I&apos;m an SDE at Amazon on a Tier-1 ingestion platform that moves roughly
            100 petabytes of data every single day. My work lives at the seam of
            systems, software, and data engineering — keeping a fleet that size fast,
            resilient, and cost-efficient under peak load.
          </motion.p>

          <motion.p className="about-para" variants={fadeUp} custom={2}>
            Range is the throughline. I&apos;ve gone low — a Redis server and a concurrent
            language interpreter with its own garbage collector — through ML (CNNs,
            genetic algorithms), out to distributed cloud architecture like a
            five-microservice GitHub clone, and all the way to shipped products: an AI
            SaaS with paying users, a Chrome extension with 70+ users, and a scheduling
            app on the App Store.
          </motion.p>

          <motion.p className="about-para about-para-tight" variants={fadeUp} custom={3}>
            What drives me is simple: ship things that actually work, and learn the
            hard parts by building them from scratch.
          </motion.p>

          <motion.div className="about-edu glass" variants={fadeUp} custom={4}>
            <span className="about-edu-badge">
              <CapIcon />
            </span>
            <div className="about-edu-body">
              <h3 className="about-edu-degree">{education.degree}</h3>
              <p className="about-edu-school">{education.school}</p>
              <p className="about-edu-meta mono">
                {education.location} · {education.period}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — terminal + facts */}
        <motion.div
          className="about-right"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          custom={2}
        >
          <div className="about-term glass">
            <div className="about-term-bar">
              <span className="about-dot about-dot-r" />
              <span className="about-dot about-dot-y" />
              <span className="about-dot about-dot-g" />
              <span className="about-term-file mono">luca.ts</span>
            </div>

            <motion.pre
              className="about-code mono"
              variants={stagger}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {codeLines.map((line, li) => (
                <motion.code className="about-code-line" key={li} variants={fadeUp} custom={li}>
                  <span className="about-ln">{li + 1}</span>
                  <span className="about-code-content">
                    {line.map((tok, ti) => (
                      <span className={`tok-${tok.t}`} key={ti}>
                        {tok.v}
                      </span>
                    ))}
                  </span>
                </motion.code>
              ))}
            </motion.pre>
          </div>

          <motion.div
            className="about-facts"
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {facts.map((fact, i) => (
              <motion.span className="chip about-fact" key={fact} variants={fadeUp} custom={i}>
                {fact}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
