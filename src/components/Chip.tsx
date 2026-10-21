export function Chip({ label }: { label: string }) {
  return (
    <span className="chip-hover inline-flex items-center rounded-full border border-border bg-surface2 px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted">
      {label}
    </span>
  )
}
