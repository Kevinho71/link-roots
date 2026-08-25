import type { LucideIcon } from "lucide-react";
import { Globe, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
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
  name: "Kevin Ady Guzmán",
  role: "Software Developer",
  location: "Santa Cruz, Bolivia",
  tagline: "Backend & Frontend · Java Spring Boot / React / Next.js",
  heroImage: "/link-roots/DSC01450.jpg",
};

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
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kevin-guzmán-marca-730b88301", icon: LinkedInIcon },
      { label: "WhatsApp", href: "https://wa.me/59160259580", icon: WhatsAppIcon },
      { label: "Email", href: "mailto:kevin4000100@gmail.com", icon: Mail },
    ],
  },
  {
    title: "Redes",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/kevi.nho71/", icon: InstagramIcon, featured: true },
    ],
  },
];
