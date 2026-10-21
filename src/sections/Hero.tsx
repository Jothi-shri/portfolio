import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { CountUp } from '../components/CountUp.tsx'
import { Typewriter } from '../components/Typewriter.tsx'
import { fadeUp, staggerParent } from '../components/motion.ts'

const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 1, suffix: ' yr', label: 'hands-on experience' },
  { value: 4, suffix: '', label: 'projects shipped' },
  { value: 6, suffix: '', label: 'SaaS modules live' },
]

export function Hero() {
  const reduce = useReducedMotion()

  const container = reduce ? {} : { initial: 'hidden', animate: 'show', variants: staggerParent }
  const item = reduce ? {} : { variants: fadeUp }

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,var(--map-glow),transparent_70%)]" />
        {!reduce && (
          <>
            <div className="float-b absolute top-24 right-[12%] h-14 w-14 rounded-[10px] border border-accent/25" />
            <div className="float-a absolute bottom-16 left-[42%] h-10 w-10 rounded-full bg-accent/10" />
          </>
        )}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 lg:pt-16">
        <motion.div {...container}>
          <motion.p
            {...item}
            className="mono inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] tracking-[0.16em] text-muted uppercase"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ok" aria-hidden="true" />
            Open to full-stack roles · Taramani, Chennai
          </motion.p>
          <motion.h1
            {...item}
            id="hero-heading"
            className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl"
          >
            Jothishri B
          </motion.h1>
          <motion.p {...item} className="mt-3 text-lg leading-relaxed text-muted sm:text-xl">
            Full Stack Developer (React, TypeScript, Python) building{' '}
            <span className="font-semibold text-ink">real-time dashboards</span> for robotics platforms.
          </motion.p>
          <motion.p {...item} className="mono mt-3 text-[13px] leading-relaxed text-faint" aria-label="Roles">
            <Typewriter roles={['React', 'TypeScript', 'Python', 'Robotics UIs']} />
          </motion.p>
          <motion.p {...item} className="mono mt-2 text-[12px] leading-relaxed text-faint">
            FastAPI/Flask REST APIs · PostgreSQL/MongoDB · MQTT telemetry
          </motion.p>
          <motion.div {...item} className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/#projects"
              className="mono rounded-[10px] bg-accent px-5 py-2.5 text-[13px] font-semibold text-onaccent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-accent/20 active:translate-y-0 active:scale-[0.98]"
            >
              View projects →
            </Link>
            <a
              href="/Jothishri-B-Resume.pdf"
              download
              className="mono rounded-[10px] border border-borderstrong px-5 py-2.5 text-[13px] font-medium text-ink transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-accentink active:translate-y-0"
            >
              Download resume ↓
            </a>
          </motion.div>
          <motion.dl {...item} className="mono mt-8 grid max-w-md grid-cols-3 gap-3 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="card-lift rounded-[10px] border border-border bg-surface px-2 py-2.5">
                <dt className="order-2 mt-1 block text-[10px] tracking-wider text-faint uppercase">{s.label}</dt>
                <dd className="text-[15px] font-semibold text-accentink">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  )
}
