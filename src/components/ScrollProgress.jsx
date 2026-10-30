import { motion, useScroll, useSpring } from "motion/react";

// Page-এর একদম উপরে সরু progress রেখা।
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.2 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
    />
  );
}
