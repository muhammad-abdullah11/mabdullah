"use client";
import { useState, useCallback } from "react";

export interface WindowState {
  id: string;
  isOpen: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
  zIndex: number;
}

const INITIAL_WINDOWS: WindowState[] = [
  { id: "about", isOpen: false, isMinimized: false, isFullscreen: false, zIndex: 10 },
  { id: "projects", isOpen: false, isMinimized: false, isFullscreen: false, zIndex: 10 },
  { id: "resume", isOpen: false, isMinimized: false, isFullscreen: false, zIndex: 10 },
  { id: "services", isOpen: false, isMinimized: false, isFullscreen: false, zIndex: 10 },
  { id: "contact", isOpen: false, isMinimized: false, isFullscreen: false, zIndex: 10 },
  { id: "settings", isOpen: false, isMinimized: false, isFullscreen: false, zIndex: 10 },
];

export function useWindowManager() {
  const [windows, setWindows] = useState<WindowState[]>(INITIAL_WINDOWS);
  const [maxZ, setMaxZ] = useState(100);

  const getMaxZ = useCallback(() => {
    setMaxZ((prev) => prev + 1);
    return maxZ + 1;
  }, [maxZ]);

  const openWindow = useCallback(
    (id: string) => {
      const newZ = maxZ + 1;
      setMaxZ(newZ);
      setWindows((prev) =>
        prev.map((w) =>
          w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: newZ } : w
        )
      );
    },
    [maxZ]
  );

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isOpen: false, isMinimized: false, isFullscreen: false } : w
      )
    );
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
  }, []);

  const toggleFullscreen = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isFullscreen: !w.isFullscreen } : w))
    );
  }, []);

  const focusWindow = useCallback(
    (id: string) => {
      const newZ = maxZ + 1;
      setMaxZ(newZ);
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w))
      );
    },
    [maxZ]
  );

  return { windows, openWindow, closeWindow, minimizeWindow, toggleFullscreen, focusWindow };
}
