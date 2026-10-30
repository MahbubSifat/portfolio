import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import SectionLink from "./SectionLink";
import { NAV_LINKS } from "../data/nav";
import { LINKS, NAME } from "../data/links";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Scroll করলে navbar-এর ব্যাকগ্রাউন্ড আর এখন কোন section-এ আছি সেটা ঠিক করে
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const line = window.innerHeight * 0.35;
      let current = "hero";
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;
  const closeMenu = () => setMobileMenuOpen(false);

  const linkClass = (id) =>
    `px-3 lg:px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all ${
      isHome && active === id
        ? "bg-cyan-400/15 text-cyan-300"
        : "text-zinc-300 hover:text-cyan-400 hover:bg-white/5"
    }`;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-white/10 bg-black/75 py-3 shadow-lg shadow-black/50 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <SectionLink id="hero" onClick={closeMenu} className="group flex min-w-0 items-center gap-3 text-white">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 text-lg font-bold text-black shadow-md shadow-cyan-500/20 transition-transform group-hover:scale-105">
              MS
            </div>
            <div className="flex min-w-0 flex-col md:hidden lg:flex">
              <span className="truncate text-sm font-bold tracking-wide text-white transition-colors group-hover:text-cyan-400">
                {NAME}
              </span>
              <span className="text-[11px] text-zinc-400">Software Engineering Student</span>
            </div>
          </SectionLink>

          {/* Desktop navigation */}
          <nav
            aria-label="Main"
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md md:flex lg:px-4"
          >
            {NAV_LINKS.map((link) => (
              <SectionLink
                key={link.id}
                id={link.id}
                className={linkClass(link.id)}
                aria-current={isHome && active === link.id ? "true" : undefined}
              >
                {link.name}
              </SectionLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              title="GitHub profile"
              aria-label="GitHub profile"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <SectionLink
              id="contact"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-4 py-2 text-xs font-semibold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 lg:text-sm"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4" />
            </SectionLink>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="GitHub profile"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="mt-3 space-y-3 border-b border-white/10 bg-zinc-950/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <SectionLink
                key={link.id}
                id={link.id}
                onClick={closeMenu}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
              >
                {link.name}
              </SectionLink>
            ))}
          </nav>

          <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
            <SectionLink
              id="contact"
              onClick={closeMenu}
              className="w-full rounded-xl bg-cyan-400 py-2.5 text-center text-sm font-semibold text-black transition-colors hover:bg-cyan-300"
            >
              Contact Me
            </SectionLink>
            <a
              href={`mailto:${LINKS.email}`}
              className="flex w-full items-center justify-center gap-1.5 py-2 text-xs text-zinc-400 hover:text-white"
            >
              <Mail className="h-4 w-4" /> {LINKS.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
