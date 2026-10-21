import { contact } from '../data/skills.ts'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bgsoft">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="mono text-[12px] text-faint">
          built with React 19 + Tailwind v4 · {contact.locationShort}
        </p>
        <nav aria-label="Footer" className="flex items-center gap-4 text-sm">
          <a href={`mailto:${contact.email}`} className="link-underline text-muted hover:text-ink">
            Email
          </a>
          <a href={contact.tel} className="link-underline text-muted hover:text-ink">
            {contact.phone}
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="link-underline text-muted hover:text-ink">
            GitHub ↗
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="link-underline text-muted hover:text-ink">
            LinkedIn ↗
          </a>
        </nav>
      </div>
    </footer>
  )
}
