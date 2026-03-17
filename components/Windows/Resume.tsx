"use client";
import { motion } from "framer-motion";
import { Download, GraduationCap, Code2, Database, Layout, Terminal, Globe, Award } from "lucide-react";

const SUMMARY = "I'm a passionate full-stack developer who transforms ideas into exceptional digital experiences. With expertise in modern web technologies and a keen eye for design, I build scalable, user-centric applications that drive business growth. I combine technical excellence with creative problem-solving, ensuring every project not only meets requirements but exceeds expectations.";

const EDUCATION = [
  {
    role: "BS Computer Science",
    company: "NUML University, Faisalabad",
    date: "2024 - 2028",
    details: ["Focused on Software Engineering, Data Structures, and Algorithmic Thinking.", "Building a solid foundation in core computer science principles."],
  },
  {
    role: "F.Sc. Pre-Medical",
    company: "Superior College, Toba Tek Singh",
    date: "2021 - 2023",
    details: ["Developed strong analytical and observation skills through scientific study."],
  },
  {
    role: "Matriculation (Science)",
    company: "Govt. High School, Rajana",
    date: "2019 - 2021",
    details: ["Initiated interest in technology and computational logic."],
  },
];

const SKILLS = [
  { category: "Frontend", items: ["React 19", "Next.js 15", "Tailwind CSS v4", "Framer Motion", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express v5", "MongoDB", "Mongoose", "Socket.IO"] },
  { category: "Tools", items: ["Git", "GitHub Actions", "Vercel", "Cloudinary", "Postman"] },
];

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Resume() {
  return (
    <div className="relative w-full h-full p-6 overflow-y-auto bg-[#0a0a0f]">
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none -z-10" />

      <motion.div
        className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-12 right-12 hidden md:block">
          <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-2xl text-sm font-bold hover:bg-neutral-200 transition-all shadow-xl">
            <Download size={18} /> Download CV
          </button>
        </div>

        <motion.div variants={fadeVariants} className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            Available for hire
          </div>
          <h1 className="text-5xl font-bold text-white tracking-tight mb-4">Muhammad Abdullah</h1>
          <p className="text-white/40 text-lg font-medium flex items-center gap-4">
            Full-Stack Developer <span className="w-2 h-2 rounded-full bg-blue-600" /> Faisalabad, Pakistan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-16">
            <motion.section variants={fadeVariants}>
              <h2 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-blue-500" /> Summary
              </h2>
              <p className="text-white/60 text-lg leading-relaxed font-light italic">
                "{SUMMARY}"
              </p>
            </motion.section>

            <motion.section variants={fadeVariants}>
              <h2 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-purple-500" /> Academic Background
              </h2>
              <div className="space-y-12">
                {EDUCATION.map((item, i) => (
                  <div key={i} className="group relative pl-10">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h3 className="text-white text-xl font-bold">{item.role}</h3>
                      <span className="text-blue-400 text-xs font-mono uppercase tracking-widest">{item.date}</span>
                    </div>
                    <div className="text-white/30 text-sm mb-4 font-semibold">{item.company}</div>
                    <ul className="space-y-2">
                       {item.details.map((d, k) => (
                         <li key={k} className="text-white/50 text-sm flex items-start gap-3">
                            <div className="mt-2 w-1 h-1 bg-white/20 rounded-full shrink-0" /> {d}
                         </li>
                       ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="space-y-12">
            <motion.section variants={fadeVariants}>
               <h2 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-green-500" /> Technology
              </h2>
              <div className="space-y-8">
                 {SKILLS.map((s, i) => (
                   <div key={i}>
                      <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4">{s.category}</h4>
                      <div className="flex flex-wrap gap-2">
                         {s.items.map(skill => (
                           <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-white/70 text-xs font-medium">
                              {skill}
                           </span>
                         ))}
                      </div>
                   </div>
                 ))}
              </div>
            </motion.section>

            <motion.section variants={fadeVariants} className="p-8 rounded-3xl bg-blue-600/5 border border-blue-600/10">
               <Award className="text-blue-500 mb-4" size={32} />
               <h3 className="text-white font-bold mb-2">Certifications</h3>
               <p className="text-white/40 text-[10px] uppercase tracking-widest leading-loose">
                  MERN STACK PROFESSIONAL<br/>
                  UI/UX FUNDAMENTALS<br/>
                  RESPONSIVE WEB DESIGN
               </p>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
