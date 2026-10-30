import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./Icons";
import SectionLink from "./SectionLink";
import { NAV_LINKS } from "../data/nav";
import { LINKS, NAME } from "../data/links";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const socials = [
    { label: "GitHub", href: LINKS.github, Icon: GithubIcon },
    { label: "LinkedIn", href: LINKS.linkedin, Icon: LinkedinIcon },
    { label: "Facebook", href: LINKS.facebook, Icon: FacebookIcon },
    { label: "Email", href: LINKS.email && `mailto:${LINKS.email}`, Icon: Mail },
  ].filter((s) => s.href);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/5 pb-12 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 text-base font-bold text-black">
                MS
              </div>
              <span className="text-xl font-bold tracking-tight text-white">{NAME}</span>
            </div>
            <p className="mt-2 max-w-sm text-xs text-zinc-400">
              Full Stack Web Developer and Software Engineering student at the University of
              Frontier Technology, Bangladesh.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <SectionLink
                key={link.id}
                id={link.id}
                className="text-xs text-zinc-400 transition-colors hover:text-cyan-400 sm:text-sm"
              >
                {link.name}
              </SectionLink>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                aria-label={label}
                title={label}
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {currentYear} {NAME}. All rights reserved.
          </p>
          <p>Built with React, Vite, GSAP and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
