import type { ReactNode } from "react"

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">
      <span className="h-px w-8 bg-lime" />
      {children}
    </p>
  )
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`h-4 w-4 ${className}`}>
      <path
        d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: ReactNode
  lead?: string
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="pointer-events-none absolute -right-32 -top-40 h-[26rem] w-[26rem] rounded-full bg-lime/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
          <span className="h-px w-8 bg-lime" />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl leading-relaxed text-white/70">{lead}</p>}
      </div>
    </section>
  )
}
