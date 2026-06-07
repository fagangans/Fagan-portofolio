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
  icon?: string;
}

export default function PlanCard({ name, tagline, price, features, ctaText, color, shadowColor, popular, icon = "✨" }: PlanCardProps) {
  return (
    <motion.div
      className="mx-4 mb-4 overflow-hidden"
      style={{ borderRadius: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {popular && (
        <div
          className="px-4 py-2 flex items-center"
          style={{ background: "linear-gradient(90deg, #9B59B6 0%, #2ECC71 100%)" }}
        >
          <span className="text-white font-black text-xs uppercase tracking-[0.15em]">REKOMENDASI</span>
        </div>
      )}
      <div className="bg-white px-5 pt-4 pb-5" style={{ borderRadius: popular ? "0 0 24px 24px" : 24 }}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-black text-xl text-gray-800">{name}</p>
            <p className="text-sm text-gray-500 mt-0.5">{tagline}</p>
          </div>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 ml-3"
               style={{ background: color + "15" }}>
            {icon}
          </div>
        </div>
        <div className="mb-5 space-y-2.5">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                   style={{ background: "#58CC0220" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="#58CC02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm text-gray-700 font-medium">{f}</span>
            </div>
          ))}
        </div>
        {price && <p className="text-center text-xs text-gray-400 mb-3 font-medium">{price}</p>}
        <motion.button
          className="w-full py-3.5 rounded-full text-white font-black text-sm uppercase tracking-wider"
          style={{ background: color, boxShadow: `0 5px 0 ${shadowColor}` }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97, y: 4 }}
        >
          {ctaText}
        </motion.button>
      </div>
    </motion.div>
  );
}
