import { useState } from "react";
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    id: "dev-stack-builder",
    title: "Dev Stack Builder",
    category: "react",
    categoryLabel: "React Application",
    tagline: "A developer-focused web application",
    description:
      "A React application built with Vite, Tailwind CSS, and DaisyUI. The project is part of my practical frontend development journey.",
    features: [
      "Built with React and Vite",
      "Technology information organized in JSON data",
      "Styled using Tailwind CSS and DaisyUI",
    ],
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
    ],
    github:
      "https://github.com/MahbubSifat/dev-stack-builder",
    demo:
      "https://dev-stack-builder-eosin.vercel.app/",
    accent: "from-cyan-500/20 to-blue-500/5",
    badgeColor:
      "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  },
  {
    id: "fitlog",
    title: "Fitlog",
    category: "nextjs",
    categoryLabel: "Next.js Project",
    tagline: "A project built with Next.js",
    description:
      "A Next.js project developed as part of my practical web development learning. Explore the repository and live deployment for implementation details.",
    features: [
      "Built with Next.js",
      "Source code available on GitHub",
      "Live deployment available",
    ],
    tech: ["Next.js", "React", "JavaScript"],
    github: "https://github.com/MahbubSifat/fitlog",
    demo: "https://fitlog-two-self.vercel.app/",
    accent: "from-teal-500/20 to-emerald-500/5",
    badgeColor:
      "bg-teal-500/10 text-teal-300 border-teal-500/30",
  },
  {
    id: "bazar-dor",
    title: "Bazar Dor",
    category: "nextjs",
    categoryLabel: "Authentication Project",
    tagline: "A Next.js project featuring authentication",
    description:
      "A Next.js authentication project. Visit the source code or live deployment to explore the implementation.",
    features: [
      "Built with Next.js",
      "Authentication-focused project",
      "Source code and live deployment available",
    ],
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Authentication",
    ],
    github:
      "https://github.com/MahbubSifat/B14-A7-Bazar-Dor",
    demo:
      "https://b14-a7-bazar-dor-wemq.vercel.app/",
    accent: "from-blue-500/20 to-indigo-500/5",
    badgeColor:
      "bg-blue-500/10 text-blue-300 border-blue-500/30",
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section
      id="projects"
      className="py-24 bg-black relative border-t border-white/5"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected Work
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A selection of projects I have built while developing
            my skills in modern web development.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={filter === item.id}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === item.id
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/25 scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-3xl bg-zinc-900/60 border border-white/10 overflow-hidden backdrop-blur-sm hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300 group shadow-2xl"
            >
              <div
                className={`p-6 sm:p-8 bg-gradient-to-br ${project.accent} border-b border-white/5`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}
                  >
                    {project.categoryLabel}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      title="GitHub Repository"
                      className="p-2 rounded-full bg-black/40 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      title="Live Demo"
                      className="p-2 rounded-full bg-black/40 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-cyan-200/80 font-medium">
                  {project.tagline}
                </p>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
                <div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Project Highlights
                    </h4>

                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      View Source Code
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}