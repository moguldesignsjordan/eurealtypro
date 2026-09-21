import { REVIEWS } from "../data/site"
import { ArrowIcon, PageHero } from "../components/ui"

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Client Reviews"
        title={
          <>
            What our clients say about{" "}
            <span className="text-lime">working with Elite Urban</span>
          </>
        }
      />

      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <div className="space-y-6">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-navy/10 bg-white p-8 md:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-semibold tracking-tight">{review.headline}</h2>
                <span className="rounded-full bg-lime/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy/70">
                  {review.role}
                </span>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy/70">
                {review.body.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>

              <footer className="mt-7 flex items-center gap-4 border-t border-navy/10 pt-6">
                <img
                  src={review.image}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-sm font-semibold tracking-tight">{review.name}</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-5 rounded-2xl bg-navy p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <p className="max-w-md text-xl font-semibold leading-snug tracking-tight">
            Ready to start your own Detroit success story?
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            Book Consultation
            <ArrowIcon />
          </a>
        </div>
      </section>
    </>
  )
}
