import { Link } from "react-router-dom"
import { TEAM } from "../data/site"
import { ArrowIcon, PageHero } from "../components/ui"

export default function Agents() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Together, we create solutions that inspire, empower, and drive results."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:max-w-4xl">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-navy/10 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden bg-shell">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">
                  {member.title}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">{member.name}</h2>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-5 rounded-2xl bg-navy p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <p className="max-w-lg text-xl font-semibold leading-snug tracking-tight">
            Want to work with our team?
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            Let's Talk
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  )
}
