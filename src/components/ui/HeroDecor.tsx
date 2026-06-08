"use client";

/*
 * HeroDecor — pure CSS decorative elements for the hero section sides.
 * No libraries, no canvas, no interactivity. Remove this component to
 * cleanly revert all decoration.
 */

export default function HeroDecor() {
  return (
    <>
      <style>{`
        /* ── Keyframes ───────────────────────────────────────── */
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-18px) rotate(6deg); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(14px) rotate(-5deg); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(8deg); }
        }
        @keyframes floatD {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(20px) rotate(-7deg); }
        }
        @keyframes floatE {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50%       { transform: translateY(-14px) rotate(4deg) scale(1.04); }
        }
        @keyframes floatF {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(12px) rotate(-6deg); }
        }

        /* ── Base class ──────────────────────────────────────── */
        .floating-decor {
          position: absolute;
          pointer-events: none;
          will-change: transform;
        }

        /* ── Orb / sphere ────────────────────────────────────── */
        .decor-orb {
          border-radius: 50%;
          background: radial-gradient(
            circle at 35% 35%,
            rgba(212, 175, 100, 0.55) 0%,
            rgba(180, 140, 60, 0.25) 40%,
            rgba(20, 20, 20, 0.15) 100%
          );
          box-shadow:
            inset -6px -6px 18px rgba(0, 0, 0, 0.55),
            inset 4px 4px 12px rgba(255, 235, 160, 0.22),
            0 0 28px rgba(212, 175, 100, 0.12);
          backdrop-filter: blur(3px);
          border: 1px solid rgba(212, 175, 100, 0.18);
        }

        /* ── Cube ────────────────────────────────────────────── */
        .decor-cube {
          background: linear-gradient(
            135deg,
            rgba(212, 175, 100, 0.28) 0%,
            rgba(30, 25, 15, 0.55) 60%,
            rgba(212, 175, 100, 0.12) 100%
          );
          border: 1px solid rgba(212, 175, 100, 0.22);
          box-shadow:
            inset 3px 3px 10px rgba(255, 235, 160, 0.15),
            inset -3px -3px 10px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(212, 175, 100, 0.08);
          backdrop-filter: blur(4px);
        }

        /* ── Torus / donut ───────────────────────────────────── */
        .decor-torus {
          border-radius: 50%;
          border: 6px solid transparent;
          background:
            linear-gradient(rgba(10,10,10,0.1), rgba(10,10,10,0.1)) padding-box,
            linear-gradient(
              135deg,
              rgba(212, 175, 100, 0.7),
              rgba(140, 100, 30, 0.3),
              rgba(212, 175, 100, 0.6)
            ) border-box;
          box-shadow:
            0 0 18px rgba(212, 175, 100, 0.18),
            inset 0 0 12px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(2px);
        }

        /* ── Code bracket orb ────────────────────────────────── */
        .decor-code-orb {
          border-radius: 50%;
          background: radial-gradient(
            circle at 40% 35%,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(212, 175, 100, 0.12) 50%,
            rgba(0, 0, 0, 0.3) 100%
          );
          border: 1px solid rgba(212, 175, 100, 0.2);
          backdrop-filter: blur(6px);
          box-shadow:
            inset 2px 2px 8px rgba(255, 235, 160, 0.1),
            inset -2px -2px 8px rgba(0, 0, 0, 0.4),
            0 0 16px rgba(212, 175, 100, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Trophy ──────────────────────────────────────────── */
        .decor-trophy-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          filter:
            drop-shadow(0 0 10px rgba(212,175,100,0.35))
            drop-shadow(0 2px 6px rgba(0,0,0,0.5));
          opacity: 0.62;
        }

        /* ── Tech chip orb ───────────────────────────────────── */
        .decor-chip-orb {
          border-radius: 28%;
          background: linear-gradient(
            145deg,
            rgba(40, 35, 20, 0.7) 0%,
            rgba(15, 12, 5, 0.85) 60%,
            rgba(212, 175, 100, 0.18) 100%
          );
          border: 1px solid rgba(212, 175, 100, 0.25);
          box-shadow:
            inset 2px 2px 8px rgba(255, 235, 160, 0.12),
            inset -2px -2px 8px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(212, 175, 100, 0.1);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Responsive ──────────────────────────────────────── */
        @media (max-width: 1024px) {
          .floating-decor { opacity: 0.55 !important; transform: scale(0.8); }
        }
        @media (max-width: 768px) {
          .floating-decor { display: none; }
          .floating-decor.decor-mobile-show { display: block; opacity: 0.3 !important; transform: scale(0.6); }
        }
      `}</style>

      {/* ══════════════ LEFT SIDE ══════════════ */}

      {/* L1 — Glass-gold sphere, top-left */}
      <div
        className="floating-decor decor-orb"
        style={{
          width: 72, height: 72,
          left: "3%", top: "18%",
          opacity: 0.55,
          animation: "floatA 9s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />

      {/* L2 — Code bracket orb, mid-left */}
      <div
        className="floating-decor decor-code-orb"
        style={{
          width: 60, height: 60,
          left: "2%", top: "46%",
          opacity: 0.6,
          animation: "floatB 11s ease-in-out infinite",
          animationDelay: "1.5s",
        }}
      >
        <span style={{
          fontFamily: "monospace",
          fontSize: 22,
          fontWeight: 700,
          color: "rgba(212,175,100,0.85)",
          letterSpacing: "-2px",
          textShadow: "0 0 8px rgba(212,175,100,0.5)",
          lineHeight: 1,
          userSelect: "none",
        }}>{ }</span>
      </div>

      {/* L3 — Dark-gold cube, bottom-left */}
      <div
        className="floating-decor decor-cube"
        style={{
          width: 44, height: 44,
          left: "4.5%", top: "72%",
          borderRadius: 8,
          opacity: 0.48,
          animation: "floatC 8s ease-in-out infinite",
          animationDelay: "3s",
          transform: "rotate(18deg)",
        }}
      />

      {/* ══════════════ RIGHT SIDE ══════════════ */}

      {/* R1 — Trophy, top-right */}
      <div
        className="floating-decor decor-trophy-wrap"
        style={{
          width: 56, height: 56,
          right: "3%", top: "16%",
          animation: "floatD 10s ease-in-out infinite",
          animationDelay: "0.8s",
        }}
      >
        {/* Inline SVG trophy — no external asset needed */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5D680"/>
              <stop offset="40%" stopColor="#D4AF64"/>
              <stop offset="100%" stopColor="#8B6914"/>
            </linearGradient>
          </defs>
          {/* Cup body */}
          <path d="M13 6h14l-2 14a6 6 0 01-10 0L13 6z" fill="url(#tg)" opacity="0.95"/>
          {/* Handles */}
          <path d="M13 8H8a4 4 0 004 6" stroke="url(#tg)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M27 8h5a4 4 0 01-4 6" stroke="url(#tg)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          {/* Stem */}
          <rect x="18" y="20" width="4" height="7" fill="url(#tg)" opacity="0.85"/>
          {/* Base */}
          <rect x="13" y="27" width="14" height="3" rx="1.5" fill="url(#tg)" opacity="0.9"/>
          {/* Shine */}
          <path d="M17 9 Q18 14 17 18" stroke="rgba(255,250,200,0.45)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* R2 — Tech chip orb, mid-right */}
      <div
        className="floating-decor decor-chip-orb"
        style={{
          width: 58, height: 58,
          right: "2.5%", top: "44%",
          opacity: 0.58,
          animation: "floatE 12s ease-in-out infinite",
          animationDelay: "2s",
        }}
      >
        {/* Chip SVG */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="9" width="14" height="14" rx="2" fill="rgba(212,175,100,0.22)" stroke="rgba(212,175,100,0.6)" strokeWidth="1"/>
          <rect x="12" y="12" width="8" height="8" rx="1" fill="rgba(212,175,100,0.35)"/>
          {/* Pins */}
          {[11,16,21].map(y => (
            <g key={y}>
              <line x1="6" y1={y} x2="9" y2={y} stroke="rgba(212,175,100,0.55)" strokeWidth="1" strokeLinecap="round"/>
              <line x1="23" y1={y} x2="26" y2={y} stroke="rgba(212,175,100,0.55)" strokeWidth="1" strokeLinecap="round"/>
            </g>
          ))}
          {[11,16,21].map(x => (
            <g key={x}>
              <line x1={x} y1="6" x2={x} y2="9" stroke="rgba(212,175,100,0.55)" strokeWidth="1" strokeLinecap="round"/>
              <line x1={x} y1="23" x2={x} y2="26" stroke="rgba(212,175,100,0.55)" strokeWidth="1" strokeLinecap="round"/>
            </g>
          ))}
        </svg>
      </div>

      {/* R3 — Torus/donut, bottom-right */}
      <div
        className="floating-decor decor-torus"
        style={{
          width: 52, height: 52,
          right: "4%", top: "70%",
          opacity: 0.5,
          animation: "floatF 9.5s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />

      {/* Optional L4 — tiny orb, far bottom-left */}
      <div
        className="floating-decor decor-orb"
        style={{
          width: 30, height: 30,
          left: "6%", top: "84%",
          opacity: 0.3,
          animation: "floatB 13s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />
    </>
  );
}
