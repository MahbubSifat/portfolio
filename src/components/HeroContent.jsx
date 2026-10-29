import { motion, useTransform } from "motion/react";
import { FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./Icons";
import { LINKS, RESUME_URL } from "../data/links";

function ResumeButton({ className }) {
  // Resume URL না থাকলে button দেখানো হবে না।
  if (!RESUME_URL) return null;

  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <FileText className="w-4 h-4" />
      <span>View Resume</span>
    </a>
  );
}

export default function HeroContent({ progress }) {
  const titleOpacity = useTransform(progress, [0, 0.18], [1, 0]);
  const titleY = useTransform(progress, [0, 0.18], [0, -80]);
  const titleScale = useTransform(progress, [0, 0.18], [1, 0.92]);

  // Intro fade হয়ে গেলে invisible links যেন click করা না যায়।
  const introPointer = useTransform(progress, (v) =>
    v < 0.12 ? "auto" : "none"
  );

  const scrollPromptOpacity = useTransform(progress, [0, 0.08], [1, 0]);

  const ctaOpacity = useTransform(progress, [0.75, 0.92], [0, 1]);
  const ctaY = useTransform(progress, [0.75, 0.92], [30, 0]);
  const ctaPointer = useTransform(progress, (v) =>
    v > 0.8 ? "auto" : "none"
  );

  const socials = [
    { label: "GitHub", href: LINKS.github, Icon: GithubIcon },
    { label: "LinkedIn", href: LINKS.linkedin, Icon: LinkedinIcon },
    { label: "Facebook", href: LINKS.facebook, Icon: FacebookIcon },
    {
      label: "Email",
      href: LINKS.email ? `mailto:${LINKS.email}` : null,
      Icon: Mail,
    },
  ].filter((social) => social.href);

  const introClass =
    "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-300";

  const buttonClass =
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-medium text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 active:scale-95";

  return (
    <>
      {/* Main introduction */}
      <motion.div
        style={{
          opacity: titleOpacity,
          y: titleY,
          scale: titleScale,
        }}
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-1.5 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-medium tracking-wide text-cyan-300 sm:text-sm">
            Full Stack Web Developer
          </span>
        </div>

        <h1 className="max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
          Md. Mahbubul Alom{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Sifat
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-zinc-300 sm:text-xl">
          Software Engineering student at the University of Frontier
          Technology, Bangladesh, focused on building modern web applications
          with React and Next.js.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {["React", "Next.js", "JavaScript", "TypeScript"].map((tech) => (
            <span key={tech} className={introClass}>
              {tech}
            </span>
          ))}
        </div>

        <motion.div
          style={{ pointerEvents: introPointer }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          {RESUME_URL && (
            <ResumeButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-7 py-3 font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95" />
          )}

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
        className="pointer-events-none absolute bottom-10 z-10 flex w-full flex-col items-center justify-center"
      >
        <span className="mb-2 text-[11px] font-medium uppercase tracking-widest text-zinc-400">
          Scroll to explore
        </span>

        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1">
          <div className="h-2.5 w-1.5 animate-bounce rounded-full bg-cyan-400" />
        </div>
      </motion.div>

      {/* Calls to action */}
      <motion.div
        style={{
          opacity: ctaOpacity,
          y: ctaY,
          pointerEvents: ctaPointer,
        }}
        className="absolute bottom-16 z-10 flex w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-8 py-3.5 font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95"
        >
          View Projects
        </a>

        {RESUME_URL && <ResumeButton className={buttonClass} />}

        <a href="#contact" className={buttonClass}>
          Contact Me
        </a>
      </motion.div>
    </>
  );
}