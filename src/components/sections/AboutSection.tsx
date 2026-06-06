"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User } from "lucide-react";
import { name, tagline, biography } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const timeline = [
  { year: "2020", title: "Founded Altair Studio", desc: "Launched an independent creative practice." },
  { year: "2021", title: "First Awards", desc: "Recognized by CSS Design Awards." },
  { year: "2022", title: "Scaled to 50k Users", desc: "Grew a self-built SaaS product globally." },
  { year: "2023", title: "AI Specialization", desc: "Shipped production LLM-powered products." },
  { year: "2024", title: "Awwwards Recognition", desc: "Site of the Day for immersive 3D work." },
];

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex flex-col">
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="font-serif text-4xl md:text-5xl text-gold-gradient"
      >
        {value}+
      </motion.span>
      <span className="mt-1 text-xs uppercase tracking-[0.2em] text-silver">
        {label}
      </span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section-pad relative">
      <SectionHeading eyebrow="Who I Am" title="About" highlight="Me" className="mb-20" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ perspective: 1200 }}
          className="group"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl bg-gradient-to-br from-gold/20 via-charcoal to-black border border-white/10 overflow-hidden transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-8deg)_rotateX(4deg)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <User className="h-32 w-32 text-gold/40" />
            </div>
            <div className="absolute inset-0 bg-radial-glow" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4">
              <p className="font-serif text-lg text-white">{name}</p>
              <p className="text-xs text-silver">{tagline}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {biography.split("\n\n").map((paragraph, i) => (
            <p key={i} className={`${i > 0 ? "mt-4" : "text-lg"} leading-relaxed text-silver`}>
              {paragraph}
            </p>
          ))}

          <div className="mt-10 grid grid-cols-3 gap-6">
            <Counter value={5} label="Years" />
            <Counter value={50} label="Projects" />
            <Counter value={30} label="Clients" />
          </div>

          <div className="mt-12 space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-5 pl-6"
              >
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gold" />
                <span className="absolute left-[3px] top-4 h-full w-px bg-white/10" />
                <span className="w-12 shrink-0 font-serif text-gold">
                  {item.year}
                </span>
                <div>
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="text-sm text-silver">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
