import { useState } from "react"
import { Link } from "react-router-dom"
import { CONTACT, PARTNERS, STATS, TESTIMONIAL_EXCERPTS } from "../data/site"
import heroHome from "../assets/photos/detroit-home.jpg"
import { ArrowIcon, Eyebrow } from "../components/ui"

function QuoteIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7 text-lime">
      <path
        d="M13 8c-4.4 1.8-7 5.4-7 10v6h9v-9h-4c0-2.6 1-4.3 3.4-5.4L13 8Zm14 0c-4.4 1.8-7 5.4-7 10v6h9v-9h-4c0-2.6 1-4.3 3.4-5.4L27 8Z"
        fill="currentColor"
      />
    </svg>
  )
}

const NEIGHBORHOOD_LOTS = [
  { x: 70, y: 96, w: 46, h: 32 },
  { x: 70, y: 134, w: 46, h: 32 },
  { x: 70, y: 172, w: 46, h: 32 },
  { x: 122, y: 96, w: 46, h: 32 },
  { x: 122, y: 134, w: 46, h: 32 },
  { x: 122, y: 172, w: 46, h: 32 },
  { x: 700, y: 400, w: 44, h: 30 },
  { x: 700, y: 434, w: 44, h: 30 },
  { x: 700, y: 468, w: 44, h: 30 },
  { x: 748, y: 400, w: 44, h: 30 },
  { x: 748, y: 434, w: 44, h: 30 },
  { x: 748, y: 468, w: 44, h: 30 },
]

const SURVEY_MARKERS = [
  [112, 140],
  [420, 300],
  [772, 430],
] as const

