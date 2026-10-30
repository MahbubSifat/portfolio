import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, MessageCircle, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import { LINKS, PHONE, WHATSAPP, LOCATION } from "../data/links";

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-zinc-400">{label}</p>
        {children}
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard পাওয়া না গেলে mailto link-টাই কাজ করবে।
    }
  };

  const socials = [
    { label: "GitHub", href: LINKS.github, Icon: GithubIcon },
    { label: "LinkedIn", href: LINKS.linkedin, Icon: LinkedinIcon },
    { label: "Facebook", href: LINKS.facebook, Icon: FacebookIcon },
  ].filter((s) => s.href);

  const subject = encodeURIComponent("Hello from your portfolio");

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 bg-zinc-950 py-24">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={Send} badge="Contact" title="Let's" accent="talk">
          If you would like to discuss an internship, a project or a collaboration, send me an
          email and I will reply as soon as I can.
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2">
          <ContactRow icon={Mail} label="Email">
            <div className="flex items-center justify-between gap-2">
              <a
                href={`mailto:${LINKS.email}?subject=${subject}`}
                className="min-w-0 flex-1 truncate font-medium text-white hover:text-cyan-300"
              >
                {LINKS.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-cyan-400" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </>
                )}
              </button>
            </div>
          </ContactRow>

          {PHONE && (
            <ContactRow icon={Phone} label="Phone">
              <a href={`tel:${PHONE}`} className="font-medium text-white hover:text-cyan-300">
                {PHONE}
              </a>
            </ContactRow>
          )}

          {WHATSAPP && (
            <ContactRow icon={MessageCircle} label="WhatsApp">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-white hover:text-cyan-300"
              >
                Message on WhatsApp
              </a>
            </ContactRow>
          )}

          <ContactRow icon={MapPin} label="Location">
            <p className="font-medium text-white">{LOCATION}</p>
          </ContactRow>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href={`mailto:${LINKS.email}?subject=${subject}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-8 py-3.5 font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95"
          >
            <Mail className="h-4 w-4" />
            Email me
          </a>

          <div className="flex flex-wrap justify-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/10 hover:text-cyan-300"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
