"use client";
import { motion } from "framer-motion";
import { Layout, Palette, Server, Zap, Smartphone, Search, Terminal, Database } from "lucide-react";

const SERVICES = [
  {
    title: "Full-Stack Development",
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    desc: "Building production-grade, scalable web applications using React 19, Next.js, and the MERN stack.",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "UI/UX Architecture",
    icon: <Palette className="w-8 h-8 text-purple-400" />,
    desc: "Crafting premium, high-fidelity interfaces with glassmorphism and liquid animations.",
    colSpan: "col-span-1",
  },
  {
    title: "Backend Excellence",
    icon: <Server className="w-8 h-8 text-green-400" />,
    desc: "Designing robust API architectures and handling complex database schemas for high-traffic apps.",
    colSpan: "col-span-1",
  },
  {
    title: "API Integration",
    icon: <Terminal className="w-8 h-8 text-blue-300" />,
    desc: "Seamlessly connecting third-party services like Stripe, Cloudinary, and Google Maps.",
    colSpan: "col-span-1",
  },
  {
    title: "Performance Optimization",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    desc: "Auditing and optimizing load times and rendering performance for maximum efficiency.",
    colSpan: "col-span-1",
  },
  {
    title: "Mobile App Strategy",
    icon: <Smartphone className="w-8 h-8 text-pink-400" />,
    desc: "Developing cross-platform mobile experiences and progressive web applications.",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Technical SEO",
    icon: <Search className="w-8 h-8 text-emerald-400" />,
    desc: "Enhancing search visibility through optimized metadata, structure, and performance metrics.",
    colSpan: "col-span-1",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export default function Services() {
  return (
    <div className="relative w-full h-full p-6 overflow-y-auto">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Professional Expertise</h2>
          <p className="text-white/60">Delivering end-to-end digital excellence with modern stacks</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-6 transition-all hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 ${s.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-6 flex items-center text-xs font-medium text-white/40 group-hover:text-blue-400 transition-colors uppercase tracking-widest cursor-pointer">
                  Inquire Now <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
