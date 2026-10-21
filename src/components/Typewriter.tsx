import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts'

const DEFAULT_ROLES = ['React', 'TypeScript', 'Python', 'Robotics UIs']

export function Typewriter({ roles = DEFAULT_ROLES }: { roles?: string[] }) {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => {
      setVisible(false)
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length)
        setVisible(true)
      }, 220)
    }, 2400)
    return () => window.clearInterval(id)
  }, [reduced, roles.length])

  if (reduced) {
    return <span>{roles.join(' · ')}</span>
  }

  return (
    <span className="relative inline-flex min-w-30 items-center">
      <span
        aria-live="polite"
        className={`font-semibold text-accentink transition-all duration-200 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        {roles[index]}
      </span>
      <span aria-hidden="true" className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-accent" />
    </span>
  )
}
