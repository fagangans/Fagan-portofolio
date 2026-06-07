"use client";
import { motion } from "framer-motion";
import MissionCard from "@/components/MissionCard";
import BottomNav from "@/components/BottomNav";

// Duo bird SVG for header
function DuoBirdSmall() {
  return (
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
      <ellipse cx="40" cy="58" rx="26" ry="24" fill="#58CC02"/>
      <ellipse cx="40" cy="34" rx="22" ry="21" fill="#58CC02"/>
      <ellipse cx="40" cy="56" rx="15" ry="14" fill="#A0E070"/>
      <ellipse cx="30" cy="28" rx="8" ry="9" fill="white"/>
      <ellipse cx="50" cy="28" rx="8" ry="9" fill="white"/>
      <ellipse cx="31" cy="29" rx="5" ry="6" fill="#1A1A2E"/>
      <ellipse cx="51" cy="29" rx="5" ry="6" fill="#1A1A2E"/>
      <ellipse cx="33" cy="27" rx="2" ry="2.5" fill="white"/>
      <ellipse cx="53" cy="27" rx="2" ry="2.5" fill="white"/>
      <path d="M36 38 L40 43 L44 38" fill="#FF9600"/>
      <ellipse cx="16" cy="54" rx="9" ry="6" fill="#45A800" transform="rotate(-15 16 54)"/>
      <ellipse cx="64" cy="54" rx="9" ry="6" fill="#45A800" transform="rotate(15 64 54)"/>
      {/* Backpack / bag hint */}
      <rect x="52" y="42" width="14" height="16" rx="4" fill="#1CB0F6" opacity="0.9"/>
      <rect x="54" y="40" width="10" height="4" rx="2" fill="#0A95DB"/>
    </svg>
  );
}

// Scene illustration — stone warrior / golem in green field
function GolemScene() {
  return (
    <svg width="100%" height="160" viewBox="0 0 360 160" preserveAspectRatio="xMidYMid slice">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4CAF50"/>
          <stop offset="100%" stopColor="#2E7D32"/>
        </linearGradient>
      </defs>
      <rect width="360" height="160" fill="url(#skyGrad)"/>
      {/* Ground */}
      <ellipse cx="180" cy="145" rx="180" ry="30" fill="#1B5E20" opacity="0.6"/>
      {/* Trees background */}
      <ellipse cx="30" cy="100" rx="25" ry="30" fill="#388E3C" opacity="0.7"/>
      <ellipse cx="320" cy="95" rx="22" ry="28" fill="#388E3C" opacity="0.7"/>
      <ellipse cx="60" cy="90" rx="20" ry="25" fill="#2E7D32" opacity="0.8"/>
      <ellipse cx="300" cy="88" rx="20" ry="24" fill="#2E7D32" opacity="0.8"/>
      {/* Triangle trees — more illustrated style */}
      <polygon points="30,105 50,55 70,105" fill="#2E7D32" opacity="0.9"/>
      <polygon points="15,105 32,65 49,105" fill="#388E3C" opacity="0.8"/>
      <polygon points="290,105 310,60 330,105" fill="#2E7D32" opacity="0.9"/>
      <polygon points="310,105 328,68 346,105" fill="#388E3C" opacity="0.8"/>
      {/* Stone Golem body */}
      <rect x="145" y="55" width="70" height="80" rx="8" fill="#757575"/>
      {/* Golem head */}
      <rect x="150" y="25" width="60" height="38" rx="6" fill="#616161"/>
      {/* Golem face */}
      <ellipse cx="165" cy="38" rx="7" ry="8" fill="#424242"/>
      <ellipse cx="195" cy="38" rx="7" ry="8" fill="#424242"/>
      <path d="M162 52 Q180 58 198 52" stroke="#424242" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Stone texture lines */}
      <line x1="150" y1="75" x2="215" y2="75" stroke="#9E9E9E" strokeWidth="1.5" opacity="0.5"/>
      <line x1="150" y1="95" x2="215" y2="95" stroke="#9E9E9E" strokeWidth="1.5" opacity="0.5"/>
      {/* Arms */}
      <rect x="118" y="60" width="28" height="50" rx="8" fill="#757575"/>
      <rect x="214" y="60" width="28" height="50" rx="8" fill="#757575"/>
      {/* Small stones around */}
      <ellipse cx="120" cy="140" rx="12" ry="6" fill="#616161" opacity="0.6"/>
      <ellipse cx="240" cy="138" rx="10" ry="5" fill="#616161" opacity="0.6"/>
      {/* Play button overlay hint */}
      <circle cx="180" cy="90" r="18" fill="white" opacity="0.15"/>
      <path d="M175 84 L175 96 L187 90Z" fill="white" opacity="0.5"/>
    </svg>
  );
}

