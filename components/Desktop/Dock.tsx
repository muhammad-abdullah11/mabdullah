"use client";
import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import DockIcon from "@/components/ui/DockIcon";
import { APPS } from "@/constants/apps";
import { WindowState } from "@/lib/useWindowManager";

interface DockProps {
  windows: WindowState[];
  onIconClick: (id: string) => void;
  isMobile?: boolean;
}

export default function Dock({ windows, onIconClick, isMobile = false }: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const dockRef = useRef<HTMLDivElement>(null);

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-[9990] flex justify-around items-center px-4 py-2 border-t border-white/10"
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(20px)" }}>
        {APPS.map((app) => {
          const winState = windows.find((w) => w.id === app.id);
          const Icon = app.icon;
          return (
            <button
              key={app.id}
              className="flex flex-col items-center gap-1 group"
              onClick={() => onIconClick(app.id)}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center
                transition-all duration-200 ${winState?.isOpen ? "bg-white/20" : "bg-white/10"} border border-white/20`}>
                {typeof Icon === 'string' ? Icon : <Icon size={20} className="text-white" />}
              </div>
              <span className="text-white/70 text-[9px]">{app.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <motion.div
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[9990]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.3 }}
    >
      <div
        ref={dockRef}
        className="flex items-end gap-2 px-4 py-2 rounded-2xl border border-white/20"
        style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(30px)" }}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {APPS.map((app, i) => {
          const winState = windows.find((w) => w.id === app.id);
          return (
            <>
              {i === 2 && (
                <div key="sep" className="w-px h-10 bg-white/20 mx-1 self-center" />
              )}
              <DockIcon
                key={app.id}
                icon={app.icon}
                label={app.label}
                isOpen={winState?.isOpen === true && winState?.isMinimized !== true}
                onClick={() => onIconClick(app.id)}
                mouseX={mouseX}
              />
            </>
          );
        })}
      </div>
    </motion.div>
  );
}
