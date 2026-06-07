import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GameState {
  xp: number;
  streak: number;
  gems: number;
  hearts: number;
  username: string;
  level: number;
  currentUnit: number;
  completedLessons: number[];
  activeLessonIndex: number;
  addXP: (amount: number) => void;
  completeLesson: (id: number) => void;
  spendGems: (amount: number) => void;
  addGems: (amount: number) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      xp: 10,
      streak: 1,
      gems: 274,
      hearts: 25,
      username: "Fagan",
      level: 2,
      currentUnit: 2,
      completedLessons: [0, 1, 2, 3],
      activeLessonIndex: 4,
      addXP: (amount) => set((s) => ({ xp: s.xp + amount })),
      completeLesson: (id) =>
        set((s) => ({
          completedLessons: s.completedLessons.includes(id)
            ? s.completedLessons
            : [...s.completedLessons, id],
          activeLessonIndex: Math.max(s.activeLessonIndex, id + 1),
          xp: s.xp + 20,
        })),
      spendGems: (amount) => set((s) => ({ gems: Math.max(0, s.gems - amount) })),
      addGems: (amount) => set((s) => ({ gems: s.gems + amount })),
    }),
    { name: "duolingo-clone-store" }
  )
);
