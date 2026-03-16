"use client";
import { motion } from "framer-motion";

export default function Wallpaper() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img
          src="/wallpaper.jpg"
          alt="Desktop Wallpaper"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/40 pointer-events-none" />
    </div>
  );
}
