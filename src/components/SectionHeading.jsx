// সব section-এর heading এক ধাঁচে রাখার জন্য।
export default function SectionHeading({ icon: Icon, badge, title, accent, children }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-400">
        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
        {badge}
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          {accent}
        </span>
      </h2>
      {children && <p className="mt-4 text-base text-zinc-400 sm:text-lg">{children}</p>}
    </div>
  );
}
