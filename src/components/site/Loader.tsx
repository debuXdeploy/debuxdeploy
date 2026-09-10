import logo from "@/assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 2200;
    const start = Date.now();
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / duration);
      setProgress(Math.round(t * 100));
      if (t >= 1) {
        clearInterval(id);
        setTimeout(() => setVisible(false), 380);
        setTimeout(onDone, 900);
      }
    }, 40);
    const safety = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 5000);
    return () => {
      clearInterval(id);
      clearTimeout(safety);
    };
  }, [onDone]);


  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background noise"
          exit={{ opacity: 0, filter: "blur(14px)", scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <motion.div
            className="absolute inset-0 grid-bg"
            initial={{ opacity: 0, scale: 1.25, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_60%)]" />

          <div className="relative flex flex-col items-center gap-8 px-6">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex items-center gap-4"
            >
              <span className="relative grid h-14 place-items-center rounded-xl border border-border bg-card px-4">
                <span className="absolute inset-0 rounded-xl bg-white/5 blur-md" />
                <img src={logo} alt="debuXdeploy logo" width={856} height={425} className="relative h-6 w-auto object-contain" />
              </span>
              <span className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                debuXdeploy
              </span>
            </motion.div>

            <div className="relative h-px w-[min(70vw,26rem)] overflow-hidden bg-border">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white"
                style={{ width: `${progress}%`, boxShadow: "0 0 18px 2px rgba(255,255,255,0.8)" }}
              />
            </div>

            <div className="flex w-[min(70vw,26rem)] items-center justify-between text-xs tracking-[0.3em] text-muted-foreground">
              <span>LOADING</span>
              <span className="font-display text-foreground tabular-nums">
                {String(Math.floor(progress)).padStart(3, "0")}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
