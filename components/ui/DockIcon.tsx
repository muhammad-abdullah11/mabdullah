"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface DockIconProps {
  icon: any;
  label: string;
  isOpen: boolean;
  onClick: () => void;
  mouseX: ReturnType<typeof useMotionValue<number>>;
}

export default function DockIcon({ icon: Icon, label, isOpen, onClick, mouseX }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-120, 0, 120], [48, 68, 48]);
  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 200, damping: 12 });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center cursor-pointer group"
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <motion.div
          style={{ width, height: width }}
          className="flex items-center justify-center rounded-2xl select-none
            bg-white/10 backdrop-blur-sm border border-white/20
            shadow-lg group-hover:shadow-blue-500/20 transition-shadow duration-200"
        >
          {typeof Icon === 'string' ? Icon : <Icon size={24} className="text-white" />}
        </motion.div>
        {isOpen && (
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80" />
        )}
      </div>
      <motion.div
        className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs text-white font-medium
          bg-black/60 backdrop-blur-md rounded-lg border border-white/20 whitespace-nowrap
          opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={false}
        transition={{ duration: 0.15 }}
      >
        {label}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/60" />
      </motion.div>
    </motion.div>
  );
}
