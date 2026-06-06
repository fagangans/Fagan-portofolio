"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy, Flag } from "lucide-react";
import { achievements } from "@/data/portfolio";
import type { Achievement } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const typeIcon = {
  Award,
  Certification: BadgeCheck,
  Competition: Trophy,
  Milestone: Flag,
} as const;

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-pad relative bg-charcoal/30">
      <SectionHeading
        eyebrow="The Journey"
        title="Achievements &amp;"
        highlight="Milestones"
        className="mb-20"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {achievements.map((a: Achievement, i) => {
            const Icon = typeIcon[a.type];
            const left = i % 2 === 0;
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col pl-12 md:w-1/2 md:pl-0 ${
                  left ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-black left-0 md:left-auto ${
                    left ? "md:-right-4" : "md:-left-4"
                  }`}
                >
                  <Icon className="h-4 w-4 text-gold" />
                </span>

                <span className="font-serif text-2xl text-gold-gradient">
                  {a.year}
                </span>
                <h3 className="mt-1 text-lg font-medium text-white">
                  {a.title}
                </h3>
                <p className="mt-1 text-sm text-silver">{a.description}</p>
                <span className="mt-2 text-xs uppercase tracking-[0.2em] text-gold/70">
                  {a.type}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
