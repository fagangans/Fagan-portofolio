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
        className="px-4 pt-10 pb-6"
        style={{ background: "linear-gradient(135deg, #1CB0F6 0%, #0A95DB 100%)" }}
      >
        <h1 className="text-white font-black text-2xl">Latihan</h1>
        <p className="text-white/80 text-sm mt-1">Perkuat bagian-bagian lemahmu</p>
      </div>

      <div className="flex-1 overflow-y-auto pb-20 pt-4">
        {/* Start Practice CTA */}
        <div className="mx-4 mb-5">
          <div className="bg-white rounded-3xl p-5 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">💪</span>
              <div>
                <p className="font-black text-base text-gray-800">Perkuat bagian-bagian lemahmu</p>
                <p className="text-xs text-gray-500">Latihan terpersonalisasi untukmu</p>
              </div>
            </div>
            <Link href="/lesson/practice">
              <motion.button
                className="w-full py-3 rounded-full text-white font-black text-sm uppercase"
                style={{ background: "#58CC02", boxShadow: "0 4px 0 #45A800" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97, y: 3 }}
              >
                MULAI +20 XP
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Percakapan Section */}
        <div className="px-4 mb-3">
          <h2 className="font-black text-gray-700 text-sm uppercase tracking-wider mb-3">PERCAKAPAN</h2>
          <div className="space-y-3">
            <PracticeCard
              icon="🎤"
              title="Berbicara Bebas"
              subtitle="Latih percakapan alami"
              badge="MAX"
              badgeColor="#7B3FE4"
            />
            <PracticeCard
              icon="📹"
              title="Panggilan Video"
              subtitle="Bicara dengan karakter AI"
              badge="BARU"
              badgeColor="#FF4FB3"
            />
          </div>
        </div>

        {/* Latihan Keahlian Section */}
        <div className="px-4 mb-3">
          <h2 className="font-black text-gray-700 text-sm uppercase tracking-wider mb-3">LATIHAN KEAHLIAN</h2>
          <div className="space-y-3">
            <PracticeCard
              icon="❌"
              title="Kesalahan"
              subtitle="Pelajari dari kesalahanmu"
              badge="30+"
              badgeColor="#FF4B4B"
            />
            <PracticeCard
              icon="📝"
              title="Kata"
              subtitle="Perbanyak kosakata"
              badge="30+"
              badgeColor="#FF9600"
            />
            <PracticeCard
              icon="👂"
              title="Mendengar"
              subtitle="Tingkatkan kemampuan dengar"
            />
            <PracticeCard
              icon="🗣️"
              title="Berbicara"
              subtitle="Latih pengucapan"
            />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
