"use client";

import { socials, navLinks } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center">
        <div>
          <span className="font-serif text-3xl font-bold tracking-widest text-gold-gradient">
            FFA
          </span>
          <p className="mt-3 max-w-sm text-sm text-silver">
            Membantu bisnis dan komunitas tampil profesional di dunia digital
            dengan desain yang elegan dan teknologi modern.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-silver transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {socials.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-silver transition-all hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <div className="h-px w-full max-w-xs bg-white/10" />

        <p className="text-xs text-silver">
          &copy; {new Date().getFullYear()} Fagan Fabian Altair. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
