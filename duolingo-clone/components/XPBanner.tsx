"use client";
interface XPBannerProps {
  section: number;
  unit: number;
  title: string;
}

export default function XPBanner({ section, unit, title }: XPBannerProps) {
  return (
    <div
      className="px-4 py-3.5 flex items-center justify-between"
      style={{ background: "#FF4FB3", boxShadow: "0 4px 0 #CC0093" }}
    >
      <div>
        <p className="text-white text-[11px] font-extrabold uppercase tracking-widest opacity-90">
          BAGIAN {section}, UNIT {unit}
        </p>
        <p className="text-white font-extrabold text-[15px] mt-0.5">{title}</p>
      </div>
      <button className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="3" width="14" height="2" rx="1" fill="white"/>
          <rect x="2" y="8" width="10" height="2" rx="1" fill="white"/>
          <rect x="2" y="13" width="12" height="2" rx="1" fill="white"/>
        </svg>
      </button>
    </div>
  );
}
