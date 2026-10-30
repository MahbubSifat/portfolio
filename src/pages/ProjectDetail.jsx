import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Lightbulb, Wrench } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import ProjectPreview from "../components/ProjectPreview";
import NotFound from "./NotFound";
import { PROJECTS, getProject } from "../data/projects";
import { NAME } from "../data/links";

function Block({ icon: Icon, title, children }) {
  return (
    <section className="mt-12">
      <h2 className="mb-5 flex items-center gap-2.5 text-xl font-bold text-white sm:text-2xl">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);

  useEffect(() => {
    if (!project) return;
    const previous = document.title;
    document.title = `${project.title} | ${NAME}`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) return <NotFound />;

  const index = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <main className="min-h-screen bg-black pb-24 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-300"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        <header className="mt-6">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            {project.type}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-300 sm:text-xl">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-3 font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95"
            >
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/20"
            >
              <GithubIcon className="h-4 w-4" />
              Source Code
            </a>
          </div>
        </header>

        <ProjectPreview project={project} className="mt-10" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div className="min-w-0">
            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">Overview</h2>
              <div className="space-y-4 leading-relaxed text-zinc-300">
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <Block icon={CheckCircle2} title="Key features">
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={Wrench} title="Challenges and solutions">
              <div className="space-y-4">
                {project.challenges.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5"
                  >
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </Block>

            <Block icon={Lightbulb} title="Future improvements">
              <ul className="space-y-3">
                {project.improvements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
              <h2 className="text-sm font-semibold text-white">Tech stack</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="mt-6 text-sm font-semibold text-white">Links</h2>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub repository
                </a>
              </div>
            </div>
          </aside>
        </div>

        <nav
          aria-label="Next project"
          className="mt-16 border-t border-white/10 pt-8"
        >
          <p className="text-xs text-zinc-500">Next project</p>
          <Link
            to={`/projects/${next.id}`}
            className="group mt-2 inline-flex items-center gap-3 text-2xl font-bold text-white transition-colors hover:text-cyan-300 sm:text-3xl"
          >
            {next.title}
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>
      </div>
    </main>
  );
}
