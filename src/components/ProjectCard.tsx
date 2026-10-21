import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { Project } from '../data/projects.ts'
import { Card } from './Card.tsx'
import { Chip } from './Chip.tsx'
import { ProjectVisual } from './ProjectVisual.tsx'

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open ])

  return (
    <>
      <Card className="card-lift group flex h-full flex-col overflow-hidden">
        {project.visual && (
          <div className="relative overflow-hidden">
            <div className="card-zoom">
              <ProjectVisual visual={project.visual} />
            </div>
            <span
              aria-hidden="true"
              className="card-view mono pointer-events-none absolute top-3 right-3 rounded-full border border-border bg-surface/90 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-accentink uppercase backdrop-blur"
            >
              View →
            </span>
          </div>
        )}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-bold tracking-tight">
            <Link to={`/projects/${project.slug}`} className="transition-colors group-hover:text-accentink">
              {project.title}
            </Link>
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.tagline}</p>
          <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.stack.slice(0, 5).map((s) => (
              <Chip key={s} label={s} />
            ))}
            {project.stack.length > 5 && <Chip label={`+${project.stack.length - 5}`} />}
          </div>
          <div className="mt-4 flex items-center gap-4 pt-1">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
              className="mono cursor-pointer text-[13px] font-semibold text-accentink hover:underline"
            >
              Quick view →
            </button>
            <Link
              to={`/projects/${project.slug}`}
              className="mono text-[13px] text-muted hover:text-ink hover:underline"
              aria-label={`Read the ${project.title} case study`}
            >
              Case study →
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mono text-[13px] text-muted hover:text-ink hover:underline"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </Card>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} quick view`}
            className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-4 sm:items-center"
            onClick={() => setOpen(false)}
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.25, ease: 'easeOut' },
                })}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[var(--radius)] border border-border bg-surface p-5 sm:p-6"
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 28, scale: 0.98 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    exit: { opacity: 0, y: 16, scale: 0.98 },
                    transition: { duration: 0.3, ease: 'easeOut' },
                  })}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="mono text-[11px] tracking-[0.16em] text-accentink uppercase">Quick view</p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close quick view"
                  autoFocus
                  className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-[10px] border border-border text-ink transition-colors hover:border-accent"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Technology stack">
                {project.stack.map((s) => (
                  <Chip key={s} label={s} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.problem}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to={`/projects/${project.slug}`}
                  className="mono rounded-[10px] bg-accent px-4 py-2 text-[13px] font-semibold text-onaccent hover:opacity-90"
                >
                  Full case study →
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mono rounded-[10px] border border-borderstrong px-4 py-2 text-[13px] font-medium text-ink hover:border-accent hover:text-accentink"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
