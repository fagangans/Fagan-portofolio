"use client";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/gameStore";
import LessonNode from "./LessonNode";

type NodeType = "book" | "headphone" | "translate" | "dumbbell" | "video" | "speaking";
type Position = "left" | "center" | "right";

const PATH_NODES: Array<{ type: NodeType; position: Position }> = [
  { type: "book", position: "center" },
  { type: "headphone", position: "right" },
  { type: "translate", position: "right" },
  { type: "book", position: "center" },
  { type: "speaking", position: "left" },
  { type: "headphone", position: "left" },
  { type: "dumbbell", position: "center" },
  { type: "video", position: "right" },
  { type: "book", position: "right" },
  { type: "translate", position: "center" },
  { type: "speaking", position: "left" },
  { type: "headphone", position: "left" },
  { type: "book", position: "center" },
  { type: "dumbbell", position: "right" },
  { type: "video", position: "right" },
  { type: "translate", position: "center" },
  { type: "speaking", position: "left" },
  { type: "book", position: "left" },
  { type: "headphone", position: "center" },
  { type: "dumbbell", position: "right" },
];

const getMargin = (pos: Position) => {
  if (pos === "left") return { marginLeft: 24, marginRight: "auto" };
  if (pos === "right") return { marginLeft: "auto", marginRight: 24 };
  return { marginLeft: "auto", marginRight: "auto" };
};

export default function LessonPath() {
  const { completedLessons, activeLessonIndex } = useGameStore();

  return (
    <div className="pb-10 pt-2" style={{ background: "#FFFFFF" }}>
      {/* Vertical path line */}
      <div className="relative">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 pointer-events-none"
          style={{ background: "repeating-linear-gradient(to bottom, #E0E0E0 0, #E0E0E0 8px, transparent 8px, transparent 16px)" }}
        />

        <div className="flex flex-col">
          {PATH_NODES.map((node, i) => {
            const state = completedLessons.includes(i)
              ? "completed"
              : i === activeLessonIndex
              ? "active"
              : "locked";

            const showStars = i > 0 && i % 5 === 0 && state !== "locked";
            const showChest = i > 0 && i % 8 === 0;

            return (
              <div key={i}>
                {showChest && (
                  <motion.div
                    className="flex justify-center my-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.04, type: "spring" }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                        style={{ background: "#F5F5F5", boxShadow: "0 4px 0 #CCCCCC", border: "2px solid #E5E5E5" }}
                      >
                        🧰
                      </div>
                    </div>
                  </motion.div>
                )}

                {showStars && (
                  <div className="flex justify-center gap-2 my-1">
                    {[0, 1, 2].map(s => (
                      <span key={s} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                )}

                <motion.div
                  className="flex relative z-10"
                  style={{ height: 96, alignItems: "center" }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div style={{ ...getMargin(node.position) }}>
                    <LessonNode id={i} type={node.type} state={state} />
                  </div>
                </motion.div>

                {!showStars && state === "completed" && i % 3 === 2 && (
                  <div className="flex justify-center gap-1.5 -mt-2 mb-1">
                    {[0, 1, 2].map(s => (
                      <span key={s} className="text-yellow-300 text-sm">☆</span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* NPC at bottom */}
        <div className="flex flex-col items-start px-4 mt-4 gap-2">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-4xl">
              🧙
            </div>
            <div
              className="rounded-full px-5 py-2"
              style={{ background: "#58CC02", boxShadow: "0 3px 0 #45A800" }}
            >
              <span className="text-white font-black text-sm">CATUR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
