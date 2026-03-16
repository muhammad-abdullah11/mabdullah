"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Twitter, Code2, Globe, Server, Database, Palette } from "lucide-react";

const skills = [
  { icon: <Code2 size={18} />, name: "React / Next.js", level: 95 },
  { icon: <Server size={18} />, name: "Node.js / Express", level: 88 },
  { icon: <Database size={18} />, name: "PostgreSQL / MongoDB", level: 82 },
  { icon: <Palette size={18} />, name: "UI/UX Design", level: 85 },
  { icon: <Globe size={18} />, name: "TypeScript", level: 90 },
];

const timeline = [
  { year: "2024–Now", title: "Senior Full Stack Developer", sub: "Freelance & Remote Projects" },
  { year: "2022–2024", title: "Frontend Developer", sub: "Various Startups" },
  { year: "2020–2022", title: "BSc Computer Science", sub: "University Graduate" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutMe() {
  return (
    <motion.div
      className="p-6 h-full overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative flex-shrink-0">
            <div className="w-28 h-28 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl"
              style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
              <div className="w-full h-full flex items-center justify-center text-6xl select-none">👨‍💻</div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#0f0f19]" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <motion.h1 variants={itemVariants} className="text-2xl font-bold text-white mb-1">
              Muhammad Abdullah
            </motion.h1>
            <div className="text-blue-400 font-mono text-sm mb-3 h-6">
              <TypeAnimation
                sequence={["Full Stack Developer", 2000, "UI/UX Designer", 2000, "Problem Solver", 2000]}
                repeat={Infinity}
                speed={50}
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Crafting premium digital experiences with modern technologies. Passionate about building
              scalable apps that make a real impact.
            </p>
            <div className="flex gap-3 mt-4 justify-center sm:justify-start">
              {[
                { icon: <Github size={16} />, href: "https://github.com/muhammad-abdullah11" },
                { icon: <Linkedin size={16} />, href: "https://linkedin.com" },
                { icon: <Twitter size={16} />, href: "https://twitter.com" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Skills</h2>
          <div className="space-y-3">
            {skills.map((skill, i) => (
              <motion.div key={i} variants={itemVariants} className="flex items-center gap-3">
                <div className="text-blue-400 w-5">{skill.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-white/40">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #3B82F6, #8B5CF6)" }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Timeline</h2>
          <div className="relative pl-4 border-l border-white/10 space-y-6">
            {timeline.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="relative">
                <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0f0f19]" />
                <div className="text-[11px] text-blue-400 font-mono mb-0.5">{item.year}</div>
                <div className="text-white/90 font-semibold text-sm">{item.title}</div>
                <div className="text-white/50 text-xs">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
