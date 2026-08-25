import type { LucideIcon } from "lucide-react";
import { Globe, Download, Mail, CalendarClock } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import type { ComponentType } from "react";

export type IconComponent = LucideIcon | ComponentType<{ size?: number; className?: string }>;

export interface LinkItem {
  label: string;
  href: string;
  icon: IconComponent;
  /** Estilo destacado (CTA), para el enlace que más quieres resaltar de la sección */
  featured?: boolean;
}

export interface LinkSection {
  title: string;
  links: LinkItem[];
}

export const profile = {
  initials: "KG",
  name: "Kevin Ady Guzmán",
  role: "Software Developer",
  tagline: "Backend & Frontend · Java Spring Boot / React / Next.js",
};

// TODO: reemplaza los href de ejemplo por tus URLs reales antes de publicar.
export const sections: LinkSection[] = [
  {
    title: "Portfolio",
    links: [
      { label: "Portafolio Web", href: "https://kevinho71.github.io/mi-portfolio/", icon: Globe },
      { label: "GitHub", href: "https://github.com/Kevinho71", icon: GitHubIcon },
    ],
  },
  {
    title: "Currículum",
    links: [
      { label: "Descargar CV", href: "https://kevinho71.github.io/mi-portfolio/cv-kevin.pdf", icon: Download },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/TU-USUARIO", icon: LinkedInIcon },
      { label: "Email", href: "mailto:kevin4000200@gmail.com", icon: Mail },
      { label: "Agendar llamada", href: "https://cal.com/TU-USUARIO", icon: CalendarClock },
    ],
  },
  {
    title: "Redes",
    links: [
      { label: "Instagram Tech", href: "https://instagram.com/TU-USUARIO-TECH", icon: InstagramIcon, featured: true },
    ],
  },
];
