import { Chip } from '../components/Chip.tsx'
import { Reveal } from '../components/Reveal.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { skillGroups } from '../data/skills.ts'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20 bg-bgsoft">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <SectionHeading kicker="04 · Skills" title="Grouped by where they get used" id="skills-heading" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.06}>
              <div className="card-lift h-full rounded-[var(--radius)] border border-border bg-surface p-5">
                <h3 className="mono text-[12px] font-semibold tracking-[0.16em] text-accentink uppercase">
                  {g.title} <span className="text-faint">· {g.skills.length}</span>
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${g.title} skills`}>
                  {g.skills.map((s, i) => (
                    <li key={s}>
                      <Reveal delay={Math.min(i * 0.04, 0.24)}>
                        <Chip label={s} />
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
