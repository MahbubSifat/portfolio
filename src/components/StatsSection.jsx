// import { Layers, Users, Code, Sparkles } from "lucide-react";

// export default function StatsSection() {
//   const stats = [
//     {
//       icon: Layers,
//       value: "Multi-Tenant",
//       label: "SaaS Architecture Specialist",
//       desc: "Isolated data, scalable roles & robust cloud systems",
//     },
//     {
//       icon: Code,
//       value: "10+",
//       label: "Full-Stack Web Projects",
//       desc: "Production applications built with React & modern stacks",
//     },
//     {
//       icon: Users,
//       value: "50+",
//       label: "Developers Mentored",
//       desc: "Live conceptual sessions & hands-on code workshops",
//     },
//     {
//       icon: Sparkles,
//       value: "100%",
//       label: "Responsive & Performant",
//       desc: "Smooth animations, accessible UI & modern code standards",
//     },
//   ];

//   return (
//     <section className="relative z-20 py-16 bg-zinc-950 border-t border-b border-white/5">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <div
//                 key={i}
//                 className="relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-white/10 p-6 transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-900/90 group"
//               >
//                 <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
//                 <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
//                   <Icon className="w-6 h-6" />
//                 </div>
//                 <div className="text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm font-semibold text-zinc-200 mt-1">
//                   {stat.label}
//                 </div>
//                 <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
//                   {stat.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
