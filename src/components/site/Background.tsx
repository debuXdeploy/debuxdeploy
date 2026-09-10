import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Background() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.3 });
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden noise">
      <div className="absolute inset-0 grid-bg animate-grid-pan opacity-80" />
      <div
        className="absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${pos.x * 100}% ${pos.y * 100}%, rgba(255,255,255,0.07), transparent 65%)`,
        }}
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 left-1/4 h-[42rem] w-[42rem] rounded-full bg-white/[0.05] blur-[140px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full bg-white/[0.035] blur-[150px]"
      />
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-px w-px rounded-full bg-white/50"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, boxShadow: "0 0 8px 2px rgba(255,255,255,0.35)" }}
          animate={{ y: [0, -60, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 10 + (i % 5) * 3, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#0A0A0A_100%)]" />
    </div>
  );
}
