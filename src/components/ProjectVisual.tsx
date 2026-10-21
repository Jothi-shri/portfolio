import type { ReactNode } from 'react'
import type { Project } from '../data/projects.ts'

export function ProjectVisual({ visual }: { visual: Project['visual'] }) {
  if (visual === 'fleet') return <FleetSketch />
  if (visual === 'slam') return <SlamSketch />
  if (visual === 'pipeline') return <PipelineSketch />
  return null
}

function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-t-[var(--radius)] border-b border-border bg-bgsoft" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-borderstrong" />
        <span className="h-2 w-2 rounded-full bg-borderstrong" />
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="mono ml-2 text-[10px] tracking-wider text-faint uppercase">{label} · illustrative mock</span>
      </div>
      <div className="panel-grid p-4">{children}</div>
    </div>
  )
}

function FleetSketch() {
  const rows = [
    { n: 'Unit 01', s: 'Active', b: '82%', c: 'text-ok' },
    { n: 'Unit 02', s: 'Active', b: '64%', c: 'text-ok' },
    { n: 'Unit 03', s: 'Standby', b: '57%', c: 'text-idle' },
    { n: 'Unit 04', s: 'Maintenance', b: '28%', c: 'text-warn' },
  ]
  return (
    <Frame label="operations-overview">
      <div className="grid grid-cols-2 gap-2">
        {rows.map((r) => (
          <div key={r.n} className="rounded-lg border border-border bg-surface p-2.5">
            <div className="mono text-[11px] font-semibold text-ink">{r.n}</div>
            <div className={`mono mt-1 text-[10px] ${r.c}`}>{r.s} · {r.b}</div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface2">
              <div className="h-full rounded-full bg-accent" style={{ width: r.b }} />
            </div>
          </div>
        ))}
      </div>
    </Frame>
  )
}

function SlamSketch() {
  return (
    <Frame label="slam-view">
      <svg viewBox="0 0 200 110" className="w-full">
        <rect x="10" y="10" width="180" height="90" rx="6" fill="none" stroke="var(--border-strong)" strokeDasharray="4 3" />
        <path d="M20 90 L60 70 L70 40 L120 35 L150 55 L180 50" fill="none" stroke="var(--accent)" strokeWidth="2" />
        <circle cx="20" cy="90" r="4" fill="var(--accent)" />
        <circle cx="180" cy="50" r="4" fill="none" stroke="var(--accent)" strokeWidth="2" />
        {[
          [95, 60], [105, 66], [88, 48], [130, 70], [70, 62], [140, 42],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.2" fill="var(--warn)" opacity="0.85" />
        ))}
        <circle cx="105" cy="55" r="16" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
        <circle cx="105" cy="55" r="26" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.2" />
      </svg>
    </Frame>
  )
}

function PipelineSketch() {
  const stages = ['build', 'tag', 'deploy']
  return (
    <Frame label="deploy-pipeline">
      <div className="flex items-center gap-1">
        {stages.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-1">
            <div className="flex-1 rounded-lg border border-border bg-surface px-2 py-2 text-center">
              <div className="mono text-[10px] font-semibold text-accentink">{s}</div>
              <div className="mono mt-0.5 text-[9px] text-ok">{i < 2 ? '✓ done' : '● running'}</div>
            </div>
            {i < stages.length - 1 && <div className="h-px w-2 bg-accent" />}
          </div>
        ))}
      </div>
    </Frame>
  )
}

