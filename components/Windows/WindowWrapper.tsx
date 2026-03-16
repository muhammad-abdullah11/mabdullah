"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rnd } from "react-rnd";
import TrafficLights from "@/components/ui/TrafficLights";

interface WindowWrapperProps {
  id: string;
  title: string;
  icon: string;
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  zIndex: number;
  isFullscreen: boolean;
  onFullscreen: () => void;
  isMobile?: boolean;
  isTablet?: boolean;
}

const DEFAULT_SIZES: Record<string, { w: number; h: number }> = {
  about: { w: 720, h: 520 },
  projects: { w: 860, h: 580 },
  resume: { w: 680, h: 560 },
  services: { w: 780, h: 520 },
  contact: { w: 660, h: 540 },
  default: { w: 700, h: 450 },
};

export default function WindowWrapper({
  id, title, icon, children, onClose, onMinimize, onFocus, zIndex, isFullscreen, onFullscreen, isMobile, isTablet,
}: WindowWrapperProps) {
  const size = DEFAULT_SIZES[id] ?? DEFAULT_SIZES.default;
  const [pos, setPos] = useState({
    x: typeof window !== "undefined" ? Math.max(20, (window.innerWidth - size.w) / 2) : 100,
    y: typeof window !== "undefined" ? Math.max(40, (window.innerHeight - size.h) / 2) : 80,
  });
  const [dim, setDim] = useState({ w: size.w, h: size.h });

  useEffect(() => {
    if (isFullscreen) {
      setPos({ x: 0, y: 32 });
      setDim({ w: window.innerWidth, h: window.innerHeight - 32 - 60 });
    }
  }, [isFullscreen]);

  if (isMobile) {
    return (
      <AnimatePresence>
        <motion.div
          key={id}
          className="fixed inset-x-0 bottom-0 bg-black/80 backdrop-blur-2xl border-t border-white/20 rounded-t-2xl overflow-hidden flex flex-col"
          style={{ zIndex, top: "40px" }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-lg">{icon}</span>
              <span className="text-white/90 font-semibold text-sm">{title}</span>
            </div>
            <TrafficLights onClose={onClose} onMinimize={onClose} onFullscreen={onClose} />
          </div>
          <div className="flex-1 overflow-auto">{children}</div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (isTablet) {
    return (
      <AnimatePresence>
        <motion.div
          key={id}
          className="fixed flex flex-col rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
          style={{
            zIndex,
            top: "10%", left: "5%", right: "5%", bottom: "10%",
            background: "rgba(15,15,25,0.85)",
            backdropFilter: "blur(30px)",
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={onFocus}
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10"
            style={{ background: "rgba(255,255,255,0.04)" }}>
            <TrafficLights onClose={onClose} onMinimize={onMinimize} onFullscreen={onFullscreen} />
            <span className="text-sm">{icon}</span>
            <span className="text-white/80 text-sm font-medium">{title}</span>
          </div>
          <div className="flex-1 overflow-auto">{children}</div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        key={id}
        style={{ position: "fixed", zIndex }}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={onFocus}
      >
        <Rnd
          size={{ width: isFullscreen ? dim.w : dim.w, height: isFullscreen ? dim.h : dim.h }}
          position={{ x: isFullscreen ? 0 : pos.x, y: isFullscreen ? 32 : pos.y }}
          minWidth={380}
          minHeight={280}
          dragHandleClassName="window-drag-handle"
          disableDragging={isFullscreen}
          enableResizing={!isFullscreen}
          onDragStop={(_, d) => setPos({ x: d.x, y: d.y })}
          onResizeStop={(_, __, ref, ___, position) => {
            setDim({ w: parseInt(ref.style.width), h: parseInt(ref.style.height) });
            setPos({ x: position.x, y: position.y });
          }}
          style={{ zIndex }}
        >
          <div
            className="w-full h-full flex flex-col rounded-xl overflow-hidden border border-white/20 shadow-2xl"
            style={{
              background: "rgba(15,15,25,0.82)",
              backdropFilter: "blur(30px)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.1)",
            }}
          >
            <div
              className="window-drag-handle flex items-center gap-3 px-4 py-3 border-b border-white/10 cursor-move flex-shrink-0 select-none"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <TrafficLights onClose={onClose} onMinimize={onMinimize} onFullscreen={onFullscreen} />
              <div className="flex-1 flex items-center justify-center gap-2">
                <span className="text-sm">{icon}</span>
                <span className="text-white/80 text-sm font-medium">{title}</span>
              </div>
            </div>
            <div className="flex-1 overflow-auto text-white/90">{children}</div>
          </div>
        </Rnd>
      </motion.div>
    </AnimatePresence>
  );
}
