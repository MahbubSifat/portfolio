import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 1500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0 });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 rounded-full border border-white/15 bg-zinc-900/80 p-3 text-cyan-300 shadow-lg backdrop-blur-md transition-all hover:bg-zinc-800 hover:text-white ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
