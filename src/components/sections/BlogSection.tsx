"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BlogSection() {
  return (
    <section id="blog" className="section-pad relative">
      <SectionHeading
        eyebrow="Thoughts &amp; Ideas"
        title="From the"
        highlight="Blog"
        className="mb-20"
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-charcoal/40"
          >
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${post.gradient}`}>
              <div className="absolute inset-0 bg-radial-glow" />
              <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-gold backdrop-blur">
                {post.category}
              </span>
              <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-silver backdrop-blur">
                Coming Soon
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-silver">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-xl text-white">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver">
                {post.excerpt}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
