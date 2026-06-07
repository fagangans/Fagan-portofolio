"use client";
import { useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/store/gameStore";
import ProgressBar from "@/components/ProgressBar";

interface Question {
  id: number;
  type: "multiple-choice" | "translate";
  prompt: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    prompt: "Apa artinya kata ini?",
    question: "🏠 rumah",
    options: ["house", "school", "car", "tree"],
    correct: 0,
    explanation: "'Rumah' artinya 'house' dalam bahasa Inggris.",
  },
  {
    id: 2,
    type: "translate",
    prompt: "Terjemahkan ke dalam bahasa Indonesia:",
    question: "The kitchen is big.",
    options: ["Dapur itu besar.", "Kamar itu besar.", "Ruang tamu itu besar.", "Kamar mandi itu besar."],
    correct: 0,
    explanation: "'Kitchen' = dapur, 'big' = besar.",
  },
  {
    id: 3,
    type: "multiple-choice",
    prompt: "Pilih gambar yang sesuai:",
    question: "🛏️ kamar tidur",
    options: ["bedroom", "living room", "bathroom", "garage"],
    correct: 0,
  },
  {
    id: 4,
    type: "multiple-choice",
    prompt: "Apa artinya?",
    question: "🪟 jendela",
    options: ["door", "window", "wall", "floor"],
    correct: 1,
  },
  {
    id: 5,
    type: "translate",
    prompt: "Terjemahkan ke bahasa Indonesia:",
    question: "This is my room.",
    options: ["Ini kamarku.", "Itu kamarku.", "Ini rumahku.", "Itu rumahku."],
    correct: 0,
  },
];

export default function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { addXP, completeLesson } = useGameStore();
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [finished, setFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const question = QUESTIONS[currentQ];
  const progress = (currentQ / QUESTIONS.length) * 100;

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    const isCorrect = idx === question.correct;
    setCorrect(isCorrect);
    setShowResult(true);
    if (isCorrect) {
      setCorrectCount((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (currentQ + 1 >= QUESTIONS.length) {
      const gained = correctCount * 20;
      setXpGained(gained);
      addXP(gained);
      const lessonId = parseInt(resolvedParams.id) || 0;
      if (!isNaN(lessonId)) completeLesson(lessonId);
      setFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowResult(false);
      setCorrect(false);
    }
  };

  if (finished) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-white px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-8xl mb-6">🎉</div>
          <h1 className="font-black text-3xl text-gray-800 mb-2">Luar Biasa!</h1>
          <p className="text-gray-500 text-base mb-6">
            Kamu menjawab {correctCount} dari {QUESTIONS.length} pertanyaan dengan benar!
          </p>
          <div className="bg-yellow-50 rounded-3xl p-5 mb-6">
            <p className="text-yellow-600 font-black text-4xl">+{xpGained} XP</p>
            <p className="text-yellow-500 text-sm mt-1">XP diperoleh</p>
          </div>
          <motion.button
            className="w-full py-4 rounded-full text-white font-black text-base uppercase"
            style={{ background: "#58CC02", boxShadow: "0 4px 0 #45A800" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97, y: 3 }}
            onClick={() => router.push("/")}
          >
            LANJUTKAN
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 pt-10 pb-4">
        <motion.button
          className="text-gray-400 text-xl font-bold"
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push("/")}
        >
          ✕
        </motion.button>
        <div className="flex-1">
          <ProgressBar value={progress} max={100} color="#58CC02" height={10} />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-base">❤️</span>
          <span className="text-sm font-bold text-[#FF4B4B]">5</span>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 px-5 pt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-gray-500 text-sm font-semibold mb-2">{question.prompt}</p>
            <p className="text-gray-800 font-black text-2xl mb-8">{question.question}</p>

            <div className="space-y-3">
              {question.options.map((option, idx) => {
                let bgColor = "white";
                let borderColor = "#e5e7eb";
                let textColor = "#374151";

                if (showResult) {
                  if (idx === question.correct) {
                    bgColor = "#D7FFB8";
                    borderColor = "#58CC02";
                    textColor = "#45A800";
                  } else if (idx === selected && idx !== question.correct) {
                    bgColor = "#FFDDDD";
                    borderColor = "#FF4B4B";
                    textColor = "#CC3C3C";
                  }
                } else if (idx === selected) {
                  bgColor = "#E8F8FF";
                  borderColor = "#1CB0F6";
                }

                return (
                  <motion.button
                    key={idx}
                    className="w-full text-left px-4 py-3.5 rounded-2xl font-semibold text-base border-2 border-b-4"
                    style={{
                      background: bgColor,
                      borderColor,
                      color: textColor,
                    }}
                    whileHover={{ scale: showResult ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect(idx)}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Result feedback */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className={`px-5 pt-4 pb-10 ${correct ? "bg-[#D7FFB8]" : "bg-[#FFDDDD]"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{correct ? "✅" : "❌"}</span>
              <p className={`font-black text-base ${correct ? "text-[#45A800]" : "text-[#CC3C3C]"}`}>
                {correct ? "Luar biasa!" : "Kurang tepat"}
              </p>
            </div>
            {!correct && question.explanation && (
              <p className="text-sm text-gray-600 mb-3">{question.explanation}</p>
            )}
            <motion.button
              className={`w-full py-3.5 rounded-full text-white font-black text-sm uppercase`}
              style={{
                background: correct ? "#58CC02" : "#FF4B4B",
                boxShadow: `0 4px 0 ${correct ? "#45A800" : "#CC3C3C"}`,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97, y: 3 }}
              onClick={handleNext}
            >
              {currentQ + 1 >= QUESTIONS.length ? "SELESAI" : "LANJUTKAN"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Check button when nothing selected */}
      {!showResult && (
        <div className="px-5 pb-10">
          <motion.button
            className="w-full py-3.5 rounded-full text-white font-black text-sm uppercase"
            style={{
              background: selected !== null ? "#58CC02" : "#e5e7eb",
              boxShadow: selected !== null ? "0 4px 0 #45A800" : "0 4px 0 #c5c5c5",
              color: selected !== null ? "white" : "#AFAFAF",
            }}
            whileHover={{ scale: selected !== null ? 1.03 : 1 }}
            whileTap={{ scale: selected !== null ? 0.97 : 1 }}
            onClick={() => selected !== null && handleSelect(selected)}
            disabled={selected === null}
          >
            PERIKSA
          </motion.button>
        </div>
      )}
    </div>
  );
}
