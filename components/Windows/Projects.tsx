"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import WindowWrapper from "./WindowWrapper";

const PROJECTS = [
  {
    id: "p1",
    title: "AI Chat Interface",
    description: "A sleek, responsive chat interface designed for modern AI models with markdown support.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "#",
    live: "#",
    details: "Built with Next.js App Router and Framer Motion, this chat interface features real-time streaming responses, markdown rendering, and a beautiful dark mode with glassmorphism effects.",
  },
  {
    id: "p2",
    title: "E-Commerce Dashboard",
    description: "Full-stack dashboard for managing products, orders, and customer analytics in real-time.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    github: "#",
    live: "#",
    details: "A comprehensive solution for store owners. Integrates with Stripe for payments and uses server-side rendering for optimal performance.",
  },
  {
    id: "p3",
    title: "Portfolio OS",
    description: "Interactive macOS-style portfolio with draggable windows and slick animations.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "#",
    details: "The project you are looking at right now! Built from scratch to replicate a desktop environment using web technologies.",
  },
  {
    id: "p4",
    title: "Task Management App",
    description: "Collaborative kanban board with real-time updates and drag-drop functionality.",
    tech: ["React", "Node.js", "Socket.IO"],
    github: "#",
    live: "#",
    details: "Real-time task synchronization across multiple clients using WebSockets. Includes user authentication and role-based access control.",
  },
];

const FILTERS = ["All", "React", "Next.js", "TypeScript", "Node.js"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const filtered = PROJECTS.filter((p) => filter === "All" || p.tech.includes(filter));
  const activeProjectData = PROJECTS.find((p) => p.id === activeProject);

  return (
    <div className="relative w-full h-full p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                filter === f
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className="relative group p-2 rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setActiveProject(project.id)}
            >
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.div
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                    className="absolute inset-0 bg-white/[0.08] rounded-2xl -z-10 backdrop-blur-sm"
                  />
                )}
              </AnimatePresence>

              <div className="h-full bg-white/[0.02] border border-white/10 rounded-xl p-5 flex flex-col items-start transition-colors group-hover:bg-white/[0.04] group-hover:border-white/20 shadow-xl">
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-white/60 text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/10 text-white/80 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-white/50 w-full" onClick={(e) => e.stopPropagation()}>
                  <a href={project.github} className="hover:text-white flex items-center gap-1 text-sm transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.live} className="hover:text-white flex items-center gap-1 text-sm transition-colors ml-auto">
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProjectData && (
        <WindowWrapper
          id={`proj-${activeProjectData.id}`}
          title={activeProjectData.title}
          icon="📂"
          onClose={() => setActiveProject(null)}
          onMinimize={() => {}}
          onFocus={() => {}}
          onFullscreen={() => {}}
          zIndex={999}
          isFullscreen={false}
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{activeProjectData.title}</h2>
            <div className="w-full h-48 bg-white/5 border border-white/10 rounded-xl mb-6 flex items-center justify-center text-white/20">
              [Screenshot Placeholder]
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {activeProjectData.details}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {activeProjectData.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </WindowWrapper>
      )}
    </div>
  );
}
