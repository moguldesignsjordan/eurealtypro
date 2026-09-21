import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { CONTACT, LEGAL_DISCLAIMER, NAV } from "../data/site"
import mogulLogo from "../assets/logos/mogul-logo.webp"
import { ArrowIcon } from "./ui"

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="text-sm font-semibold leading-tight tracking-tight">
        Elite Urban Realty
        <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-navy/50">
          Professionals
        </span>
      </span>
    </Link>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-navy ${
                      isActive ? "text-navy" : "text-navy/70"
                    }`
                  }
                >
                  {item.label}
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </NavLink>
                <div className="invisible absolute left-1/2 top-full z-10 w-48 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-navy/10 bg-white py-1.5 shadow-lg">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.to}
                        className="block px-4 py-2.5 text-sm text-navy/70 transition-colors hover:bg-shell hover:text-navy"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-navy ${
                    isActive ? "text-navy" : "text-navy/70"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Let's Talk
            <ArrowIcon />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center rounded-lg border border-navy/15 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path
                d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-navy/10 bg-white px-5 pb-5 lg:hidden">
          {NAV.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={closeMenu}
                className="block border-b border-navy/5 py-3.5 text-sm font-medium text-navy/80"
              >
                {item.label}
              </NavLink>
              {item.children?.map((child) => (
                <NavLink
                  key={child.label}
                  to={child.to}
                  onClick={closeMenu}
                  className="block border-b border-navy/5 py-3 pl-5 text-sm text-navy/60"
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
          >
            Let's Talk
            <ArrowIcon />
          </Link>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer id="contact" className="border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy/60">
              Investment, management, and development for buyers, sellers, agents, and investors
              across Detroit and Metro Michigan.
            </p>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a href={CONTACT.phoneHref} className="text-navy/70 hover:text-navy">
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`} className="text-navy/70 hover:text-navy">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="text-navy/70">
                  {CONTACT.addressLine1}, {CONTACT.addressLine2}
                </dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/45">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-navy/65 transition-colors hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/45">
              Newsletter
            </p>
            <p className="mt-4 text-sm text-navy/65">Subscribe for weekly updates.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-navy/15 focus-within:border-navy/40"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-navy/35"
              />
              <button type="submit" className="shrink-0 bg-navy px-5 text-sm font-semibold text-white">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-navy/10 pt-8">
          <p className="text-xs leading-relaxed text-navy/45">
            {LEGAL_DISCLAIMER} If you have a disability that is preventing you from experiencing
            this website, call{" "}
            <a href={CONTACT.phoneHref} className="underline">
              {CONTACT.phone}
            </a>
            .
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-navy/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 EUREALTYPROLLC. All Rights Reserved.</p>
            <a
              href="https://moguldesignagency.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-navy/70"
            >
              Made with <span aria-hidden="true">♥</span> by
              <img src={mogulLogo} alt="Mogul Design Agency" className="h-4 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-navy antialiased">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
