"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeProps {
  onComplete: () => void;
}

export default function Welcome({ onComplete }: WelcomeProps) {
  const [phase, setPhase] = useState<"boot" | "progress" | "done">("boot");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("progress"), 800);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase !== "progress") return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => { setPhase("done"); setTimeout(onComplete, 600); }, 400);
          return 100;
        }
        return prev + Math.random() * 8 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "#000" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <motion.div
              className="text-white select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <svg viewBox="0 0 814 1000" fill="currentColor" className="w-20 h-20">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.3-150.3-109.2c-62.3-90.5-120.8-252-122.4-406.9.5-247.9 160-379.6 318.2-380.7 72 0 132 48.3 176.8 48.3 43.6 0 112.4-51.3 192.1-51.3 28.2 0 101.8 15 159.4 75.7z"/>
                <path d="M550 0c-17 0-34.8 2.1-52.3 6.6C469.2 14 434 31.2 416.6 46.8c-15.6 14.2-51.1 57.3-58.2 92.2-.7 3.5-1.3 8.1-1.3 12.5 0 7.4 1.3 15 3.2 20.8 4.8 14.4 18.9 24.6 33.4 24.6 5.8 0 11.6-1.6 16.2-4.5 32.6-20.9 52-44.8 68.2-74 11.6-20.8 27-57.9 27-96.2 0-6.4-1.5-12.5-4.2-20.3C497.9 2.5 522.3 0 550 0z"/>
              </svg>
            </motion.div>

            <AnimatePresence>
              {phase === "progress" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-48 h-1.5 rounded-full bg-white/20 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-white"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <p className="text-white/50 text-xs">Loading portfolio...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
