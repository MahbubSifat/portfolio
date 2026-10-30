import { useState } from "react";
import { motion, useTransform } from "motion/react";
import { FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./Icons";
import { LINKS, RESUME_URL, NAME } from "../data/links";

// Resume ready না হলেও button থাকে (PDF-এর নিয়ম); চাপলে ছোট একটা বার্তা দেখায়।
function ResumeButton({ className }) {
  const [notice, setNotice] = useState(false);

  const handleClick = (e) => {
    if (RESUME_URL) return;
    e.preventDefault();
    setNotice(true);
    setTimeout(() => setNotice(false), 2500);
  };

  return (
    <span className="relative inline-flex">
      <a
        href={RESUME_URL || "#"}
        target={RESUME_URL ? "_blank" : undefined}
        rel="noreferrer"
        onClick={handleClick}
        className={className}
      >
        <FileText className="h-4 w-4" />
        <span>View Resume</span>
      </a>
      {notice && (
        <span
          role="status"
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-200 shadow-lg"
        >
          Resume coming soon
        </span>
      )}
    </span>
  );
}

export default function HeroContent({ progress }) {
  const titleOpacity = useTransform(progress, [0, 0.18], [1, 0]);
  const titleY = useTransform(progress, [0, 0.18], [0, -80]);
  const titleScale = useTransform(progress, [0, 0.18], [1, 0.92]);

  // Intro fade হয়ে গেলে invisible links যেন click করা না যায়।
  const introPointer = useTransform(progress, (v) => (v < 0.12 ? "auto" : "none"));

  const scrollPromptOpacity = useTransform(progress, [0, 0.08], [1, 0]);

  const ctaOpacity = useTransform(progress, [0.75, 0.92], [0, 1]);
  const ctaY = useTransform(progress, [0.75, 0.92], [30, 0]);
  const ctaPointer = useTransform(progress, (v) => (v > 0.8 ? "auto" : "none"));

  const socials = [
    { label: "GitHub", href: LINKS.github, Icon: GithubIcon },
    { label: "LinkedIn", href: LINKS.linkedin, Icon: LinkedinIcon },
    { label: "Facebook", href: LINKS.facebook, Icon: FacebookIcon },
    { label: "Email", href: LINKS.email ? `mailto:${LINKS.email}` : null, Icon: Mail },
  ].filter((social) => social.href);

  const chipClass =
    "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-300";

  const primaryButton =
    "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-7 py-3 font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95";

  const glassButton =
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-medium text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 active:scale-95";

  return (
    <>
      {/* Main introduction */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end px-4 pb-24 text-center md:items-start md:justify-center md:px-16 md:pb-0 md:text-left lg:px-24"
      >
        {/* মুখের ওপর লেখা না পড়ে, তাই লেখার পেছনে হালকা ছায়া: মোবাইলে নিচে, বড় screen-এ বাঁ দিকে */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/50 md:to-transparent" />

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-1.5 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-medium tracking-wide text-cyan-300 sm:text-sm">
            Full Stack Web Developer
          </span>
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {NAME.replace(" Sifat", "")}{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Sifat
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-zinc-200 sm:text-lg md:text-xl">
          Software Engineering student at the University of Frontier Technology, Bangladesh,
          focused on building modern web applications with React and Next.js.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
          {["React", "Next.js", "JavaScript", "TypeScript"].map((tech) => (
            <span key={tech} className={chipClass}>
              {tech}
            </span>
          ))}
        </div>

        <motion.div
          style={{ pointerEvents: introPointer }}
          className="mt-7 flex flex-col items-center gap-4 sm:flex-row"
        >
          <ResumeButton className={primaryButton} />

          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                aria-label={label}
                title={label}
                className="rounded-full border border-white/15 bg-white/10 p-3 text-zinc-200 backdrop-blur-md transition hover:scale-110 hover:bg-white/20 hover:text-cyan-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll prompt */}
      <motion.div
        style={{ opacity: scrollPromptOpacity }}
        className="pointer-events-none absolute bottom-10 z-10 hidden w-full flex-col items-center justify-center md:flex"
      >
        <span className="mb-2 text-[11px] font-medium uppercase tracking-widest text-zinc-400">
          Scroll to explore
        </span>

        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1">
          <div className="h-2.5 w-1.5 animate-bounce rounded-full bg-cyan-400" />
        </div>
      </motion.div>

      {/* Calls to action (end of hero) */}
      <motion.div
        style={{ opacity: ctaOpacity, y: ctaY, pointerEvents: ctaPointer }}
        className="absolute bottom-16 z-10 flex w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row"
      >
        <a href="#projects" className={`${primaryButton} py-3.5`}>
          View Projects
        </a>

        <ResumeButton className={glassButton} />

        <a href="#contact" className={glassButton}>
          Contact Me
        </a>
      </motion.div>
    </>
  );
}
