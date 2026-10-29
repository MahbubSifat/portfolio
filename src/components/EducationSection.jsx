import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Software Engineering",
    school: "University of Frontier Technology, Bangladesh (UFTB)",
    period: "Session 2023–24",
    status: "Currently in Level 2, Term 1",
    description:
      "Studying core software engineering subjects alongside hands-on web development projects.",
    coursework: [
      "Object-Oriented Programming (Java)",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Requirement Analysis & Engineering",
      "Android & Web Application Development",
      "Operating Systems",
    ],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Education
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Educational{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Background
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl bg-zinc-900/70 border border-white/10 p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                  {item.status}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">{item.degree}</h3>
              <p className="text-sm font-semibold text-cyan-400 mt-1">{item.school}</p>
              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{item.description}</p>

              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Coursework includes</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}