"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wifi, Battery, Volume2 } from "lucide-react";

export default function MenuBar() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }));
      setDate(now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-8 flex items-center justify-between px-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(20px)" }}
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-5">
        <div className="w-5 h-5 rounded bg-white flex items-center justify-center text-[10px] font-bold text-black select-none">MA</div>
        <span className="text-white/90 text-[13px] font-semibold select-none">Muhammad Abdullah</span>
        <span className="text-white/70 text-[13px] select-none hidden sm:block">File</span>
        <span className="text-white/70 text-[13px] select-none hidden sm:block">Edit</span>
        <span className="text-white/70 text-[13px] select-none hidden sm:block">View</span>
        <span className="text-white/70 text-[13px] select-none hidden sm:block">Window</span>
      </div>

      <div className="flex items-center gap-3">
        <Volume2 size={14} className="text-white/80" />
        <Wifi size={14} className="text-white/80" />
        <Battery size={14} className="text-white/80" />
        <span className="text-white/90 text-[12px] font-medium select-none hidden sm:flex gap-1">
          <span>{date}</span>
          <span>{time}</span>
        </span>
        <span className="text-white/90 text-[12px] font-medium select-none sm:hidden">{time}</span>
      </div>
    </motion.div>
  );
}
