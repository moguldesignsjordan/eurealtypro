import { Link } from "react-router-dom"
import { ArrowIcon } from "../components/ui"

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 text-center md:px-8 md:py-36">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/45">Error 404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-navy/65">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white"
      >
        Back to home
        <ArrowIcon />
      </Link>
    </section>
  )
}
