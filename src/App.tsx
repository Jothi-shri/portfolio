import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { SiteFooter } from './components/SiteFooter.tsx'
import { SiteHeader } from './components/SiteHeader.tsx'
import { NotFound, ScrollManager } from './pages/Chrome.tsx'

const Home = lazy(() => import('./pages/Home.tsx'))
const CaseStudy = lazy(() => import('./pages/CaseStudy.tsx'))

function PageFallback() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-hidden="true">
      <p className="mono animate-pulse text-[13px] text-faint">loading module…</p>
    </div>
  )
}

function BrandLoader() {
  const reduce = useReducedMotion()
  const [done, setDone] = useState(reduce ?? false)

  useEffect(() => {
    if (reduce) return
    const id = window.setTimeout(() => setDone(true), 650)
    return () => window.clearTimeout(id)
  }, [reduce])

  if (done) return null
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-bg"
    >
      <p className="mono text-lg font-semibold tracking-tight">
        <span className="text-accentink">jb</span>
        <span className="text-faint">.dev</span>
      </p>
      <div className="h-0.5 w-32 overflow-hidden rounded-full bg-surface2">
        <div className="loader-bar h-full w-2/5 rounded-full bg-accent" />
      </div>
    </div>
  )
}

function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  if (reduce) return null
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-accent"
    />
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  const reduce = useReducedMotion()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -8 },
              transition: { duration: 0.3, ease: 'easeOut' },
            })}
      >
        <Suspense fallback={<PageFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <BrandLoader />
      <ScrollProgress />
      <div className="flex min-h-screen flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}
