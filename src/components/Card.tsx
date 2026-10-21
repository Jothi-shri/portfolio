import type { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[var(--radius)] border border-border bg-surface ${className}`}>
      {children}
    </div>
  )
}
