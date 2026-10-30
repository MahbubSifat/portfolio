import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-black px-4 pt-24 text-center">
      <div>
        <p className="text-6xl font-extrabold text-cyan-400">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">This page does not exist</h1>
        <p className="mt-2 text-zinc-400">The link may be wrong or the page may have moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-3 font-bold text-black transition hover:scale-105"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
