import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter.tsx'
import { SiteHeader } from '../components/SiteHeader.tsx'

export function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return () => cancelAnimationFrame(id)
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl flex-1 px-4 py-20 text-center sm:px-6">
        <p className="mono text-[12px] tracking-[0.18em] text-faint uppercase">404 · off the map</p>
        <h1 className="mt-3 text-3xl font-bold">This route doesn't exist.</h1>
        <Link to="/" className="mono mt-6 inline-block rounded-[10px] bg-accent px-5 py-2.5 text-[13px] font-semibold text-onaccent">
          ← Back home
        </Link>
      </main>
      <SiteFooter />
    </div>
  )
}
