"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Utensils, Users, GraduationCap, Car, Home, BookOpen, Link2, Music, Gamepad, ShoppingBag, Package, Smartphone, ShieldCheck, Zap } from "lucide-react";
import WindowWrapper from "./WindowWrapper";

const PROJECTS = [
  {
    id: "01",
    title: "PakBites - Food Hub",
    description: "Production-grade MERN platform for restaurant operations with real-time menu management.",
    tech: ["React 19", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/muhammad-abdullah11/pakBites",
    live: "#",
    icon: <Utensils className="w-6 h-6" />,
    size: "col-span-2 row-span-2",
    role: "Lead Full Stack Developer",
    features: ["Dark-mode aesthetic", "Liquid transitions", "Admin analytics dashboard", "Stripe Integration"],
    details: "PakBites is a full-stack food ordering platform designed for high-traffic operations. It features a vibrant dark-mode aesthetic, liquid transitions, and interactive admin analytics dashboards.",
  },
  {
    id: "02",
    title: "Facebook Lite",
    description: "High-performance networking platform with media streaming engines and real-time notifications.",
    tech: ["React 19", "Express.js", "Cloudinary", "JWT"],
    github: "https://github.com/muhammad-abdullah11/facebook",
    live: "#",
    icon: <Users className="w-6 h-6" />,
    size: "col-span-1 row-span-1",
    role: "Full Stack Architect",
    features: ["Mobile transitions for Reels", "Auditory feedback", "Auto-play engine", "OTP Verification"],
    details: "A sophisticated social platform optimized for speed. Includes native-feeling mobile transitions for Reels and Stories, and auditory feedback on interactions.",
  },
  {
    id: "03",
    title: "Scholarly LMS",
    description: "Enterprise education system handling multi-role hierarchies and real-time messaging.",
    tech: ["React", "Socket.io", "Ant Design", "MongoDB"],
    github: "https://github.com/muhammad-abdullah11/NUML-LMS",
    live: "#",
    icon: <GraduationCap className="w-6 h-6" />,
    size: "col-span-1 row-span-2",
    role: "System Architect",
    features: ["Multi-role hierarchies", "Real-time messaging", "Progress charts", "RBAC Security"],
    details: "Digitizes the academic workflow with professional dashboard layouts, live notification streams, and complex data tracking for institutions.",
  },
  {
    id: "04",
    title: "Uber Mobility Clone",
    description: "Ride-hailing app with real-time mapping and fare calculation algorithms.",
    tech: ["React", "Google Maps", "Socket.io", "Node.js"],
    github: "https://github.com/muhammad-abdullah11/uber",
    live: "#",
    icon: <Car className="w-6 h-6" />,
    size: "col-span-1 row-span-1",
    role: "Full Stack Engineer",
    features: ["Vehicle movement simulation", "Fare estimation UI", "Predictive input", "Captain matching"],
    details: "Integrates real-time vehicle movement simulation, floating search bars, and dynamic price estimation UI.",
  },
  {
    id: "05",
    title: "Airbnb Rental Hub",
    description: "Travel marketplace with booking calendars and host toolkits.",
    tech: ["React", "Stripe", "Cloudinary", "Mongoose"],
    github: "https://github.com/muhammad-abdullah11/Airbnb",
    live: "#",
    icon: <Home className="w-6 h-6" />,
    size: "col-span-2 row-span-1",
    role: "Full Stack Developer",
    features: ["Multi-image carousels", "Amenity filtering", "Interactive maps", "Booking engine"],
    details: "Features modern card layouts with multi-image carousels, advanced filtering, and interactive property maps following Airbnb's design system.",
  },
  {
    id: "06",
    title: "Ademy - E-Learning",
    description: "Premium course marketplace with secure payments and progress tracking.",
    tech: ["React 19", "Stripe", "Vite", "OAuth"],
    github: "https://github.com/muhammad-abdullah11/Ademy",
    live: "#",
    icon: <BookOpen className="w-6 h-6" />,
    size: "col-span-1 row-span-1",
    role: "Lead Developer",
    features: ["Seamless video player", "Fluid checkout", "Course discovery", "Instructor dashboard"],
    details: "Bridge for instructors and students featuring seamless video playback, fluid checkout animations, and optimized discovery interfaces.",
  },
  {
    id: "07",
    title: "MiniURL Analytics",
    description: "Link shortening utility with advanced visitor tracking and QR codes.",
    tech: ["Node.js", "MongoDB", "Express", "QR Engine"],
    github: "https://github.com/muhammad-abdullah11/URL-Shortener",
    live: "#",
    icon: <Link2 className="w-6 h-6" />,
    size: "col-span-1 row-span-1",
    role: "Backend Developer",
    features: ["QR Code generation", "Click tracking", "Custom aliases", "Minimalist input"],
    details: "A high-performance utility tool for creating short links with detailed analytics on clicks, geography, and referral sources.",
  },
  {
    id: "08",
    title: "The Rhythm Room",
    description: "Music course platform featuring event galleries and mobile-first design.",
    tech: ["Next.js", "React", "Tailwind", "shadcn/ui"],
    github: "https://github.com/muhammad-abdullah11/the-rhythm-room",
    live: "https://the-rhythm-room.vercel.app",
    icon: <Music className="w-6 h-6" />,
    size: "col-span-1 row-span-1",
    role: "Full Stack Engineer",
    features: ["Music course listings", "Event galleries", "Static/Dynamic pages", "Mobile-first"],
    details: "A Next.js site for music courses, events, blogs and galleries. Built with a mobile-first responsive design and server-rendered pages.",
  },
  {
    id: "09",
    title: "Quizee",
    description: "Interactive flashcard and study app inspired by Quizlet.",
    tech: ["React", "Vite", "Tailwind", "React Router"],
    github: "https://github.com/muhammad-abdullah11/quieee",
    live: "https://quizee-kappa.vercel.app/",
    icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
    size: "col-span-1 row-span-1",
    role: "Full Stack Engineer",
    features: ["Interactive flashcards", "Dynamic carousels", "Study sets", "Smooth transitions"],
    details: "Helping students master any subject through beautifully designed flashcards and an intuitive learning experience.",
  },
  {
    id: "10",
    title: "Pookie Games",
    description: "Modern mini-games hub with a sleek Bento-style dashboard.",
    tech: ["React 19", "Vite 7", "Tailwind v4"],
    github: "https://github.com/muhammad-abdullah11/pookie-games",
    live: "https://pookie-games-11.vercel.app/",
    icon: <Gamepad className="w-6 h-6" />,
    size: "col-span-2 row-span-1",
    role: "Frontend Engineer",
    features: ["Bento dashboard", "Dynamic game loading", "Classic arcade games", "Mobile optimized"],
    details: "High-performance mini-games hub featuring classic arcade and logic games with a seamless user experience.",
  },
  {
    id: "11",
    title: "shopyee",
    description: "Fashion e-commerce merged with curated global travel guides.",
    tech: ["React 19", "Vite 8", "Countries API"],
    github: "https://github.com/muhammad-abdullah11/shopyee",
    live: "https://shopyee.vercel.app/",
    icon: <ShoppingBag className="w-6 h-6" />,
    size: "col-span-1 row-span-1",
    role: "Full Stack Engineer",
    features: ["Editorial interface", "Travel discovery", "REST API integration", "Fluid design"],
    details: "Merging modern fashion e-commerce with curated travel and lifestyle guides through an editorial-style interface.",
  },
  {
    id: "12",
    title: "Inventory-MS",
    description: "Enterprise-grade inventory tracking for business efficiency.",
    tech: ["React 18", "LocalStorage", "CSV Export"],
    github: "https://github.com/muhammad-abdullah11/inventory-management-system",
    live: "https://inventroo.vercel.app/",
    icon: <Package className="w-6 h-6" />,
    size: "col-span-1 row-span-1",
    role: "Frontend Engineer",
    features: ["Real-time metrics", "Transaction logging", "CSV utility", "Zero backend dependency"],
    details: "Professional-grade tracking with a high-performance dashboard and full life-cycle management.",
  },
];

const FILTERS = ["All", "React", "Node.js", "Next.js", "MERN", "TypeScript"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const filtered = PROJECTS.filter((p) => 
    filter === "All" || p.tech.some(t => t.includes(filter))
  );
  const activeProjectData = PROJECTS.find((p) => p.id === activeProject);

  return (
    <div className="relative w-full h-full p-6 overflow-y-auto bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto pb-20">
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all border ${
                filter === f
                  ? "bg-blue-600 text-white border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                  : "bg-white/5 text-white/50 border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className={`group relative rounded-[2rem] p-8 border border-white/10 flex flex-col justify-between overflow-hidden cursor-pointer bg-[#151520] transition-all hover:border-blue-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${project.size}`}
              onClick={() => setActiveProject(project.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
                  {project.icon}
                </div>
                <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm line-clamp-2 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto">
                <div className="flex -space-x-3">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-[#1c1c2b] border-2 border-[#151520] flex items-center justify-center text-[9px] font-bold text-white/80 uppercase tracking-tighter">
                      {t.charAt(0)}
                    </div>
                  ))}
                  {project.tech.length > 3 && (
                    <div className="w-9 h-9 rounded-full bg-[#1c1c2b] border-2 border-[#151520] flex items-center justify-center text-[9px] font-bold text-blue-400">
                      +{project.tech.length - 3}
                    </div>
                  )}
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white/5 text-white/30 text-[10px] uppercase font-bold tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all">
                  Details
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
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
            <div className="flex flex-col h-full bg-[#0a0a0f]">
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-10 max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                     <div className="w-24 h-24 rounded-3xl bg-blue-600 flex items-center justify-center text-white text-4xl shadow-2xl">
                        {activeProjectData.icon}
                     </div>
                     <div className="text-center md:text-left">
                        <h2 className="text-4xl font-bold text-white mb-2">{activeProjectData.title}</h2>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                           <span className="flex items-center gap-2 text-blue-400 font-mono text-sm">
                             <ShieldCheck size={16} /> {activeProjectData.role}
                           </span>
                           <span className="flex items-center gap-2 text-white/30 font-mono text-sm">
                             <Zap size={16} /> Full-Stack Architecture
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                     <div className="md:col-span-2 space-y-8">
                        <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-[2.5rem] relative overflow-hidden group">
                           <img 
                              src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80`} 
                              alt="Mockup" 
                              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                           <div className="absolute bottom-8 left-8 right-8">
                              <p className="text-white font-bold text-lg mb-1 tracking-tight">Project Visual Showcase</p>
                              <div className="flex gap-2">
                                 {[1,2,3].map(i => <div key={i} className={`w-2 h-2 rounded-full ${i===1 ? 'bg-blue-500' : 'bg-white/20'}`} />)}
                              </div>
                           </div>
                        </div>

                        <div>
                           <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                              <div className="w-1 h-6 bg-blue-600 rounded-full" />
                              Project Overview
                           </h3>
                           <p className="text-white/60 text-lg leading-relaxed">
                              {activeProjectData.details}
                           </p>
                        </div>
                     </div>

                     <div className="space-y-8">
                        <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10">
                           <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Key Features</h4>
                           <ul className="space-y-4">
                              {activeProjectData.features?.map((f, i) => (
                                 <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                    {f}
                                 </li>
                              ))}
                           </ul>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10">
                           <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Tech Stack</h4>
                           <div className="flex flex-wrap gap-2">
                              {activeProjectData.tech.map((t) => (
                                 <span key={t} className="px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase">
                                    {t}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
                 <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
                    <a href={activeProjectData.github} target="_blank" className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-white font-bold transition-all">
                       <Github size={20} /> View Source Code
                    </a>
                    <a href={activeProjectData.live} target="_blank" className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl flex items-center justify-center gap-2 text-white font-bold transition-all shadow-xl shadow-blue-600/20">
                       <ExternalLink size={20} /> Launch Live Site
                    </a>
                 </div>
              </div>
            </div>
          </WindowWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}
