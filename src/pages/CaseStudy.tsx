import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Chip } from '../components/Chip.tsx'
import { ProjectVisual } from '../components/ProjectVisual.tsx'
import { Reveal } from '../components/Reveal.tsx'
import { getProject, projects } from '../data/projects.ts'

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  useEffect(() => {
    document.title = project
      ? `${project.title} — Jothishri B`
      : 'Project not found — Jothishri B'
    return () => {
      document.title = 'Jothishri B — Full Stack Developer (React, TypeScript, Python) | Real-time Dashboards for Robotics'
    }
  }, [project])

  if (!project) {
    return (
      <main id="main" className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <p className="mono text-[12px] tracking-[0.18em] text-faint uppercase">404 · unknown project</p>
        <h1 className="mt-3 text-3xl font-bold">No case study here.</h1>
        <p className="mt-2 text-muted">That project slug doesn't match anything in the project registry.</p>
        <Link to="/" className="mono mt-6 inline-block rounded-[10px] bg-accent px-5 py-2.5 text-[13px] font-semibold text-onaccent">
          ← Back home
        </Link>
      </main>
    )
  }

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  const blocks: { kicker: string; title: string; body: string | string[] }[] = [
    { kicker: 'Problem', title: 'The problem', body: project.problem },
    { kicker: 'Role', title: 'My role', body: project.role },
    { kicker: 'Build', title: 'What I built', body: project.built },
    { kicker: 'Challenges', title: 'Hard parts', body: project.challenges },
    { kicker: 'Outcome', title: 'Outcome', body: project.outcome },
  ]

  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb">
        <Link to="/#projects" className="mono text-[13px] text-muted hover:text-ink hover:underline">
          ← All projects
        </Link>
      </nav>

      <Reveal>
        <header className="mt-4">
          <p className="mono text-[12px] tracking-[0.18em] text-accentink uppercase">Case study</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{project.title}</h1>
          <p className="mt-2 text-lg text-muted">{project.tagline}</p>
          {project.proprietary && (
            <p className="mono mt-3 rounded-[10px] border border-warn/40 bg-warn/10 px-3 py-2 text-[12px] text-warn">
              Company project — visuals below are illustrative mockups, not real screenshots.
            </p>
          )}
          {project.visual && (
            <div className="mt-4 overflow-hidden rounded-[var(--radius)] border border-border">
              <ProjectVisual visual={project.visual} />
            </div>
          )}
          <div className="mt-4">
            <h2 className="mono text-[12px] font-semibold tracking-[0.16em] text-faint uppercase">Stack</h2>
            <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Technology stack">
              {project.stack.map((s) => (
                <li key={s}>
                  <Chip label={s} />
                </li>
              ))}
            </ul>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mono mt-4 inline-block rounded-[10px] bg-accent px-5 py-2.5 text-[13px] font-semibold text-onaccent hover:opacity-90"
            >
              Visit live site ↗
            </a>
          )}
        </header>
      </Reveal>

      <div className="mt-8 space-y-6">
        {blocks.map((b, i) => (
          <Reveal key={b.kicker} delay={Math.min(i * 0.04, 0.12)}>
            <section aria-label={b.title} className="rounded-[var(--radius)] border border-border bg-surface p-5 sm:p-6">
              <p className="mono text-[12px] font-semibold tracking-[0.16em] text-accentink uppercase">{b.kicker}</p>
              <h2 className="mt-1 text-xl font-bold">{b.title}</h2>
              {Array.isArray(b.body) ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
                  {b.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 leading-relaxed text-muted">{b.body}</p>
              )}
            </section>
          </Reveal>
        ))}
      </div>

      <nav aria-label="More case studies" className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link to={`/projects/${prev.slug}`} className="rounded-[var(--radius)] border border-border bg-surface p-4 hover:border-accent">
          <span className="mono text-[11px] tracking-wider text-faint uppercase">← Previous</span>
          <span className="mt-1 block text-sm font-semibold">{prev.title}</span>
        </Link>
        <Link to={`/projects/${next.slug}`} className="rounded-[var(--radius)] border border-border bg-surface p-4 text-right hover:border-accent">
          <span className="mono text-[11px] tracking-wider text-faint uppercase">Next →</span>
          <span className="mt-1 block text-sm font-semibold">{next.title}</span>
        </Link>
      </nav>
    </main>
  )
}
