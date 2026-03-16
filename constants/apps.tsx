import { User, FolderCode, FileText, Zap, Mail, Settings } from "lucide-react";

export interface AppConfig {
  id: string;
  label: string;
  icon: any;
}

export const APPS: AppConfig[] = [
  { id: "about", label: "About Me", icon: User },
  { id: "projects", label: "Projects", icon: FolderCode },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "services", label: "Services", icon: Zap },
  { id: "contact", label: "Contact Me", icon: Mail },
  { id: "settings", label: "Settings", icon: Settings },
];
