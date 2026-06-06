"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import type { Testimonial } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

function Card({ t }: { t: Testimonial }) {
  return (
    <GlassCard className="mx-3 flex h-full w-[340px] shrink-0 flex-col p-7">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-silver">
        &ldquo;{t.content}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-serif text-sm font-bold text-white`}
        >
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
        <div>
          <p className="text-sm font-medium text-white">{t.name}</p>
          <p className="text-xs text-silver">
            {t.role}, {t.company}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

export default function TestimonialsSection() {
  const row = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <SectionHeading
        eyebrow="Kind Words"
        title="Client"
        highlight="Testimonials"
        className="mb-20"
      />

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

        <div className="flex w-max animate-marquee" style={{ animationDuration: "40s" }}>
          {row.map((t, i) => (
            <Card key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