// Clock icon SVG
function ClockIcon({ color = "#FF9600" }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1.5"/>
      <path d="M7.5 4V7.5L10 9.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function MissionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      {/* Header — left title, right bird */}
      <div
        className="px-5 pt-12 pb-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7B3FE4 0%, #9B59D4 100%)" }}
      >
        <div className="pr-20">
          <h1 className="text-white font-black text-[28px] leading-tight">Misi</h1>
          <p className="text-white/80 text-sm mt-1 leading-snug">
            Taklukkan misi untuk{"\n"}mendapatkan hadiah!
          </p>
        </div>
        {/* Bird positioned right, partially clipped at bottom */}
        <div className="absolute right-2 bottom-0">
          <DuoBirdSmall />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Weekend Mission Section */}
        <div className="px-5 pt-5 pb-2 flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#AFAFAF] uppercase tracking-widest">MISI AKHIR MINGGU</span>
          <div className="flex items-center gap-1.5">
            <ClockIcon color="#FF9600" />
            <span className="text-[#FF9600] text-xs font-bold">1H</span>
          </div>
        </div>

        {/* Scene card for weekend mission */}
        <div className="mx-4 mb-3 bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          {/* Illustrated scene at top */}
          <div className="overflow-hidden rounded-t-2xl">
            <GolemScene />
          </div>
          {/* Mission content */}
          <div className="px-4 pb-4 pt-3">
            <p className="font-black text-[17px] text-gray-800 mb-3">Selesaikan 3 pelajaran</p>
            {/* Progress bar with fraction inside */}
            <div className="relative h-[22px] bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "#9B59B6", width: "33.3%" }}
                initial={{ width: 0 }}
                animate={{ width: "33.3%" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <span
                className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white"
                style={{ mixBlendMode: "normal" }}
              >
                1 / 3
              </span>
            </div>
          </div>
        </div>

        {/* Daily Mission Section */}
        <div className="px-5 pt-3 pb-2 flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#AFAFAF] uppercase tracking-widest">MISI HARIAN</span>
          <div className="flex items-center gap-1.5">
            <ClockIcon color="#AFAFAF" />
            <span className="text-[#AFAFAF] text-xs font-bold">13J</span>
          </div>
        </div>

        <MissionCard
          title="Selesaikan 2 pelajaran"
          current={1}
          total={2}
          color="#9B59B6"
        />

        {/* Coming soon */}
        <div className="px-5 pt-4 pb-2">
          <span className="text-[11px] font-bold text-[#AFAFAF] uppercase tracking-widest">AKAN DATANG</span>
        </div>
        <div
          className="mx-4 mb-3 bg-white rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)", opacity: 0.7 }}
        >
          <div className="flex items-center gap-4 px-4 py-4">
            {/* Locked chest illustration */}
            <div className="flex-shrink-0">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <rect x="4" y="24" width="44" height="24" rx="4" fill="#D0D0D0"/>
                <rect x="4" y="16" width="44" height="12" rx="4" fill="#E0E0E0"/>
                <rect x="4" y="24" width="44" height="5" fill="#B8B8B8"/>
                <rect x="20" y="27" width="12" height="9" rx="3" fill="#B8B8B8"/>
                <rect x="23" y="30" width="6" height="4" rx="2" fill="#A0A0A0"/>
                {/* Lock icon on top */}
                <rect x="21" y="8" width="10" height="10" rx="2" fill="#C0C0C0"/>
                <path d="M23 12V10C23 8.9 24.1 8 26 8C27.9 8 29 8.9 29 10V12" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="26" cy="13" r="1.5" fill="#A0A0A0"/>
              </svg>
            </div>
            <div>
              <p className="font-black text-[15px] text-gray-400">Terungkap dalam 3 hari</p>
              <p className="text-xs text-gray-300 mt-0.5">Tantangan baru menunggumu</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
