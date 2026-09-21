import { useState } from "react"
import { INVESTOR_DISCLAIMER, INVESTOR_FAQS, INVESTOR_TIERS } from "../data/site"
import { ArrowIcon, Eyebrow, PageHero } from "../components/ui"

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-navy/10">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="text-base font-medium tracking-tight text-navy">{q}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-navy/50 transition-transform ${open ? "rotate-45" : ""}`}
          >
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      </h3>
      {open && <p className="pb-6 pr-10 text-sm leading-relaxed text-navy/70">{a}</p>}
    </div>
  )
}

export default function Investors() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title={
          <>
            Unique opportunities for{" "}
            <span className="text-lime">two distinct types of investors</span>
          </>
        }
        lead="At Elite Urban Realty Professionals, we offer unique opportunities for two distinct types of investors to participate in transforming Detroit's urban landscape."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-6 lg:grid-cols-2">
          {INVESTOR_TIERS.map((tier, i) => (
            <article
              key={tier.name}
              className={`flex flex-col rounded-2xl p-8 md:p-10 ${
                i === 0 ? "bg-navy text-white" : "border border-navy/10 bg-white"
              }`}
            >
              <span
                className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                  i === 0 ? "text-lime" : "text-navy/40"
                }`}
              >
                Tier {i + 1}
              </span>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">{tier.name}</h2>
              <p
                className={`mt-4 leading-relaxed ${i === 0 ? "text-white/70" : "text-navy/70"}`}
              >
                {tier.intro}
              </p>

              <dl
                className={`mt-8 space-y-4 border-t pt-6 text-sm ${
                  i === 0 ? "border-white/15" : "border-navy/10"
                }`}
              >
                {tier.specs.map((spec) => (
                  <div key={spec.k} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                    <dt
                      className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                        i === 0 ? "text-lime" : "text-navy/45"
                      }`}
                    >
                      {spec.k}
                    </dt>
                    <dd className={i === 0 ? "text-white/75" : "text-navy/70"}>{spec.v}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#contact"
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  i === 0 ? "bg-lime text-navy" : "bg-navy text-white"
                }`}
              >
                Schedule Consultation
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-shell py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            {INVESTOR_FAQS.map((faq) => (
              <Faq key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <p className="rounded-xl border border-navy/10 bg-white p-6 text-xs leading-relaxed text-navy/55">
          {INVESTOR_DISCLAIMER}
        </p>
      </section>
    </>
  )
}
