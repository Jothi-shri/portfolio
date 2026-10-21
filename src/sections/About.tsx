import { Reveal } from '../components/Reveal.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { education } from '../data/experience.ts'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <SectionHeading kicker="01 · About" title="Full Stack Developer for data-dense, real-time products" id="about-heading" />
          <div className="max-w-3xl space-y-4 leading-relaxed text-muted">
            <p>
              Full Stack Developer with 1 year of hands-on experience building React and TypeScript applications,
              including real-time monitoring UIs for robotics platforms, backed by FastAPI/Flask REST APIs and
              PostgreSQL/MongoDB. Skilled in component-driven architecture, React Hooks, state management, and
              REST/MQTT data integration for live dashboards, with a focus on responsive, high-performance
              interfaces for data-dense, real-time products.
            </p>
            <p>
              Currently a <span className="font-semibold text-ink">Web Developer at Navic</span>, a startup incubated
              at IITM (Nov 2025–present), building Autonomous Mobile Robots (Greeting and Shopping Assistance
              Robots) in Taramani, Chennai - 600113.
            </p>
          </div>
          <dl className="mono mt-6 grid max-w-3xl grid-cols-2 gap-3 text-[12px] sm:grid-cols-4">
            {[
              ['role', 'full-stack'],
              ['focus', 'real-time UI'],
              ['base', 'Chennai, IN'],
              ['status', 'open to roles'],
            ].map(([k, v]) => (
              <div key={k} className="card-lift rounded-[10px] border border-border bg-surface px-3 py-2.5">
                <dt className="tracking-wider text-faint uppercase">{k}</dt>
                <dd className="mt-0.5 font-semibold text-accentink">{v}</dd>
              </div>
            ))}
          </dl>
          {education.map((e) => (
            <div
              key={e.school}
              className="mt-4 max-w-3xl rounded-[var(--radius)] border border-border bg-surface p-4 sm:p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold">
                  {e.degree} <span className="font-medium text-muted">· {e.school}</span>
                </h3>
                <p className="mono text-[12px] text-faint">{e.period}</p>
              </div>
              <p className="mono mt-1 text-[12px] text-accentink">{e.detail}</p>
              <p className="mt-2 text-sm text-muted">Languages: {e.languages.join(', ')}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
