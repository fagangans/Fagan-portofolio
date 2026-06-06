"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-pad relative bg-charcoal/30">
      <SectionHeading
        eyebrow="What I Master"
        title="My"
        highlight="Skills"
        className="mb-20"
      />

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = getIcon(cat.icon);
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d", perspective: 800 }}
            >
              <GlassCard glow className="h-full p-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 border border-gold/30">
                    <Icon className="h-5 w-5 text-gold" />
                  </span>
                  <h3 className="font-serif text-xl text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-silver">{skill.name}</span>
                        <span className="text-gold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-gold-light to-gold-dark"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + si * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