function HeroNeighborhoodPlan() {
  return (
    <div className="pointer-events-none absolute inset-0" style={{ perspective: "1400px" }}>
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 960 640"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        style={{ transform: "rotateX(28deg) scale(1.4)", transformOrigin: "50% 15%" }}
      >
        <defs>
          <pattern id="plan-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="960" height="640" fill="url(#plan-grid)" opacity="0.05" />

        <g stroke="#fff" strokeOpacity="0.14" strokeWidth="1" fill="none">
          {NEIGHBORHOOD_LOTS.map((l, i) => (
            <rect
              key={i}
              x={l.x}
              y={l.y}
              width={l.w}
              height={l.h}
              strokeDasharray="3 3"
              className="animate-march"
            />
          ))}
        </g>

        <ellipse
          cx="480"
          cy="330"
          rx="95"
          ry="58"
          fill="none"
          stroke="var(--color-lime)"
          strokeOpacity="0.18"
          strokeDasharray="4 5"
          className="animate-march"
        />
        {[
          [-30, -10],
          [10, 15],
          [35, -18],
        ].map(([dx, dy], i) => (
          <circle key={i} cx={480 + dx} cy={330 + dy} r="3" fill="var(--color-lime)" opacity="0.2" />
        ))}

        <path
          d="M -20 300 C 140 250, 260 350, 420 300 S 660 210, 980 250"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.22"
          strokeWidth="2"
          className="animate-draw-line"
        />
        <path
          d="M 210 305 C 190 240, 165 180, 130 155"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          className="animate-draw-line"
        />
        <circle cx="112" cy="140" r="30" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.5" />
        <path
          d="M 640 270 C 690 330, 725 370, 755 410"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          className="animate-draw-line"
        />
        <circle cx="772" cy="430" r="28" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.5" />

        {SURVEY_MARKERS.map(([mx, my], i) => (
          <g key={i}>
            <circle cx={mx} cy={my} r="3" fill="var(--color-lime)" opacity="0.45" />
            <circle
              cx={mx}
              cy={my}
              r="3"
              fill="none"
              stroke="var(--color-lime)"
              strokeWidth="1"
              className="animate-marker-pulse"
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

export default function Home() {
  const [active, setActive] = useState(0)

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <HeroNeighborhoodPlan />
        <div className="pointer-events-none absolute -top-24 left-[-15%] h-[26rem] w-[36rem] rounded-full bg-lime/10 blur-[110px] animate-hero-sweep" />
        <div className="pointer-events-none absolute -bottom-32 right-[-10%] h-[22rem] w-[30rem] rounded-full bg-white/5 blur-[110px] animate-hero-drift" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
          <div className="min-w-0">
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.75rem]">
              Where Urban Real Estate Meets{" "}
              <span className="text-lime">Purpose and Possibility</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Developing a trusted network of socially conscious investors ready to fund the
              transformation of real estate acquisition and community development.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                Get Started
                <ArrowIcon />
              </a>
              <Link
                to="/about-us"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-xl font-semibold tracking-tight text-lime sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[10px] font-medium uppercase leading-snug tracking-wide text-white/55 sm:text-[11px] sm:tracking-wider">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-w-0">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10">
              <img
                src={heroHome}
                alt="A restored brick home in a Detroit neighborhood"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden w-60 rounded-xl border border-navy/10 bg-white p-5 shadow-xl lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/50">
                Serving
              </p>
              <p className="mt-1.5 text-lg font-semibold tracking-tight text-navy">
                Detroit &amp; Metro MI
              </p>
              <p className="mt-1 text-sm leading-snug text-navy/60">
                Buyers, sellers, agents, and investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-shell">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/40">
            Trusted Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {PARTNERS.map((partner) => (
              <img
                key={partner.name}
                src={partner.src}
                alt={partner.name}
                className="h-14 w-auto max-w-[9rem] object-contain opacity-80 transition duration-300 hover:opacity-100 sm:h-16"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>About Us</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              We don't just sell real estate, we empower people.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-navy/70">
              We exist to disrupt outdated systems, elevate client experiences, and create a
              thriving ecosystem where buyers, sellers, agents, and investors all win.
            </p>
            <blockquote className="rounded-xl border-l-2 border-lime bg-shell p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/45">
                Our Mission
              </p>
              <p className="mt-3 text-lg font-medium leading-relaxed tracking-tight text-navy">
                We exist to help individuals and families unlock the potential of real estate as a
                pathway to stability, wealth, and community.
              </p>
            </blockquote>
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy"
            >
              More about Elite Urban
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-shell py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Programs</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Built for every side of the deal
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="group flex flex-col rounded-2xl bg-navy p-8 text-white md:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">01</span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">Investors</h3>
              <p className="mt-4 flex-1 leading-relaxed text-white/70">
                We specialize in delivering unmatched results. Providing fast and efficient loans to
                investors in residential real estate, from ground-up construction to fix-and-flip
                and long-term rental hold.
              </p>
              <Link
                to="/investors"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lime"
              >
                Explore investor programs
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </article>

            <article className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-8 md:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/40">02</span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">Homeowners</h3>
              <p className="mt-4 flex-1 leading-relaxed text-navy/70">
                Start your journey feeling confident and prepared. From creating a budget to signing
                your name on the dotted line, here's what you need to know about the home-buying
                process.
              </p>
              <Link
                to="/programs"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy"
              >
                Start the buying process
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Ready to Make Your Move?{" "}
              <span className="text-lime">Let's Build Together.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-white/70">
              Whether you're searching for your dream home, scouting your next investment, or
              looking to be part of Detroit's comeback story Elite Urban Realty Professionals is
              here to help. Let us guide you with trusted expertise, local knowledge, and a
              commitment to your success.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              Book Consultation
              <ArrowIcon />
            </a>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">Phone</dt>
              <dd className="mt-2">
                <a href={CONTACT.phoneHref} className="text-lg font-medium tracking-tight">
                  {CONTACT.phone}
                </a>
              </dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${CONTACT.email}`} className="text-lg font-medium tracking-tight">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:col-span-2 lg:col-span-1">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">Office</dt>
              <dd className="mt-2 text-lg font-medium leading-snug tracking-tight">
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Client Feedback</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              What Our Client's Say
            </h2>
          </div>
          <div className="flex gap-2">
            {TESTIMONIAL_EXCERPTS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === active}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-8 bg-navy" : "w-4 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>
        </div>

        <figure className="mt-10 rounded-2xl border border-navy/10 bg-shell p-8 md:p-12">
          <QuoteIcon />
          <blockquote className="mt-6 text-xl font-medium leading-relaxed tracking-tight text-navy md:text-2xl">
            "{TESTIMONIAL_EXCERPTS[active].quote}"
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 border-t border-navy/10 pt-6">
            <img
              src={TESTIMONIAL_EXCERPTS[active].image}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
            <span>
              <span className="block text-sm font-semibold tracking-tight">
                {TESTIMONIAL_EXCERPTS[active].name}
              </span>
              <span className="block text-xs uppercase tracking-wider text-navy/50">
                {TESTIMONIAL_EXCERPTS[active].role}
              </span>
            </span>
          </figcaption>
        </figure>

        <Link
          to="/testimonials"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy"
        >
          Read all client reviews
          <ArrowIcon />
        </Link>
      </section>
    </>
  )
}
