import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { useInView } from '../hooks/useInView'
import './Contact.css'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.27-7-11a7 7 0 0 1 14 0c0 4.73-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

const UpArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>
)

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, once: true })

  const links = [
    { key: 'github', label: 'GitHub', href: profile.links.github, icon: <GitHubIcon />, external: true },
    { key: 'linkedin', label: 'LinkedIn', href: profile.links.linkedin, icon: <LinkedInIcon />, external: true },
    { key: 'email', label: 'Email', href: profile.links.email, icon: <MailIcon />, external: false },
  ]

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">05 / Contact</span>
          <h2 className="section-title contact-title">
            Let&rsquo;s build something <span className="gradient-text">great</span>.
          </h2>

          <p className="contact-lead">
            I&rsquo;m always open to a good conversation — whether it&rsquo;s an ambitious
            engineering problem, a new opportunity, or just to swap ideas. Drop me a line and
            I&rsquo;ll get back to you.
          </p>

          <motion.a
            className="contact-email-btn"
            href={profile.links.email}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="contact-email-icon" aria-hidden="true"><MailIcon /></span>
            <span className="contact-email-text mono">{profile.email}</span>
            <span className="contact-email-arrow" aria-hidden="true"><ArrowIcon /></span>
          </motion.a>

          <motion.div
            className="contact-links"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((link) => (
              <a
                key={link.key}
                className="contact-pill glass"
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact-pill-icon" aria-hidden="true">{link.icon}</span>
                <span className="contact-pill-label">{link.label}</span>
              </a>
            ))}
          </motion.div>

          <p className="contact-location mono">
            <span className="contact-location-icon" aria-hidden="true"><PinIcon /></span>
            {profile.location}
          </p>
        </motion.div>
      </div>

      <footer className="contact-footer">
        <div className="container contact-footer-inner">
          <span className="contact-footer-left mono">
            Designed &amp; built by {profile.name} · &copy; 2026
          </span>

          <div className="contact-footer-social" aria-hidden="false">
            <a className="contact-footer-icon" href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a className="contact-footer-icon" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a className="contact-footer-icon" href={profile.links.email} aria-label="Email">
              <MailIcon />
            </a>
          </div>

          <a className="contact-backtop mono" href="#hero">
            Back to top
            <span className="contact-backtop-arrow" aria-hidden="true"><UpArrowIcon /></span>
          </a>
        </div>
      </footer>
    </section>
  )
}
