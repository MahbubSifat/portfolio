import { motion, useTransform } from "motion/react";
import { ArrowDown, Code2, Rocket } from "lucide-react";

export default function AboutContent({ progress }) {
  // First slide: Philosophy & Mission
  const headOpacity = useTransform(progress, [0, 0.12, 0.35], [0, 1, 0]);
  const headY = useTransform(progress, [0, 0.12, 0.35], [40, 0, -20]);

  // Second slide: Experience & Roles
  const textOpacity = useTransform(progress, [0.38, 0.52, 0.78], [0, 1, 0]);
  const textY = useTransform(progress, [0.38, 0.52, 0.78], [40, 0, -20]);

  // Final slide: Quick highlights & CTA
  const endOpacity = useTransform(progress, [0.82, 0.94], [0, 1]);
  const endY = useTransform(progress, [0.82, 0.94], [30, 0]);

  return (
    <>
      {/* লেখা পড়া সহজ করার জন্য বাঁ দিকে আর নিচে হালকা ছায়া */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent md:via-black/30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />

      {/* Slide 1: Mission Headline */}
      <motion.div
        style={{ opacity: headOpacity, y: headY }}
        className="absolute left-6 md:left-16 lg:left-24 top-1/4 z-10 max-w-2xl pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-3">
          <Code2 className="w-3.5 h-3.5" />
          About Me
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          I turn what I study into working web apps.
        </h2>
        <p className="mt-4 text-base sm:text-xl text-zinc-300 font-light">
          A Software Engineering student growing into full stack web development.
        </p>
      </motion.div>

      {/* Slide 2: Engineer & Educator Narrative */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="absolute left-6 md:left-16 lg:left-24 top-1/4 z-10 max-w-2xl pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-semibold mb-3">
          <Rocket className="w-3.5 h-3.5" />
          Software Engineering Student
        </div>
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
          Full stack web development, one project at a time.
        </h3>
        <p className="mt-4 text-sm sm:text-lg text-zinc-300 leading-relaxed">
          I study Software Engineering at UFTB and build web apps with React and Next.js. I'm also learning Flutter to understand mobile development.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-400">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">Full Stack Direction</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">React & Next.js</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">Learning Flutter</span>
        </div>
      </motion.div>

      {/* Slide 3: Transition to Details */}
      <motion.div
        style={{ opacity: endOpacity, y: endY }}
        className="absolute bottom-16 z-10 flex flex-col items-center justify-center w-full px-4"
      >
        <div className="text-center mb-5">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">
            Dive Deeper
          </p>
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            Explore Skills & Featured Projects
          </h4>
        </div>
        <a
          href="#skills"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-3.5 font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95"
        >
          <span>Explore Skills</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </>
  );
}