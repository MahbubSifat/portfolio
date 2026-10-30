import {
  GraduationCap,
  Calendar,
  Code2,
  BookOpen,
  ArrowDown,
} from "lucide-react";

export default function ExperienceSection() {
  const journey = [
    {
      role: "Software Engineering Student",
      company: "University of Frontier Technology, Bangladesh",
      period: "Currently studying",
      badge: "Education",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      description:
        "Studying Software Engineering and developing a foundation in programming, software development, databases, and related computing concepts.",
      highlights: [
        "Building programming and software engineering fundamentals.",
        "Learning through university coursework and practical assignments.",
        "Working to strengthen problem-solving and technical skills.",
      ],
      skills: ["Software Engineering", "Programming", "Databases"],
      icon: GraduationCap,
    },
    {
      role: "Full Stack Web Development",
      company: "Personal Projects & Practical Learning",
      period: "Ongoing",
      badge: "Project-Based Learning",
      badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
      description:
        "Developing practical web development skills through personal projects using React and Next.js, with a focus on creating useful and responsive web applications.",
      highlights: [
        "Built Dev Stack Builder using React and related frontend tools.",
        "Worked on Next.js projects including Fitlog and Bazar Dor.",
        "Using GitHub to maintain and share project source code.",
      ],
      skills: ["React", "Next.js", "JavaScript", "Git", "GitHub"],
      icon: Code2,
    },
    {
      role: "Expanding My Technical Skills",
      company: "Self-Directed Learning",
      period: "Ongoing",
      badge: "Continuous Learning",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      description:
        "Continuing to explore technologies beyond web development while improving my understanding of programming and practical software development.",
      highlights: [
        "Exploring Flutter and Dart for application development.",
        "Strengthening my understanding of programming fundamentals.",
        "Learning new tools gradually through practice and projects.",
      ],
      skills: ["Dart", "Flutter", "Programming Fundamentals"],
      icon: BookOpen,
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-black py-24">
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-400">
            <GraduationCap className="h-3.5 w-3.5" />
            My Journey
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Education &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>

          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            My academic background, hands-on projects, and ongoing journey
            toward becoming a stronger software developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-8 before:hidden before:w-0.5 before:-translate-x-1/2 before:bg-white/10 md:before:left-1/2 md:before:block">
          {journey.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.role}
                className={`flex flex-col items-start gap-8 md:flex-row ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <article className="group rounded-2xl border border-white/10 bg-zinc-900/70 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-900/90 sm:p-8">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-2xl">
                          {item.role}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-cyan-400">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-zinc-300">
                      {item.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-2 text-xs text-zinc-400 sm:text-sm"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>

                {/* Timeline marker */}
                <div className="relative mt-8 hidden w-16 shrink-0 items-center justify-center md:flex">
                  <div className="h-5 w-5 rounded-full border-4 border-black bg-cyan-400 shadow-lg shadow-cyan-500/50" />
                </div>

                {/* Opposite-side spacing */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>

        {/* Transition to projects */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-xs font-semibold text-zinc-300 shadow-lg transition-all hover:border-cyan-400/40 hover:bg-white/10 hover:text-white sm:text-sm"
          >
            <span>More About Me</span>
            <ArrowDown className="h-4 w-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}