import { User } from "lucide-react";
import { ABOUT, PROFILE_PHOTO, QUICK_FACTS } from "../data/about";

export default function AboutSection() {
  const extras = [
    { title: "My Journey", text: ABOUT.journey },
    { title: "What I Enjoy Building", text: ABOUT.enjoy },
    { title: "Beyond Code", text: ABOUT.beyondCode },
  ].filter((item) => item.text);

  return (
    <section id="about-me" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              know me
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-5 text-zinc-300 leading-relaxed text-base sm:text-lg">
            <p>{ABOUT.intro}</p>
            <p>{ABOUT.build}</p>
            <p>{ABOUT.learning}</p>

            {extras.map((item) => (
              <div key={item.title} className="pt-2">
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {PROFILE_PHOTO && (
              <img
                src={PROFILE_PHOTO}
                alt="Mahbub Sifat"
                className="w-full max-w-xs mx-auto rounded-2xl border border-white/10 object-cover aspect-square"
              />
            )}
            <div className="rounded-2xl bg-zinc-900/60 border border-white/10 p-5 space-y-3">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label}>
                  <p className="text-[11px] uppercase tracking-widest text-cyan-400 font-semibold">
                    {fact.label}
                  </p>
                  <p className="text-sm text-zinc-200">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}