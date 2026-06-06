"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { name, tagline, biography, profilePhoto } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import PortraitCard from "@/components/ui/PortraitCard";

const timeline = [
  { year: "2020", title: "Memulai Perjalanan", desc: "Mulai belajar web development secara serius dan mengerjakan proyek pertama." },
  { year: "2021", title: "Proyek Klien Pertama", desc: "Menyelesaikan proyek komersial pertama untuk bisnis lokal." },
  { year: "2022", title: "Spesialisasi Frontend", desc: "Fokus pada React, Next.js, dan pengembangan antarmuka modern." },
  { year: "2023", title: "UI/UX & Design System", desc: "Memperluas keahlian ke desain produk dan pengalaman pengguna." },
  { year: "2024", title: "30+ Klien Terlayani", desc: "Berhasil membantu lebih dari 30 bisnis dan komunitas hadir secara digital." },
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
      <SectionHeading eyebrow="Tentang Saya" title="About" highlight="Me" className="mb-20" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PortraitCard
            src={profilePhoto}
            alt={name}
            subtitle={tagline}
            variant="about"
          />
        </motion.div>

        {/* Bio + timeline */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {biography.split("\n\n").filter(Boolean).map((paragraph, i) => (
            <p
              key={i}
              className={`${i > 0 ? "mt-4" : "text-lg"} leading-relaxed text-silver`}
            >
              {paragraph.trim()}
            </p>
          ))}

          <div className="mt-10 grid grid-cols-3 gap-6">
            <Counter value={5} label="Tahun" />
            <Counter value={50} label="Proyek" />
            <Counter value={30} label="Klien" />
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
