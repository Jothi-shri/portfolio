import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle.tsx'

const links = [
  { id: 'about', to: '/#about', label: 'About' },
  { id: 'experience', to: '/#experience', label: 'Experience' },
  { id: 'projects', to: '/#projects', label: 'Projects' },
  { id: 'skills', to: '/#skills', label: 'Skills' },
  { id: 'contact', to: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const linkCls = (id: string) =>
    `relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface2 hover:text-ink ${
      active === id ? 'text-ink' : 'text-muted'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35)]' : ''
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="mono text-[15px] font-semibold tracking-tight" aria-label="Jothishri B — home">
          <span className="text-accentink">jb</span>
          <span className="text-faint">.dev</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              aria-current={active === l.id ? 'location' : undefined}
              className={linkCls(l.id)}
            >
              {l.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-all duration-300 ease-out ${
                  active === l.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              />
            </Link>
          ))}
          <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
          <ThemeToggle />
          <a
            href="/Jothishri-B-Resume.pdf"
            download
            className="mono ml-1 rounded-[10px] bg-accent px-4 py-2 text-[13px] font-semibold text-onaccent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-accent/20 active:translate-y-0"
          >
            Resume ↓
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] border border-border bg-surface"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-surface px-4 py-3 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={close}
                  aria-current={active === l.id ? 'location' : undefined}
                  className={`block rounded-md px-3 py-2.5 text-[15px] font-medium hover:bg-surface2 ${
                    active === l.id ? 'text-accentink' : 'text-ink'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/Jothishri-B-Resume.pdf"
                download
                className="mono mt-1 block rounded-md bg-accent px-3 py-2.5 text-center text-[14px] font-semibold text-onaccent"
              >
                Download resume ↓
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
