import {
  Code2,
  Globe,
  Database,
  Wrench,
  Smartphone,
  BookOpen,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Dart"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Android Development"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Jenkins",
      "n8n",
      "Zapier",
      "GoHighLevel",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technical Toolkit
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My technical toolkit spans frontend and backend development,
            databases, programming languages, mobile development, and modern
            development tools. I apply these technologies through hands-on
            practice and project development.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="glass-panel group rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-2 text-sm font-medium text-gray-200 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Professional Note */}
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-center sm:flex-row sm:justify-center sm:text-left">
          <BookOpen className="h-5 w-5 shrink-0 text-cyan-400" />

          <p className="text-sm leading-6 text-gray-400">
            <span className="font-medium text-gray-200">
              Practical Approach:
            </span>{" "}
            I strengthen my technical skills through hands-on coding,
            application development, and continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
}