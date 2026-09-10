import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";

import erp from "@/assets/proj-erp.jpg";
import ai from "@/assets/proj-ai.jpg";
import startup from "@/assets/proj-startup.jpg";
import ecom from "@/assets/proj-ecom.jpg";
import portfolio from "@/assets/proj-portfolio.jpg";
import saas from "@/assets/proj-saas.jpg";

const projects = [
  { title: "Enterprise ERP", tag: "Enterprise", image: erp, copy: "Modular resource planning suite with role-based access and real-time reporting." },
  { title: "AI Assistant", tag: "Artificial Intelligence", image: ai, copy: "Context-aware conversational assistant with retrieval and streaming responses." },
  { title: "Startup Platform", tag: "Product", image: startup, copy: "Zero-to-one product platform built for rapid iteration and scale." },
  { title: "E-Commerce Platform", tag: "Commerce", image: ecom, copy: "High-conversion storefront with headless catalog and secure checkout." },
  { title: "Portfolio Website", tag: "Brand", image: portfolio, copy: "Motion-led brand site with immersive scroll storytelling." },
  { title: "SaaS Dashboard", tag: "Analytics", image: saas, copy: "Data-dense analytics workspace with live metrics and custom views." },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ rx: (0.5 - py) * 9, ry: (px - 0.5) * 9, mx: px * 100, my: py * 100 });
  };

  return (
    <Reveal delay={(index % 3) * 0.1}>
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0, mx: 50, my: 50 })}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ transformPerspective: 1000 }}
        className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl transition-shadow duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9),0_0_40px_rgba(255,255,255,0.07)]"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(320px circle at ${tilt.mx}% ${tilt.my}%, rgba(255,255,255,0.1), transparent 70%)` }}
        />
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl border border-white/0 transition-colors duration-500 group-hover:border-white/25" />

        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            loading="lazy"
            width={1200}
            height={800}
            className="h-full w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        </div>

        <div className="relative z-10 p-6">
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            {project.tag}
          </span>
          <h3 className="mt-3 flex items-center justify-between gap-3 text-xl font-bold">
            <span className="truncate">{project.title}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.copy}</p>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionHeading
        eyebrow="Selected work"
        title="What We Can Build"
        description="A selection of platforms we've architected, engineered and shipped — from enterprise systems to AI products."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
