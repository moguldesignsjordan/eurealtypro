import { useState, type FormEvent } from "react"
import { CONTACT } from "../data/site"
import { ArrowIcon, PageHero } from "../components/ui"

type Status = "idle" | "submitting" | "success" | "error"

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s start the <span className="text-lime">conversation</span>
          </>
        }
        lead="Whether you're buying, selling, investing, or joining the team, tell us a bit about what you need and we'll follow up shortly."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 md:p-10">
            {status === "success" ? (
              <div className="py-10 text-center">
                <h2 className="text-2xl font-semibold tracking-tight">Message sent</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  Thanks for reaching out. Someone from our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-navy">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm outline-none focus:border-navy/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-navy">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm outline-none focus:border-navy/40"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-navy">
                    Phone <span className="text-navy/40">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm outline-none focus:border-navy/40"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm outline-none focus:border-navy/40"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong sending your message. Please try again, or call us
                    directly at{" "}
                    <a href={CONTACT.phoneHref} className="underline">
                      {CONTACT.phone}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <ArrowIcon />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-navy p-8 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
                Get in touch
              </p>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-white/50">Phone</dt>
                  <dd className="mt-1">
                    <a href={CONTACT.phoneHref} className="font-medium hover:text-lime">
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-white/50">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${CONTACT.email}`} className="font-medium hover:text-lime">
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-white/50">Address</dt>
                  <dd className="mt-1 font-medium">
                    {CONTACT.addressLine1}, {CONTACT.addressLine2}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
