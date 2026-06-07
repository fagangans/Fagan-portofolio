"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PlanCardProps {
  name: string;
  tagline: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
  illustration?: ReactNode;
}

export default function PlanCard({ name, tagline, features, ctaText, popular, illustration }: PlanCardProps) {
  return (
    <motion.div
      className="mx-4 mb-4 overflow-hidden"
      style={{ borderRadius: 20, boxShadow: "0 2px 16px rgba(0,0,0,0.10)", border: "1px solid #F0F0F0" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {popular && (
        <div
          className="px-5 py-2.5 flex items-center"
          style={{ background: "linear-gradient(90deg, #9B59B6 0%, #1CB0F6 100%)" }}
        >
          <span className="text-white font-black text-xs uppercase tracking-[0.18em]">REKOMENDASI</span>
        </div>
      )}
      <div className="bg-white px-5 pt-5 pb-5">
        {/* Header row: text left, illustration right */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 pr-2">
            <p className="font-black text-[22px] text-gray-900 leading-tight">{name}</p>
            <p className="text-[14px] text-gray-500 mt-1">{tagline}</p>
          </div>
          {illustration && (
            <div className="flex-shrink-0">
              {illustration}
            </div>
          )}
        </div>

        {/* Feature list */}
        <div className="mb-5 space-y-3">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                <path d="M2 8L6 12L14 4" stroke="#1CB0F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[15px] text-gray-700 font-medium">{f}</span>
            </div>
          ))}
        </div>

        {/* CTA — white/gray outlined button with dark blue text */}
        <motion.button
          className="w-full py-3.5 rounded-full font-black text-sm uppercase tracking-wider"
          style={{
            background: "white",
            border: "2px solid #E0E0E0",
            color: "#1CB0F6",
            boxShadow: "0 2px 0 #E0E0E0",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97, y: 2 }}
        >
          {ctaText}
        </motion.button>
      </div>
    </motion.div>
  );
}
