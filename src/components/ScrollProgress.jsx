import { motion, useScroll, useSpring } from 'framer-motion'

// Thin gradient progress bar pinned to the top of the viewport.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 200,
        background: 'var(--grad)',
        boxShadow: '0 0 12px rgba(56,232,212,0.4)',
      }}
    />
  )
}
