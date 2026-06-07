"use client";
import { motion } from "framer-motion";
import MissionCard from "@/components/MissionCard";
import BottomNav from "@/components/BottomNav";

export default function MissionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      {/* Header */}
      <div
        className="px-4 pt-10 pb-8 flex flex-col items-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7B3FE4 0%, #5B2DC7 100%)" }}
      >
        <div className="text-5xl mb-2">🦜</div>
        <h1 className="text-white font-black text-2xl">Misi</h1>
        <p className="text-white/70 text-sm mt-1">Selesaikan misi untuk mendapat hadiah!</p>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Weekend Missions */}
        <div className="px-4 pt-5 pb-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-black text-gray-800 text-base">MISI AKHIR MINGGU</h2>
            <div className="flex items-center gap-1 bg-orange-100 rounded-full px-3 py-1">
              <span className="text-orange-500 text-sm">⏱</span>
              <span className="text-orange-600 text-sm font-bold">1J</span>
            </div>
          </div>
        </div>

        <MissionCard
          title="Pelajari 3 pelajaran"
          description="Selesaikan 3 pelajaran hari ini"
          timer="1J"
          current={1}
          total={3}
          reward="🏆"
          color="#7B3FE4"
        />
        <MissionCard
          title="Dapatkan 100 XP"
          description="Kumpulkan XP dari pelajaran"
          timer="1J"
          current={10}
          total={100}
          reward="⚡"
          color="#FF9600"
        />

        {/* Daily Missions */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-black text-gray-800 text-base">MISI HARIAN</h2>
            <div className="flex items-center gap-1 bg-blue-100 rounded-full px-3 py-1">
              <span className="text-blue-500 text-sm">⏱</span>
              <span className="text-blue-600 text-sm font-bold">13J</span>
            </div>
          </div>
        </div>

        <MissionCard
          title="Mainkan 1 pelajaran"
          description="Mulai perjalanan belajarmu"
          timer="13J"
          current={1}
          total={2}
          reward="📚"
          color="#58CC02"
        />
        <MissionCard
          title="Pertahankan streak"
          description="Jaga streak harianmu"
          timer="13J"
          current={1}
          total={1}
          reward="🔥"
          color="#FF4B4B"
        />

        {/* Coming soon */}
        <div className="px-4 pt-4 pb-2">
          <h2 className="font-black text-gray-500 text-base">AKAN DATANG</h2>
        </div>
        <motion.div
          className="bg-gray-100 rounded-2xl p-4 mx-4 mb-3 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔒</span>
            <div>
              <p className="font-bold text-sm text-gray-500">Tantangan Mingguan</p>
              <p className="text-xs text-gray-400">Akan tersedia Senin depan</p>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
