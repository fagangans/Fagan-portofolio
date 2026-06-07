"use client";
import { motion } from "framer-motion";
import PlanCard from "@/components/PlanCard";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      {/* Header */}
      <div
        className="px-4 pt-10 pb-10 flex flex-col items-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #4C1D95 0%, #7C3AED 50%, #1CB0F6 100%)" }}
      >
        <Link href="/" className="absolute top-4 left-4">
          <motion.button
            className="text-white/80 text-2xl"
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        </Link>

        <motion.div
          className="text-7xl mb-3"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          🦜
        </motion.div>
        <div className="bg-yellow-400 rounded-full px-4 py-1.5 mb-3">
          <span className="font-black text-white text-sm uppercase">SUPER</span>
        </div>
        <h1 className="text-white font-black text-2xl text-center mb-2">
          Belajar tanpa batas
        </h1>
        <p className="text-white/70 text-sm text-center">
          Tingkatkan kemampuan bahasa 2× lebih cepat
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pb-20 -mt-4">
        <div className="pt-4">
          <PlanCard
            name="Super"
            tagline="Fokus tanpa gangguan"
            features={[
              "Tanpa iklan",
              "Hati tak terbatas",
              "Kesalahan diulas",
              "Akses semua kursus",
              "Latihan terpersonalisasi",
            ]}
            ctaText="COBA SEHARGA RP0"
            color="#FF9600"
            shadowColor="#CC7800"
            popular={true}
          />

          <PlanCard
            name="Keluarga Super"
            tagline="Bagi-bagi lebih hemat"
            price="Untuk hingga 6 orang"
            features={[
              "Semua fitur Super",
              "Hingga 6 anggota keluarga",
              "Hemat lebih banyak",
              "Kelola dari satu akun",
              "Berbagi kemajuan bersama",
            ]}
            ctaText="COBA SEHARGA RP0"
            color="#7B3FE4"
            shadowColor="#5B1FC4"
          />

          <div className="px-4 mt-2">
            <p className="text-center text-xs text-gray-400 leading-relaxed">
              Dibatalkan kapan saja. Dengan berlangganan, kamu menyetujui{" "}
              <span className="text-[#1CB0F6]">Syarat & Ketentuan</span> kami.
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
