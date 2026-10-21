import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { Reveal } from '../components/Reveal.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { education, experience } from '../data/experience.ts'

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.85', 'end 0.5'] })
  const drawProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20 bg-bgsoft">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <SectionHeading kicker="02 · Experience" title="Where I've shipped" id="experience-heading" />
        </Reveal>
        <ol ref={listRef} className="relative space-y-6 pl-0 sm:ml-2">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-0.5 rounded-full bg-border" />
          {reduce ? null : (
            <motion.span
              aria-hidden="true"
              style={{ scaleY: drawProgress, transformOrigin: 'top' }}
              className="absolute top-2 bottom-2 left-[7px] w-0.5 rounded-full bg-accent"
            />
          )}
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.06}>
              <li className="relative ml-6">
                <span
                  className="absolute top-1.5 -left-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-bg"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <article className="card-lift rounded-[var(--radius)] border border-border bg-surface p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold">
                      {item.role} <span className="font-medium text-muted">· {item.company}</span>
                    </h3>
                    <p className="mono text-[12px] text-faint">{item.period}</p>
                  </div>
                  <p className="mono mt-1 text-[12px] text-accentink">
                    {item.location}
                    {item.note ? ` · ${item.note}` : ''}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-8">
          <Reveal>
            <h3 className="mono mb-4 text-[12px] font-semibold tracking-[0.16em] text-accentink uppercase">
              Education
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.06}>
                <article className="card-lift h-full rounded-[var(--radius)] border border-border bg-surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-bold">
                      {e.degree} <span className="font-medium text-muted">· {e.school}</span>
                    </h4>
                    <p className="mono text-[12px] text-faint">{e.period}</p>
                  </div>
                  <p className="mono mt-1 text-[12px] text-accentink">{e.detail}</p>
                  <p className="mt-2 text-sm text-muted">Languages: {e.languages.join(', ')}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
