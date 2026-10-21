import { Reveal } from '../components/Reveal.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { contact } from '../data/skills.ts'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="05 · Contact"
            title="Let's talk full-stack roles"
            id="contact-heading"
            lede="I'm looking for full-stack roles at product companies — especially teams working on real-time, data-heavy products. Email is fastest."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="grid gap-3 sm:grid-cols-3" aria-label="Contact links">
            <li className="card-lift rounded-[var(--radius)] border border-border bg-surface p-4">
              <p className="mono text-[11px] tracking-[0.16em] text-faint uppercase">Email</p>
              <a href={`mailto:${contact.email}`} className="mt-1 block font-semibold break-all text-accentink hover:underline">
                {contact.email}
              </a>
            </li>
            <li className="card-lift rounded-[var(--radius)] border border-border bg-surface p-4">
              <p className="mono text-[11px] tracking-[0.16em] text-faint uppercase">LinkedIn</p>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block font-semibold break-all text-accentink hover:underline"
              >
                {contact.linkedinLabel} ↗
              </a>
            </li>
            <li className="card-lift rounded-[var(--radius)] border border-border bg-surface p-4">
              <p className="mono text-[11px] tracking-[0.16em] text-faint uppercase">GitHub</p>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block font-semibold break-all text-accentink hover:underline"
              >
                {contact.githubLabel} ↗
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
