import { BOOKING_URL } from "@/lib/config";
import { ArrowUpRight, Phone } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/70 px-6 py-20 text-center backdrop-blur-xl sm:px-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-[110px]" />
        <div aria-hidden className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              <span className="text-gradient">Let's Build Something Great</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 font-display text-xl font-semibold sm:text-2xl">
              Ready to discuss your project?
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We believe meaningful conversations build exceptional products. Schedule a call to
              discuss your ideas, requirements, and goals.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-10 flex justify-center">
              <MagneticButton href={BOOKING_URL}>
                <Phone className="h-4 w-4" /> Book a Call
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-6 text-xs tracking-wide text-muted-foreground">
              Call discussions only. Please schedule a meeting to get started.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
