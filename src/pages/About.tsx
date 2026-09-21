import { Link } from "react-router-dom"
import antoinePortrait from "../assets/photos/veterans-village.jpg"
import { ArrowIcon, Eyebrow, PageHero } from "../components/ui"

const PILLARS = [
  {
    title: "Mission",
    body: "Elite Urban Realty Professionals is dedicated to guiding clients through Detroit's dynamic real estate market with expertise, integrity, and care. We strive to create meaningful opportunities for homeowners, investors, and neighborhoods by delivering personalized service and sustainable solutions that strengthen communities.",
  },
  {
    title: "Vision",
    body: "To be Detroit's premier urban real estate firm, recognized for empowering individuals, fostering wealth-building opportunities, and revitalizing communities through ethical, impactful, and innovative real estate solutions.",
  },
  {
    title: "Values",
    body: "We exist to help individuals and families unlock the potential of real estate as a pathway to stability, wealth, and community pride while contributing to the revitalization and equitable growth of Detroit's urban neighborhoods.",
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Your Urban Real Estate Partner for{" "}
            <span className="text-lime">Growth, Equity, and Opportunity</span>
          </>
        }
        lead="At Elite Urban Realty Professionals, we are convinced real estate is more than transactions. It's transformational."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <p className="max-w-4xl text-lg leading-relaxed text-navy/70">
          Founded in Detroit, we are passionate about helping clients unlock the power of property
          ownership, investment, and community pride. With expertise in urban markets, we guide
          homeowners, investors, and developers through every step of the process with integrity,
          insight, and personalized service. Whether you're buying your first home, expanding your
          portfolio, or contributing to Detroit's revitalization, we're here to help you succeed and
          to strengthen the neighborhoods we call home.
        </p>
      </section>

      <section className="bg-shell py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-navy/10 bg-white p-8"
              >
                <span className="inline-block h-px w-8 bg-lime" />
                <h2 className="mt-5 text-xl font-semibold tracking-tight">{p.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-navy/70">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Meet Antoine M. Hayes I
            </h2>
            <div className="mt-8 aspect-[4/5] overflow-hidden rounded-2xl border border-navy/10 bg-shell">
              <img
                src={antoinePortrait}
                alt="Antoine M. Hayes I presenting community development plans"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-navy/70 lg:pt-16">
            <p>
              The Founder, Managing Member, and Associate Broker of Elite Urban Realty
              Professionals, where he leads with vision, expertise, and an unwavering commitment to
              empowering clients and revitalizing communities.
            </p>
            <p>
              With extensive experience in real estate, urban development, and public-private
              partnerships, Antoine has built a reputation for delivering strategic solutions that
              create opportunities for families, investors, and neighborhoods alike. His deep
              understanding of Detroit's unique real estate landscape allows him to guide clients
              through complex transactions with integrity and insight.
            </p>
            <p>
              Beyond his professional accomplishments, Antoine is a lifelong Detroiter, an exemplary
              father of three, a proud husband and a martial artist (Black Belt, Instructor) for
              over 20 years. These duties and disciplines have shaped his resilience, focus, and
              dedication to service. He is also the Executive Director of Caring Hands of Benjamin,
              a 501c3 non-profit organization supporting returning citizens, veterans, at-risk
              youth, single women and seniors through mentorship, affordable housing and
              educational initiatives.
            </p>
            <blockquote className="rounded-xl border-l-2 border-lime bg-shell p-6 text-navy">
              <p className="text-lg font-medium leading-relaxed tracking-tight">
                At Elite Urban Realty Professionals, Antoine's leadership reflects his belief that
                real estate is more than property, it's a pathway to stability, wealth, and stronger
                communities.
              </p>
            </blockquote>
            <Link
              to="/agents"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy"
            >
              Meet the full team
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
