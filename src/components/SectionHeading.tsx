export function SectionHeading({
  kicker,
  title,
  lede,
  id,
}: {
  kicker: string
  title: string
  lede?: string
  id?: string
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mono mb-2 text-[12px] font-medium tracking-[0.18em] text-accentink uppercase">{kicker}</p>
      <h2 id={id} className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
        {title}
      </h2>
      {lede ? <p className="mt-3 leading-relaxed text-muted">{lede}</p> : null}
    </div>
  )
}
