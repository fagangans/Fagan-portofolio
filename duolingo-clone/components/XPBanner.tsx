"use client";
interface XPBannerProps {
  section: number;
  unit: number;
  title: string;
}

export default function XPBanner({ section, unit, title }: XPBannerProps) {
  return (
    <div
      className="mx-4 my-3 rounded-2xl p-4 flex items-center justify-between"
      style={{ background: "#FF4FB3", boxShadow: "0 4px 0 #CC0093" }}
    >
      <div>
        <p className="text-white/80 text-xs font-bold uppercase tracking-widest">
          BAGIAN {section}, UNIT {unit}
        </p>
        <p className="text-white font-bold text-base mt-0.5">{title}</p>
      </div>
      <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
        <span className="text-white font-bold text-sm">MULAI</span>
        <span className="text-yellow-200 font-bold text-sm">+20 XP</span>
      </div>
    </div>
  );
}
