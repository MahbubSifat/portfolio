import { Link } from "react-router-dom";
import { FolderGit2, ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import ProjectPreview from "./ProjectPreview";
import { PROJECTS } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative border-t border-white/5 bg-black py-24">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={FolderGit2} badge="Selected Work" title="Featured" accent="Projects">
          Three projects I built while learning modern web development. Open a card for the full
          case study.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-3xl border border-white/10 bg-zinc-900/60 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/40 sm:p-5"
            >
              <Link
                to={`/projects/${project.id}`}
                aria-label={`${project.title}: view details`}
                className="block"
              >
                <ProjectPreview project={project} />
              </Link>

              <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                <span className="mb-3 w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  {project.type}
                </span>

                <h3 className="text-2xl font-extrabold text-white">
                  <Link
                    to={`/projects/${project.id}`}
                    className="transition-colors hover:text-cyan-300"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-5 py-2.5 text-sm font-bold text-black transition hover:scale-105 active:scale-95"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      title="Source code"
                      className="rounded-full border border-white/10 bg-black/40 p-2.5 text-zinc-300 transition-colors hover:bg-black/80 hover:text-white"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      title="Live demo"
                      className="rounded-full border border-white/10 bg-black/40 p-2.5 text-zinc-300 transition-colors hover:bg-black/80 hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
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
