"use client";
import { motion } from "framer-motion";
import PracticeCard from "@/components/PracticeCard";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";

export default function PracticePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      {/* Header */}
      <div
        className="px-4 pt-10 pb-16 relative overflow-hidden"
        style={{ background: "#1CB0F6" }}
      >
        <h1 className="text-white font-black text-2xl">Latihan</h1>
        <div className="absolute right-4 top-4 text-6xl opacity-90">🎯</div>
      </div>

      {/* Floating CTA card over header */}
      <div className="px-4 -mt-10 mb-4 relative z-10">
        <div className="bg-white rounded-3xl p-4 shadow-lg">
          <p className="font-extrabold text-base text-gray-800 mb-3">Perkuat bagian-bagian lemahmu</p>
          <Link href="/lesson/practice">
            <motion.button
              className="w-full py-3 rounded-full text-white font-black text-sm uppercase"
              style={{ background: "#1CB0F6", boxShadow: "0 4px 0 #0A95DB" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97, y: 3 }}
            >
              MULAI +20 XP
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Percakapan Section */}
        <div className="px-4 mb-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-black text-gray-500 text-xs uppercase tracking-widest">PERCAKAPAN</h2>
            <div className="bg-black rounded px-2 py-0.5">
              <span className="text-white font-black text-xs">MAX</span>
            </div>
          </div>
          <PracticeCard
            icon="📹"
            title="Panggilan Video"
            badge="BARU"
            badgeColor="#FF4B4B"
            iconBg="#E8CCFF"
          />
        </div>

        {/* Latihan Keahlian Section */}
        <div className="px-4 mb-3">
          <h2 className="font-black text-gray-500 text-xs uppercase tracking-widest mb-3">LATIHAN KEAHLIAN</h2>
          <div className="space-y-3">
            <PracticeCard
              icon="🔄"
              title="Kesalahan"
              badge="30+"
              badgeColor="#FF4B4B"
              iconBg="#FFE0B2"
            />
            <PracticeCard
              icon="📝"
              title="Kata"
              badge="30+"
              badgeColor="#FF9600"
              iconBg="#E3F2FF"
            />
            <PracticeCard
              icon="🔊"
              title="Mendengar"
              iconBg="#E0F7FF"
            />
            <PracticeCard
              icon="🎤"
              title="Berbicara"
              iconBg="#E0FFE8"
            />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
