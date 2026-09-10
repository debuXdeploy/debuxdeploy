import { BOOKING_URL } from "@/lib/config";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 34, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32 pb-24 sm:px-8">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/[0.05] animate-spin-slow" />
        <div className="absolute left-1/2 top-1/3 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[120px] animate-float-slow" />
        <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]" />
          Software Engineering Studio
        </motion.span>

        <motion.h1
          variants={item}
          className="mx-auto mt-8 max-w-4xl text-[2.6rem] font-bold leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.2rem]"
        >
          <span className="text-gradient">Building Modern Digital Experiences</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          We design and develop scalable web applications, AI-powered solutions, enterprise
          software, and modern digital products with a strong focus on performance, security, and
          user experience.
        </motion.p>

        <motion.div variants={item} className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="#projects">
            View Projects <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href={BOOKING_URL} variant="ghost">
            <Phone className="h-4 w-4" /> Book a Call
          </MagneticButton>
        </motion.div>

        <motion.dl
          variants={item}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
        >
          {[
            ["40+", "Products shipped"],
            ["6+", "Years combined"],
            ["99.9%", "Uptime delivered"],
            ["3", "Senior engineers"],
          ].map(([value, label]) => (
            <div key={label} className="bg-surface/70 px-5 py-6 backdrop-blur">
              <dt className="font-display text-2xl font-bold sm:text-3xl">{value}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
