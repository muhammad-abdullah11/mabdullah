"use client";
import { motion } from "framer-motion";

interface TrafficLightsProps {
  onClose: () => void;
  onMinimize: () => void;
  onFullscreen: () => void;
}

export default function TrafficLights({ onClose, onMinimize, onFullscreen }: TrafficLightsProps) {
  return (
    <div className="flex items-center gap-2 group">
      <motion.button
        id="window-close-btn"
        className="w-3 h-3 rounded-full bg-[#FF5F56] flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <span className="text-[8px] text-[#7a1208] font-bold opacity-0 group-hover:opacity-100 leading-none">✕</span>
      </motion.button>
      <motion.button
        id="window-minimize-btn"
        className="w-3 h-3 rounded-full bg-[#FFBD2E] flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => { e.stopPropagation(); onMinimize(); }}
      >
        <span className="text-[8px] text-[#7a5b00] font-bold opacity-0 group-hover:opacity-100 leading-none">−</span>
      </motion.button>
      <motion.button
        id="window-fullscreen-btn"
        className="w-3 h-3 rounded-full bg-[#27C93F] flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => { e.stopPropagation(); onFullscreen(); }}
      >
        <span className="text-[8px] text-[#0a5c14] font-bold opacity-0 group-hover:opacity-100 leading-none">+</span>
      </motion.button>
    </div>
  );
}
