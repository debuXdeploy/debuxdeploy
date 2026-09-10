import logo from "@/assets/logo.png";
import { Code2, Globe, Mail, MessageCircle } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", Icon: Code2 },
  { label: "LinkedIn", Icon: Globe },
  { label: "Email", Icon: Mail },
  { label: "Chat", Icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-5 pb-14 sm:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 shrink-0 place-items-center rounded-lg border border-border bg-card px-2.5">
            <img src={logo} alt="debuXdeploy logo" loading="lazy" width={856} height={425} className="h-4 w-auto object-contain" />
          </span>
          <span className="truncate font-display text-base font-bold">debuXdeploy</span>
        </div>
        <nav>
          <ul className="flex flex-wrap gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="h-px w-full bg-border" />
      <div className="flex flex-col-reverse items-center justify-between gap-6 pt-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} debuXdeploy. All rights reserved.
        </p>
        <ul className="flex gap-3">
          {socials.map(({ label, Icon }) => (
            <li key={label}>
              <a
                href="#contact"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:text-foreground hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
