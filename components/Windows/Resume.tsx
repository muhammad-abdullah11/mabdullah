"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const SECTIONS = [
  {
    title: "Summary",
    content: "Senior Full Stack Developer with 4+ years of experience building scalable, high-performance web applications using modern technologies. Passionate about UX/UI and creating beautiful digital experiences.",
  },
  {
    title: "Experience",
    items: [
      {
        role: "Senior Full Stack Developer",
        company: "Freelance",
        date: "2024 - Present",
        details: [
          "Developed high-traffic applications using Next.js 14, React, and Node.js.",
          "Implemented real-time features using WebSockets and optimized PostgreSQL queries.",
          "Designed premium UI/UX implementations using Tailwind CSS and Framer Motion.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Tech Startup Inc",
        date: "2022 - 2024",
        details: [
          "Migrated legacy codebase to React and TypeScript, reducing bugs by 40%.",
          "Built a comprehensive component library used across 3 company products.",
        ],
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        role: "BSc Computer Science",
        company: "University of Technology",
        date: "2018 - 2022",
        details: ["Graduated with Honors. Specialized in Software Engineering and Human-Computer Interaction."],
      },
    ],
  },
];

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Resume() {
  return (
    <div className="relative w-full h-full p-6 overflow-y-auto bg-white/5">
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none -z-10" />

      <motion.div
        className="max-w-3xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-8 right-8">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all border border-white/10"
          >
            <Download size={16} /> Download PDF
          </a>
        </div>

        <motion.div variants={fadeVariants} className="mb-10">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">Muhammad Abdullah</h1>
          <p className="text-blue-400 font-mono">Senior Full Stack Developer</p>
        </motion.div>

        <div className="space-y-10">
          {SECTIONS.map((sec, i) => (
            <motion.section key={i} variants={fadeVariants}>
              <h2 className="text-xl font-semibold text-white/90 border-b border-white/10 pb-2 mb-4">
                {sec.title}
              </h2>

              {sec.content ? (
                <p className="text-white/70 text-sm leading-relaxed">{sec.content}</p>
              ) : (
                <div className="space-y-6">
                  {sec.items?.map((item, j) => (
                    <div key={j} className="relative pl-4 border-l-2 border-white/10">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-blue-500" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                        <h3 className="text-white font-medium">{item.role}</h3>
                        <span className="text-blue-400 text-xs font-mono">{item.date}</span>
                      </div>
                      <div className="text-white/50 text-sm mb-3">{item.company}</div>
                      <ul className="list-disc list-inside space-y-1.5 text-white/70 text-sm">
                        {item.details.map((d, k) => (
                          <li key={k} className="leading-relaxed">{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.section>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
