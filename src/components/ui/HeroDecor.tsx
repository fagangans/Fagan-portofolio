"use client";

/*
 * HeroDecor — premium CSS-only decorative layer for the hero section.
 * All elements are pointer-events:none and sit behind main content (z-[2]).
 * Delete this file + its import in HeroSection.tsx to fully revert.
 */

export default function HeroDecor() {
  return (
    <>
      <style>{`

        /* ══════════════════════════════════════════════════════
           KEYFRAMES
        ══════════════════════════════════════════════════════ */

        /* Slow rotation for the orbital ring */
        @keyframes ringRotate {
          from { transform: perspective(900px) rotateX(68deg) rotateZ(0deg); }
          to   { transform: perspective(900px) rotateX(68deg) rotateZ(360deg); }
        }
        /* Second ring counter-rotate */
        @keyframes ringRotateRev {
          from { transform: perspective(900px) rotateX(72deg) rotateZ(0deg) scale(0.75); }
          to   { transform: perspective(900px) rotateX(72deg) rotateZ(-360deg) scale(0.75); }
        }
        /* Orbiting glow dot travels elliptical path */
        @keyframes orbitDot {
          0%   { transform: translate(-200px,  0px)   scale(1);    opacity: 0.9; }
          15%  { transform: translate(-120px, -52px)  scale(1.15); opacity: 1;   }
          25%  { transform: translate(  0px, -66px)   scale(1.2);  opacity: 1;   }
          40%  { transform: translate( 120px, -52px)  scale(1.1);  opacity: 1;   }
          50%  { transform: translate( 200px,  0px)   scale(1);    opacity: 0.9; }
          65%  { transform: translate( 120px,  52px)  scale(0.85); opacity: 0.6; }
          75%  { transform: translate(   0px,  66px)  scale(0.8);  opacity: 0.5; }
          90%  { transform: translate(-120px,  52px)  scale(0.85); opacity: 0.6; }
          100% { transform: translate(-200px,  0px)   scale(1);    opacity: 0.9; }
        }
        /* Second dot, offset phase */
        @keyframes orbitDot2 {
          0%   { transform: translate( 160px,  0px)   scale(0.9);  opacity: 0.7; }
          25%  { transform: translate(   0px, -52px)  scale(1.1);  opacity: 0.9; }
          50%  { transform: translate(-160px,  0px)   scale(0.9);  opacity: 0.7; }
          75%  { transform: translate(   0px,  52px)  scale(0.75); opacity: 0.4; }
          100% { transform: translate( 160px,  0px)   scale(0.9);  opacity: 0.7; }
        }

        /* Medal / trophy float */
        @keyframes medalFloat {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-20px) rotate(2deg); }
        }
        /* Aura glow pulse behind medal */
        @keyframes auraPulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50%       { opacity: 0.42; transform: scale(1.08); }
        }

        /* Left shapes */
        @keyframes floatSphere {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-16px) rotate(5deg); }
        }
        @keyframes floatCube {
          0%, 100% { transform: translateY(0px) rotate(18deg); }
          50%       { transform: translateY(14px) rotate(26deg); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        /* ══════════════════════════════════════════════════════
           ORBITAL RING
        ══════════════════════════════════════════════════════ */

        .hero-ring-wrap {
          position: absolute;
          left: 50%;
          top: 42%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-ring {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform-origin: center center;
        }

        /* Outer ring */
        .hero-ring-outer {
          width: 480px; height: 480px;
          margin: -240px 0 0 -240px;
          border: 1.5px solid transparent;
          background:
            linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)) padding-box,
            conic-gradient(
              from 0deg,
              rgba(212,175,100,0)    0%,
              rgba(212,175,100,0.5)  20%,
              rgba(255,235,160,0.8)  35%,
              rgba(212,175,100,0.5)  50%,
              rgba(212,175,100,0)    70%,
              rgba(212,175,100,0)   100%
            ) border-box;
          box-shadow: 0 0 30px rgba(212,175,100,0.08);
          animation: ringRotate 22s linear infinite;
          opacity: 0.28;
        }

        /* Inner ring (counter-rotate, smaller) */
        .hero-ring-inner {
          width: 480px; height: 480px;
          margin: -240px 0 0 -240px;
          border: 1px solid transparent;
          background:
            linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)) padding-box,
            conic-gradient(
              from 180deg,
              rgba(212,175,100,0)    0%,
              rgba(212,175,100,0.35) 25%,
              rgba(255,235,160,0.6)  40%,
              rgba(212,175,100,0.35) 55%,
              rgba(212,175,100,0)    75%,
              rgba(212,175,100,0)   100%
            ) border-box;
          animation: ringRotateRev 30s linear infinite;
          opacity: 0.22;
        }

        /* Orbiting glow dot — rides the outer ring */
        .hero-orbit-dot-wrap {
          position: absolute;
          top: 50%; left: 50%;
          width: 0; height: 0;
          pointer-events: none;
        }
        .hero-orbit-dot {
          position: absolute;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,240,180,1) 0%, rgba(212,175,100,0.6) 60%, transparent 100%);
          box-shadow: 0 0 12px 4px rgba(212,175,100,0.7), 0 0 24px 8px rgba(212,175,100,0.3);
          top: -3.5px; left: -3.5px;
          animation: orbitDot 22s linear infinite;
        }
        .hero-orbit-dot-2 {
          position: absolute;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,240,180,0.9) 0%, rgba(212,175,100,0.4) 70%, transparent 100%);
          box-shadow: 0 0 8px 3px rgba(212,175,100,0.5);
          top: -2px; left: -2px;
          animation: orbitDot2 30s linear infinite;
        }

        /* ══════════════════════════════════════════════════════
           MEDAL / TROPHY
        ══════════════════════════════════════════════════════ */

        .hero-medal-wrap {
          position: absolute;
          right: 5%;
          top: 22%;
          pointer-events: none;
          animation: medalFloat 8s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        /* Soft aura behind medal */
        .hero-medal-aura {
          position: absolute;
          width: 160px; height: 160px;
          top: 50%; left: 50%;
          margin: -80px 0 0 -80px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(212,175,100,0.28) 0%,
            rgba(212,175,100,0.1)  45%,
            transparent 70%
          );
          animation: auraPulse 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        /* ══════════════════════════════════════════════════════
           LEFT SHAPES
        ══════════════════════════════════════════════════════ */

        .hero-sphere {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle at 32% 30%,
            rgba(255,245,200,0.18) 0%,
            rgba(212,175,100,0.32) 30%,
            rgba(30,25,10,0.55)   70%,
            rgba(0,0,0,0.3)      100%
          );
          border: 1px solid rgba(212,175,100,0.2);
          box-shadow:
            inset -8px -8px 20px rgba(0,0,0,0.6),
            inset  5px  5px 14px rgba(255,235,160,0.18),
            0 0 32px rgba(212,175,100,0.12);
          backdrop-filter: blur(2px);
          pointer-events: none;
        }

        .hero-cube {
          position: absolute;
          border-radius: 10px;
          background: linear-gradient(
            140deg,
            rgba(212,175,100,0.3)  0%,
            rgba(25,20,8,0.75)    55%,
            rgba(212,175,100,0.15) 100%
          );
          border: 1px solid rgba(212,175,100,0.22);
          box-shadow:
            inset  3px  3px 10px rgba(255,235,160,0.14),
            inset -3px -3px 10px rgba(0,0,0,0.55),
            0 0 18px rgba(212,175,100,0.07);
          backdrop-filter: blur(3px);
          pointer-events: none;
        }

        .hero-code-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle at 38% 32%,
            rgba(255,255,255,0.07) 0%,
            rgba(212,175,100,0.14) 45%,
            rgba(0,0,0,0.35)      100%
          );
          border: 1px solid rgba(212,175,100,0.18);
          backdrop-filter: blur(5px);
          box-shadow:
            inset  2px  2px 8px rgba(255,235,160,0.1),
            inset -2px -2px 8px rgba(0,0,0,0.5),
            0 0 14px rgba(212,175,100,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        /* ══════════════════════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════════════════════ */

        @media (max-width: 1024px) {
          .hero-ring-outer { width: 360px; height: 360px; margin: -180px 0 0 -180px; }
          .hero-ring-inner { width: 360px; height: 360px; margin: -180px 0 0 -180px; }
          .hero-ring-wrap { top: 44%; }
          .hero-medal-wrap { right: 2%; transform: scale(0.82); }
          .hero-sphere, .hero-cube, .hero-code-orb { opacity: 0.45 !important; }
        }

        @media (max-width: 768px) {
          .hero-ring-outer { width: 300px; height: 300px; margin: -150px 0 0 -150px; opacity: 0.16 !important; }
          .hero-ring-inner { display: none; }
          .hero-orbit-dot  { display: none; }
          .hero-orbit-dot-2 { display: none; }
          .hero-medal-wrap { right: 1%; top: 18%; transform: scale(0.65); opacity: 0.55 !important; }
          .hero-sphere { display: none; }
          .hero-cube { display: none; }
          .hero-code-orb { display: none; }
        }
      `}</style>

      {/* ── Orbital rings + orbiting dots ───────────────────── */}
      <div className="hero-ring-wrap">
        <div className="hero-ring hero-ring-outer" />
        <div className="hero-ring hero-ring-inner" />
        <div className="hero-orbit-dot-wrap">
          <div className="hero-orbit-dot" />
          <div className="hero-orbit-dot-2" />
        </div>
      </div>

      {/* ── Premium Tech Achievement Badge — right side ────── */}
      <div className="hero-medal-wrap" style={{ opacity: 0.90 }}>
        <div className="hero-medal-aura" />
        <svg
          width="130" height="130"
          viewBox="0 0 130 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "relative",
            filter: "drop-shadow(0 0 22px rgba(212,175,100,0.5)) drop-shadow(0 6px 20px rgba(0,0,0,0.7))",
          }}
        >
          <defs>
            {/* Deep metallic gold — light from top-left */}
            <radialGradient id="bGold" cx="36%" cy="30%" r="65%">
              <stop offset="0%"   stopColor="#FFF8D0"/>
              <stop offset="18%"  stopColor="#EDD068"/>
              <stop offset="45%"  stopColor="#C8960A"/>
              <stop offset="75%"  stopColor="#8B6010"/>
              <stop offset="100%" stopColor="#3E2600"/>
            </radialGradient>
            {/* Dark face fill */}
            <radialGradient id="bFace" cx="38%" cy="34%" r="60%">
              <stop offset="0%"   stopColor="#2A2010"/>
              <stop offset="40%"  stopColor="#160E00"/>
              <stop offset="100%" stopColor="#060400"/>
            </radialGradient>
            {/* Glass specular on face */}
            <radialGradient id="bGlass" cx="32%" cy="28%" r="52%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.22)"/>
              <stop offset="55%"  stopColor="rgba(255,255,255,0.04)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
            </radialGradient>
            {/* Edge shadow (gives rim depth) */}
            <radialGradient id="bRimShadow" cx="50%" cy="50%" r="50%">
              <stop offset="60%"  stopColor="rgba(0,0,0,0)"/>
              <stop offset="100%" stopColor="rgba(0,0,0,0.55)"/>
            </radialGradient>
            {/* Star */}
            <linearGradient id="bStar" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#FFFADC"/>
              <stop offset="40%"  stopColor="#EDD068"/>
              <stop offset="100%" stopColor="#8B6010"/>
            </linearGradient>
            {/* Circuit line color */}
            <linearGradient id="bCircuit" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="rgba(212,175,100,0)"/>
              <stop offset="50%"  stopColor="rgba(212,175,100,0.55)"/>
              <stop offset="100%" stopColor="rgba(212,175,100,0)"/>
            </linearGradient>
          </defs>

          {/* ── Ring 1: outermost thin border ── */}
          <circle cx="65" cy="65" r="62"
            fill="none"
            stroke="rgba(212,175,100,0.25)"
            strokeWidth="1"
          />

          {/* ── Ring 2: thick metallic bezel ── */}
          <circle cx="65" cy="65" r="58" fill="url(#bGold)" />
          <circle cx="65" cy="65" r="58" fill="url(#bRimShadow)" />
          {/* Bezel highlight arc */}
          <circle cx="65" cy="65" r="58"
            fill="none"
            stroke="rgba(255,250,200,0.4)"
            strokeWidth="1.2"
            strokeDasharray="80 285"
            strokeDashoffset="-20"
            strokeLinecap="round"
          />

          {/* ── Ring 3: separator groove ── */}
          <circle cx="65" cy="65" r="50"
            fill="none"
            stroke="rgba(0,0,0,0.55)"
            strokeWidth="2.5"
          />
          <circle cx="65" cy="65" r="50"
            fill="none"
            stroke="rgba(255,235,140,0.12)"
            strokeWidth="0.8"
          />

          {/* ── Ring 4: inner ring (thin gold) ── */}
          <circle cx="65" cy="65" r="47"
            fill="none"
            stroke="rgba(212,175,100,0.35)"
            strokeWidth="1"
          />

          {/* ── Badge face (dark glass) ── */}
          <circle cx="65" cy="65" r="45" fill="url(#bFace)" />
          <circle cx="65" cy="65" r="45" fill="url(#bRimShadow)" opacity="0.5" />

          {/* ── Circuit / tech lines on face ── */}
          {/* Horizontal lines left */}
          <line x1="22" y1="58" x2="44" y2="58" stroke="url(#bCircuit)" strokeWidth="0.8"/>
          <line x1="22" y1="65" x2="38" y2="65" stroke="url(#bCircuit)" strokeWidth="0.8"/>
          <line x1="22" y1="72" x2="44" y2="72" stroke="url(#bCircuit)" strokeWidth="0.8"/>
          {/* Connector dots left */}
          <circle cx="44" cy="58" r="1.5" fill="rgba(212,175,100,0.5)"/>
          <circle cx="38" cy="65" r="1.5" fill="rgba(212,175,100,0.5)"/>
          <circle cx="44" cy="72" r="1.5" fill="rgba(212,175,100,0.5)"/>
          {/* Horizontal lines right */}
          <line x1="86" y1="58" x2="108" y2="58" stroke="url(#bCircuit)" strokeWidth="0.8" transform="scale(-1,1) translate(-130,0)"/>
          <line x1="92" y1="65" x2="108" y2="65" stroke="url(#bCircuit)" strokeWidth="0.8" transform="scale(-1,1) translate(-130,0)"/>
          <line x1="86" y1="72" x2="108" y2="72" stroke="url(#bCircuit)" strokeWidth="0.8" transform="scale(-1,1) translate(-130,0)"/>
          {/* Connector dots right */}
          <circle cx="86" cy="58" r="1.5" fill="rgba(212,175,100,0.5)"/>
          <circle cx="92" cy="65" r="1.5" fill="rgba(212,175,100,0.5)"/>
          <circle cx="86" cy="72" r="1.5" fill="rgba(212,175,100,0.5)"/>
          {/* Small vertical ticks around mid ring */}
          {[...Array(16)].map((_, i) => {
            const ang = (i / 16) * Math.PI * 2;
            const r1 = 47, r2 = 43;
            return (
              <line key={i}
                x1={65 + r1 * Math.cos(ang)} y1={65 + r1 * Math.sin(ang)}
                x2={65 + r2 * Math.cos(ang)} y2={65 + r2 * Math.sin(ang)}
                stroke="rgba(212,175,100,0.22)" strokeWidth="0.8"
              />
            );
          })}

          {/* ── Center star ── */}
          <polygon
            points={(() => {
              const pts = [];
              for (let i = 0; i < 10; i++) {
                const ang = (i * 36 - 90) * Math.PI / 180;
                const r  = i % 2 === 0 ? 20 : 9;
                pts.push(`${65 + r * Math.cos(ang)},${65 + r * Math.sin(ang)}`);
              }
              return pts.join(" ");
            })()}
            fill="url(#bStar)"
          />
          {/* Star inner depth shadow */}
          <polygon
            points={(() => {
              const pts = [];
              for (let i = 0; i < 10; i++) {
                const ang = (i * 36 - 90) * Math.PI / 180;
                const r  = i % 2 === 0 ? 20 : 9;
                pts.push(`${65 + r * Math.cos(ang)},${65 + r * Math.sin(ang)}`);
              }
              return pts.join(" ");
            })()}
            fill="url(#bRimShadow)"
            opacity="0.45"
          />
          {/* Star specular */}
          <polygon
            points={(() => {
              const pts = [];
              for (let i = 0; i < 10; i++) {
                const ang = (i * 36 - 90) * Math.PI / 180;
                const r  = i % 2 === 0 ? 20 : 9;
                pts.push(`${65 + r * Math.cos(ang)},${65 + r * Math.sin(ang)}`);
              }
              return pts.join(" ");
            })()}
            fill="none"
            stroke="rgba(255,252,210,0.35)"
            strokeWidth="0.7"
          />

          {/* ── Glass specular on face ── */}
          <circle cx="65" cy="65" r="45" fill="url(#bGlass)" />

          {/* ── Outermost glow arc (top-left, premium sheen) ── */}
          <circle cx="65" cy="65" r="58"
            fill="none"
            stroke="rgba(255,252,200,0.18)"
            strokeWidth="6"
            strokeDasharray="55 310"
            strokeDashoffset="-10"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ── Left side shapes ────────────────────────────────── */}

      {/* L1 — Dark glass sphere */}
      <div
        className="hero-sphere"
        style={{
          width: 80, height: 80,
          left: "3.5%", top: "22%",
          opacity: 0.52,
          animation: "floatSphere 10s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />

      {/* L2 — Gold-black cube */}
      <div
        className="hero-cube"
        style={{
          width: 48, height: 48,
          left: "5%", top: "58%",
          opacity: 0.42,
          animation: "floatCube 9s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      {/* L3 — Code bracket orb */}
      <div
        className="hero-code-orb"
        style={{
          width: 56, height: 56,
          left: "2.5%", top: "40%",
          opacity: 0.5,
          animation: "floatOrb 11s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <span style={{
          fontFamily: "monospace",
          fontSize: 20,
          fontWeight: 700,
          color: "rgba(212,175,100,0.88)",
          letterSpacing: "-2px",
          textShadow: "0 0 10px rgba(212,175,100,0.55)",
          lineHeight: 1,
          userSelect: "none",
        }}>{ }</span>
      </div>
    </>
  );
}
