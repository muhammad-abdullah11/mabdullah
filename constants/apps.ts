export interface AppConfig {
  id: string;
  label: string;
  icon: string;
  shortIcon: string;
}

export const APPS: AppConfig[] = [
  { id: "about", label: "About Me", icon: "👨‍💻", shortIcon: "👨‍💻" },
  { id: "projects", label: "Projects", icon: "🗂️", shortIcon: "🗂️" },
  { id: "resume", label: "Resume", icon: "📄", shortIcon: "📄" },
  { id: "services", label: "Services", icon: "⚡", shortIcon: "⚡" },
  { id: "contact", label: "Contact Me", icon: "✉️", shortIcon: "✉️" },
  { id: "settings", label: "Settings", icon: "⚙️", shortIcon: "⚙️" },
];
