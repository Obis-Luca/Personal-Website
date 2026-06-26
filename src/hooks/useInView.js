import { useEffect, useRef, useState } from 'react'

// Lightweight IntersectionObserver hook for reveal-on-scroll.
export function useInView({ threshold = 0.15, once = true, rootMargin = '0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) obs.unobserve(node)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [threshold, once, rootMargin])

  return [ref, inView]
}
