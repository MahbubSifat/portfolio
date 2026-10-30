import { useState } from "react";

// Browser-window ফ্রেমে screenshot। ছবি না থাকলে project-এর নিজস্ব রঙে ফ্রেম দেখায়।
export default function ProjectPreview({ project, className = "" }) {
  const [failed, setFailed] = useState(false);
  const host = new URL(project.live).host;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-zinc-900 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md bg-black/50 px-3 py-1 text-[11px] text-zinc-400">
          {host}
        </div>
      </div>

      <div className="relative aspect-[16/10] bg-zinc-950">
        {!failed ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div
            className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br ${project.accent}`}
          >
            <span className="text-5xl font-extrabold tracking-tight text-white/90 sm:text-6xl">
              {project.monogram}
            </span>
            <span className="mt-2 text-xs text-zinc-300">{project.title}</span>
          </div>
        )}
      </div>
    </div>
  );
}
