"use client";
import { motion } from "framer-motion";

interface PlanCardProps {
  name: string;
  tagline: string;
  price?: string;
  features: string[];
  ctaText: string;
  color: string;
  shadowColor: string;
  popular?: boolean;
}

export default function PlanCard({ name, tagline, price, features, ctaText, color, shadowColor, popular }: PlanCardProps) {
  return (
    <motion.div
      className="bg-white rounded-3xl p-5 mx-4 mb-4 shadow-lg relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {popular && (
        <div className="absolute top-3 right-3 bg-yellow-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          POPULER
        </div>
      )}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ background: color + "20" }}>
          ✨
        </div>
        <div>
          <p className="font-black text-base text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{tagline}</p>
        </div>
      </div>
      <div className="mb-4">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5 border-b border-gray-100">
            <span className="text-green-500 font-bold text-sm">✓</span>
            <span className="text-sm text-gray-700">{f}</span>
          </div>
        ))}
      </div>
      {price && <p className="text-center text-xs text-gray-400 mb-2">{price}</p>}
      <motion.button
        className="w-full py-3 rounded-full text-white font-black text-sm uppercase tracking-wider"
        style={{ background: color, boxShadow: `0 4px 0 ${shadowColor}` }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97, y: 3, boxShadow: `0 1px 0 ${shadowColor}` }}
      >
        {ctaText}
      </motion.button>
    </motion.div>
  );
}
