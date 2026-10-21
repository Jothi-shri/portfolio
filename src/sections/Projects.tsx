import { ProjectCard } from '../components/ProjectCard.tsx'
import { Reveal } from '../components/Reveal.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { projectFilters, projects } from '../data/projects.ts'
import { useStore } from '../store/useStore.ts'

export function Projects() {
  const filter = useStore((s) => s.projectFilter)
  const setFilter = useStore((s) => s.setProjectFilter)

  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter) || p.stack.includes(filter))

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="03 · Projects"
            title="Case studies, not screenshots"
            id="projects-heading"
            lede="Company work is proprietary, so cards use illustrative code-built mockups. Each case study covers the problem, my role, what I built, the hard parts, and the outcome."
          />
        </Reveal>

        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => {
            const active = filter === f
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`mono cursor-pointer rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors ${
                  active
                    ? 'border-accent bg-accent font-semibold text-onaccent'
                    : 'border-border bg-surface text-muted hover:border-accent hover:text-ink'
                }`}
              >
                {f}
              </button>
            )
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2" role="list" aria-live="polite">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.06} className="h-full">
              <div role="listitem" className="h-full">
                <ProjectCard project={p} />
              </div>
            </Reveal>
          ))}
        </div>
        {visible.length === 0 && (
          <p className="mono mt-6 text-sm text-faint">No projects match this filter.</p>
        )}
      </div>
    </section>
  )
}
