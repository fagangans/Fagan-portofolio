"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad relative bg-charcoal/30">
      <SectionHeading
        eyebrow="How I Help"
        title="My"
        highlight="Services"
        className="mb-20"
      />

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = getIcon(service.icon);
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_0_50px_-12px_rgba(201,168,76,0.45)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 border border-gold/30 transition-transform duration-500 group-hover:scale-110">
                <Icon className="h-6 w-6 text-gold" />
              </span>

              <h3 className="font-serif text-2xl text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-silver"
                  >
                    <Check className="h-4 w-4 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
