"use client";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/gameStore";
import LessonNode from "./LessonNode";

type NodeType = "book" | "headphone" | "translate" | "dumbbell" | "video" | "speaking";

const PATH_NODES: Array<{ type: NodeType }> = [
  { type: "book" },
  { type: "headphone" },
  { type: "translate" },
  { type: "book" },
  { type: "speaking" },
  { type: "headphone" },
  { type: "dumbbell" },
  { type: "video" },
  { type: "book" },
  { type: "translate" },
  { type: "speaking" },
  { type: "headphone" },
  { type: "book" },
  { type: "dumbbell" },
  { type: "video" },
  { type: "translate" },
  { type: "speaking" },
  { type: "book" },
  { type: "headphone" },
  { type: "dumbbell" },
];

// 6-position S-curve rhythm (cycle of 8)
const POSITIONS = [180, 240, 270, 240, 180, 110, 60, 110];

// Chest SVG — gray stone box
function ChestSVG() {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
      <rect x="6" y="26" width="46" height="26" rx="4" fill="#C8C8C8"/>
      <rect x="6" y="18" width="46" height="12" rx="4" fill="#D8D8D8"/>
      <rect x="6" y="24" width="46" height="5" fill="#B0B0B0"/>
      <rect x="22" y="28" width="14" height="10" rx="3" fill="#A0A0A0"/>
      <rect x="26" y="31" width="6" height="4" rx="2" fill="#888"/>
      {/* Metal strap */}
      <rect x="6" y="22" width="46" height="4" rx="2" fill="#999"/>
    </svg>
  );
}

// Chess rook SVG for CATUR NPC
function ChessRookSVG() {
  return (
    <svg width="56" height="64" viewBox="0 0 56 64" fill="none">
      {/* Base */}
      <rect x="8" y="50" width="40" height="10" rx="3" fill="#5C4033"/>
      {/* Body */}
      <rect x="12" y="22" width="32" height="30" rx="2" fill="#795548"/>
      {/* Neck */}
      <rect x="16" y="16" width="24" height="10" rx="2" fill="#6D4C41"/>
      {/* Battlements */}
      <rect x="10" y="8" width="10" height="12" rx="2" fill="#795548"/>
      <rect x="36" y="8" width="10" height="12" rx="2" fill="#795548"/>
      <rect x="23" y="8" width="10" height="12" rx="2" fill="#795548"/>
      {/* Face */}
      <ellipse cx="22" cy="34" rx="3" ry="4" fill="#3E2723"/>
      <ellipse cx="34" cy="34" rx="3" ry="4" fill="#3E2723"/>
      <path d="M22 44 Q28 48 34 44" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export default function LessonPath() {
  const { completedLessons, activeLessonIndex } = useGameStore();

  return (
    <div className="pb-10 pt-2" style={{ background: "#FFFFFF" }}>
      <div className="relative" style={{ width: "100%" }}>
        {PATH_NODES.map((node, i) => {
          const state = completedLessons.includes(i)
            ? "completed"
            : i === activeLessonIndex
            ? "active"
            : "locked";

          const marginLeft = POSITIONS[i % 8];
          const showChest = i > 0 && i % 8 === 0;
          // Stars appear to the right of completed nodes (not active/locked)
          const showStars = state === "completed" && i % 3 === 2;

          return (
            <div key={i}>
              {showChest && (
                <motion.div
                  className="flex items-center my-1"
                  style={{ marginLeft: POSITIONS[i % 8] - 10 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: Math.min(i * 0.03, 0.3), type: "spring" }}
                >
                  <ChestSVG />
                </motion.div>
              )}

              <motion.div
                className="relative flex items-center"
                style={{ height: 96 }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(i * 0.03, 0.3), type: "spring", stiffness: 300, damping: 20 }}
              >
                <div style={{ marginLeft }}>
                  <LessonNode id={i} type={node.type} state={state} />
                </div>

                {/* Stars to the right of the node for milestone lessons */}
                {showStars && (
                  <div
                    className="absolute flex gap-1"
                    style={{ left: marginLeft + 72, top: "50%", transform: "translateY(-50%)" }}
                  >
                    {[0, 1, 2].map(s => (
                      <svg key={s} width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L12 7.5H18L13.5 11L15.5 16.5L10 13.5L4.5 16.5L6.5 11L2 7.5H8L10 2Z"
                          fill="none" stroke="#CCCCCC" strokeWidth="1.5" strokeLinejoin="round"/>
                      </svg>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          );
        })}

        {/* NPC CATUR at bottom */}
        <div className="flex flex-col items-start px-6 mt-6 mb-4 gap-2">
          <ChessRookSVG />
          <div
            className="rounded-full px-5 py-2"
            style={{ background: "#58CC02", boxShadow: "0 3px 0 #45A800" }}
          >
            <span className="text-white font-black text-sm">CATUR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
