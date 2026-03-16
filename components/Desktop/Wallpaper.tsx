"use client";
import { motion } from "framer-motion";

interface WallpaperProps {
  src: string;
}

export default function Wallpaper({ src }: WallpaperProps) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        key={src}
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={src}
          alt="Desktop Wallpaper"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/40 pointer-events-none" />
    </div>
  );
}
