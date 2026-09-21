import { PURCHASE_STEPS } from "../data/site"
import { ArrowIcon, Eyebrow, PageHero } from "../components/ui"
import eliteHomebuyer from "../assets/photos/elite-homebuyer.jpg"

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Homebuyers"
        title={
          <>
            Buying or refinancing is a big deal. <span className="text-lime">Let's do it right!</span>
          </>
        }
        lead="Start your journey feeling confident and prepared. From creating a budget to signing your name on the dotted line, here's what you need to know about the home-buying process."
      />

      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-navy/10">
          <img
            src={eliteHomebuyer}
            alt="A family relaxing together in the living room of their new Detroit home"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Eyebrow>Purchase Process</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Six steps from first conversation to closing
        </h2>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {PURCHASE_STEPS.map((step) => (
            <li key={step.n} className="flex flex-col bg-white p-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/40">
                Step {step.n}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{step.title}</h3>
              {step.body && (
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{step.body}</p>
              )}
              <span className="mt-6 h-px w-8 bg-lime" />
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-shell py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="overflow-hidden rounded-2xl bg-navy">
            <div className="grid gap-8 p-8 text-white md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
                  Mortgage Program
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Try Our <span className="text-lime">0% Down</span> Mortgage Program
                </h2>
                <p className="mt-5 max-w-lg leading-relaxed text-white/70">
                  Purchase your first home or investment property with just $0 down at closing.
                </p>
              </div>
              <div className="md:justify-self-end">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
