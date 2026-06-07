"use client";
import { motion } from "framer-motion";
import ProfileMenuItem from "@/components/ProfileMenuItem";
import BottomNav from "@/components/BottomNav";
import { useGameStore } from "@/store/gameStore";

export default function ProfilePage() {
  const { username, xp, streak, gems } = useGameStore();

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-10 pb-4 bg-white">
        <div className="flex items-center gap-2">
          <span className="text-lg font-black text-gray-800">{username}</span>
        </div>
        <motion.button
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-lg"
          whileTap={{ scale: 0.9 }}
        >
          ⚙️
        </motion.button>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Avatar section */}
        <div className="bg-white px-4 pb-5">
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-24 h-24 rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center text-5xl bg-gray-50"
            >
              🐦
            </div>
            <p className="font-black text-lg text-gray-800">{username}</p>
          </div>

          {/* Stats row */}
          <div className="flex mt-4 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="flex-1 flex flex-col items-center py-3 border-r border-gray-200">
              <p className="font-black text-base text-gray-800">5</p>
              <p className="text-xs text-gray-500 mt-0.5">Kursus</p>
            </div>
            <div className="flex-1 flex flex-col items-center py-3 border-r border-gray-200">
              <p className="font-black text-base text-gray-800">0</p>
              <p className="text-xs text-gray-500 mt-0.5">Mengikuti</p>
            </div>
            <div className="flex-1 flex flex-col items-center py-3">
              <p className="font-black text-base text-gray-800">0</p>
              <p className="text-xs text-gray-500 mt-0.5">Pengikut</p>
            </div>
          </div>

          {/* Add friend button */}
          <div className="flex gap-3 mt-4">
            <motion.button
              className="flex-1 py-3 rounded-full text-[#1CB0F6] font-bold text-sm border-2 border-[#1CB0F6] uppercase"
              whileTap={{ scale: 0.97 }}
            >
              + TAMBAHKAN TEMAN
            </motion.button>
            <motion.button
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xl"
              whileTap={{ scale: 0.9 }}
            >
              📷
            </motion.button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="flex gap-3 px-4 py-4">
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-sm flex flex-col items-center gap-1">
            <span className="text-2xl">🔥</span>
            <p className="font-black text-lg text-gray-800">{streak}</p>
            <p className="text-xs text-gray-500">Hari berturut</p>
          </div>
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-sm flex flex-col items-center gap-1">
            <span className="text-2xl">⚡</span>
            <p className="font-black text-lg text-gray-800">{xp}</p>
            <p className="text-xs text-gray-500">Total XP</p>
          </div>
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-sm flex flex-col items-center gap-1">
            <span className="text-2xl">💎</span>
            <p className="font-black text-lg text-gray-800">{gems}</p>
            <p className="text-xs text-gray-500">Permata</p>
          </div>
        </div>

        {/* Menu items */}
        <div className="rounded-2xl overflow-hidden mx-4 shadow-sm">
          <ProfileMenuItem icon="👤" label="Profil" description="Lihat profil publikmu" />
          <ProfileMenuItem icon="🔊" label="Bunyi" description="Atur suara dan musik" />
          <ProfileMenuItem icon="📹" label="Panggilan Video" description="Latihan dengan AI" />
          <ProfileMenuItem icon="💪" label="Latihan" description="Pengaturan latihan" />
          <ProfileMenuItem icon="🏆" label="Pencapaian" description="Lihat semua lencana" />
          <ProfileMenuItem icon="🌙" label="Mode Gelap" description="Ganti tampilan" />
          <ProfileMenuItem icon="🚪" label="Keluar" description="Keluar dari akun" />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
