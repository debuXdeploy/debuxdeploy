import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

import prashantAsset from "@/assets/team-prashant.png";
const prashant = prashantAsset;
import ritikAsset from "@/assets/team-ritik.png";
const ritik = ritikAsset;
import aviralAsset from "@/assets/team-aviral.png";
const aviral = aviralAsset;
import vanishaAsset from "@/assets/team-vanisha.png";
const vanisha = vanishaAsset;

const team = [
  {
    name: "Aviral Varshney",
    role: "Full Stack Developer",
    tags: ["Backend Development"],
    image: aviral,
    zoom: 0.9,
    linkedin: "https://www.linkedin.com/in/avi7/",
    copy: "Builds secure, scalable, and high-performance backend systems, APIs, and application architecture.",
  },
  {
    name: "Prashant Jha",
    role: "Full Stack Developer",
    tags: ["Client Relationship Manager", "Quality Assurance (QA)"],
    image: prashant,
    zoom: 1.12,
    linkedin: "https://www.linkedin.com/in/prashantjha03",
    copy: "Leads end-to-end product development while ensuring seamless client communication, software quality, and scalable architecture.",
  },
  {
    name: "Ritik Kumar",
    role: "Full Stack Developer",
    tags: ["Frontend Development"],
    image: ritik,
    linkedin: "https://www.linkedin.com/in/ritik-kumar-8a8980289/",
    copy: "Focused on creating responsive, interactive, and visually refined user interfaces with exceptional user experience.",
  },
  {
    name: "Vanisha",
    role: "Full Stack Developer",
    tags: ["UI/UX Design", "Forward Deploy Engineer"],
    image: vanisha,
    linkedin: "https://www.linkedin.com/in/vanisha01/",
    copy: "Bridges design and engineering — crafting intuitive interfaces and shipping features directly into customer environments with rapid iteration.",
  },
];

function TeamCard({ member, index }: { member: (typeof team)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setSpot({ x: px * 100, y: py * 100 });
    setOffset({ x: (px - 0.5) * 16, y: (py - 0.5) * 16 });
  };

  return (
    <Reveal delay={index * 0.12}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => {
          setOffset({ x: 0, y: 0 });
          setSpot({ x: 50, y: 50 });
        }}
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 160, damping: 15 }}
        whileHover={{ scale: 1.02 }}
        className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/55 p-1 backdrop-blur-xl"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(300px circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.12), transparent 70%)` }}
        />
        <span aria-hidden className="pointer-events-none absolute -inset-px rounded-3xl bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.35)_40deg,transparent_120deg)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10 h-full rounded-[calc(1.5rem-1px)] bg-[#111111]">
          <div className="relative overflow-hidden rounded-t-[calc(1.5rem-1px)]">
            <img
              src={member.image}
              alt={`Portrait of ${member.name}`}
              loading="lazy"
              width={768}
              height={896}
              style={{ ["--zoom" as string]: `${member.zoom ?? 1}` }}
              className="aspect-[4/5] w-full object-cover grayscale transition-transform duration-700 ease-out scale-[var(--zoom)] group-hover:scale-[1.18]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn profile`}
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {member.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-3 py-1 text-[0.68rem] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.copy}</p>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Team() {
  return (
    <section id="team" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionHeading
        eyebrow="The people"
        title="Meet Our Team"
        description="A small, senior team that owns strategy, engineering and delivery end to end."
      />
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {team.map((m, i) => (
          <TeamCard key={m.name} member={m} index={i} />
        ))}
      </div>
    </section>
  );
}
