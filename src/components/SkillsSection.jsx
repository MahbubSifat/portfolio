import { Code2, Globe, Database, Wrench, Smartphone, Cpu } from "lucide-react";
import SectionHeading from "./SectionHeading";

// core = আমার project-এ ব্যবহার করেছি, learning = এখন শিখছি, explored = কোর্সে বা পরীক্ষামূলক পড়েছি।
// কোনো skill-এর স্তর ঠিক না লাগলে শুধু সেই লাইনের level বদলাও।
const LEVELS = {
  core: {
    label: "Used in my projects",
    chip: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    dot: "bg-cyan-400",
  },
  learning: {
    label: "Currently learning",
    chip: "border-amber-400/30 bg-amber-400/10 text-amber-100",
    dot: "bg-amber-400",
  },
  explored: {
    label: "Studied or explored",
    chip: "border-white/10 bg-white/[0.04] text-zinc-400",
    dot: "bg-zinc-500",
  },
};

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "HTML5", level: "core" },
      { name: "CSS3", level: "core" },
      { name: "React", level: "core" },
      { name: "Next.js", level: "core" },
      { name: "Tailwind CSS", level: "core" },
      { name: "DaisyUI", level: "core" },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: "core" },
      { name: "BetterAuth", level: "core" },
      { name: "MySQL", level: "explored" },
      { name: "Firebase", level: "explored" },
      { name: "Node.js", level: "explored" },
      { name: "Express.js", level: "explored" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "Java", level: "explored" },
      { name: "C", level: "explored" },
      { name: "C++", level: "explored" },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: "learning" },
      { name: "Dart", level: "learning" },
      { name: "Android Development", level: "learning" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", level: "core" },
      { name: "GitHub", level: "core" },
      { name: "Vercel", level: "core" },
      { name: "VS Code", level: "core" },
      { name: "Linux", level: "explored" },
      { name: "Jenkins", level: "explored" },
      { name: "n8n", level: "explored" },
      { name: "Zapier", level: "explored" },
      { name: "GoHighLevel", level: "explored" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading icon={Cpu} badge="Technical Toolkit" title="Skills &" accent="Technologies">
          The tools I use to build my projects, and the ones I have studied or am still learning.
        </SectionHeading>

        {/* Legend */}
        <div className="-mt-6 mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-400">
          {Object.values(LEVELS).map((level) => (
            <span key={level.label} className="inline-flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${level.dot}`} />
              {level.label}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article
                key={group.title}
                className="glass-panel rounded-2xl border border-white/10 p-6 transition-colors duration-300 hover:border-cyan-400/30"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                    <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      title={LEVELS[skill.level].label}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium ${LEVELS[skill.level].chip}`}
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
