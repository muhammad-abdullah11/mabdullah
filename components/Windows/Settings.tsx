"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WALLPAPERS = [
  { id: "default", path: "/wallpaper.jpg", name: "Dynamic Blue" },
  { id: "wall1", path: "/wallpaper1.jpg", name: "Desert Night" },
  { id: "wall2", path: "/wallpaper2.jpg", name: "Purple Peak" },
  { id: "wall3", path: "/wallpaper3.avif", name: "Glassy Aurora" },
  { id: "wall4", path: "/wallpaper4.avif", name: "Abstract Glow" },
];

interface SettingsProps {
  currentWallpaper: string;
  onWallpaperChange: (path: string) => void;
}

export default function Settings({ currentWallpaper, onWallpaperChange }: SettingsProps) {
  return (
    <div className="p-6 h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-6">Desktop & Screen Saver</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {WALLPAPERS.map((wp) => (
            <div 
              key={wp.id} 
              className="group cursor-pointer"
              onClick={() => onWallpaperChange(wp.path)}
            >
              <div className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                currentWallpaper === wp.path ? "border-blue-500 ring-2 ring-blue-500/50" : "border-white/10 group-hover:border-white/30"
              }`}>
                <img 
                  src={wp.path} 
                  alt={wp.name} 
                  className="w-full h-full object-cover"
                />
                
                {currentWallpaper === wp.path && (
                  <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1 shadow-lg">
                    <Check size={12} className="text-white" />
                  </div>
                )}
                
                <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] text-center text-white font-medium">{wp.name}</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-center text-white/60 font-medium">{wp.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-sm text-white/80 font-medium mb-1">Appearance Settings</p>
          <p className="text-xs text-white/40 leading-relaxed">
            Personalize your workspace experience. Wallpapers are automatically saved to your local storage session.
          </p>
        </div>
      </div>
    </div>
  );
}
