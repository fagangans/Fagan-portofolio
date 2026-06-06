"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
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
            whileHover={{ y: -8 }}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-charcoal/40"
          >
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${post.gradient}`}>
              <div className="absolute inset-0 bg-radial-glow" />
              <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-gold backdrop-blur">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-silver">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-xl text-white transition-colors group-hover:text-gold">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold">
                Read More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
