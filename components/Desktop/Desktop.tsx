"use client";
import { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import Dock from "./Dock";
import Wallpaper from "./Wallpaper";
import WindowWrapper from "../Windows/WindowWrapper";
import Welcome from "../Windows/Welcome";
import { useWindowManager } from "@/lib/useWindowManager";
import { useIsMobile } from "@/lib/useIsMobile";
import { APPS } from "@/constants/apps";

import AboutMe from "../Windows/AboutMe";
import Projects from "../Windows/Projects";
import Resume from "../Windows/Resume";
import Services from "../Windows/Services";
import ContactMe from "../Windows/ContactMe";
import Settings from "../Windows/Settings";

export default function Desktop() {
  const { windows, openWindow, closeWindow, minimizeWindow, toggleFullscreen, focusWindow } = useWindowManager();
  const { isMobile, isTablet } = useIsMobile();
  const [showWelcome, setShowWelcome] = useState(false);
  const [wallpaper, setWallpaper] = useState("/wallpaper.jpg");

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    const savedWallpaper = localStorage.getItem("currentWallpaper");
    
    if (!hasVisited) {
      setShowWelcome(true);
    }
    
    if (savedWallpaper) {
      setWallpaper(savedWallpaper);
    }
  }, []);

  const handleWallpaperChange = (path: string) => {
    setWallpaper(path);
    localStorage.setItem("currentWallpaper", path);
  };

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    localStorage.setItem("hasVisited", "true");
    setTimeout(() => openWindow("about"), 500); // open about me by default
  };

  const getComponentForApp = (id: string) => {
    switch (id) {
      case "about": return <AboutMe />;
      case "projects": return <Projects />;
      case "resume": return <Resume />;
      case "services": return <Services />;
      case "contact": return <ContactMe />;
      case "settings": return (
        <Settings 
          currentWallpaper={wallpaper} 
          onWallpaperChange={handleWallpaperChange} 
        />
      );
      default: return null;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden text-neutral-900 selection:bg-blue-500/30">
      {showWelcome && <Welcome onComplete={handleWelcomeComplete} />}

      <Wallpaper src={wallpaper} />
      <MenuBar />

      {windows.map((w) => {
        if (!w.isOpen || w.isMinimized) return null;
        
        const app = APPS.find((a) => a.id === w.id);
        if (!app) return null;

        const Icon = app.icon;

        return (
          <WindowWrapper
            key={w.id}
            id={w.id}
            title={app.label}
            icon={typeof Icon === 'string' ? Icon : <Icon size={16} />}
            zIndex={w.zIndex}
            isFullscreen={w.isFullscreen}
            isMobile={isMobile}
            isTablet={isTablet}
            onClose={() => closeWindow(w.id)}
            onMinimize={() => minimizeWindow(w.id)}
            onFullscreen={() => toggleFullscreen(w.id)}
            onFocus={() => focusWindow(w.id)}
          >
            {getComponentForApp(w.id)}
          </WindowWrapper>
        );
      })}

      <Dock windows={windows} onIconClick={openWindow} isMobile={isMobile} />
    </div>
  );
}
