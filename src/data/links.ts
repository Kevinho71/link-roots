import type { LucideIcon } from "lucide-react";
import { Globe, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import type { ComponentType } from "react";

export type IconComponent = LucideIcon | ComponentType<{ size?: number; className?: string }>;

export interface LinkItem {
  label: string;
  href: string;
  icon: IconComponent;
  description?: string;
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
  greeting: "¡Hola! Soy Kevin 👋",
  tagline:
    "Desarrollo backend y frontend con Java Spring Boot, React y Next.js. Encantado de conocerte — elegí por dónde te resulta más fácil escribirme.",
  availability: "Disponible para nuevos proyectos",
  heroImage: "/link-roots/DSC01450.jpg",
};

export const sections: LinkSection[] = [
  {
    title: "Escríbeme",
    links: [
      {
        label: "WhatsApp",
        description: "La forma más rápida de contactarme",
        href: "https://wa.me/59160259580",
        icon: WhatsAppIcon,
        featured: true,
      },
      {
        label: "Email",
        description: "kevin4000100@gmail.com",
        href: "mailto:kevin4000100@gmail.com",
        icon: Mail,
      },
      {
        label: "LinkedIn",
        description: "Conectemos profesionalmente",
        href: "https://www.linkedin.com/in/kevin-guzmán-marca-730b88301",
        icon: LinkedInIcon,
      },
    ],
  },
  {
    title: "Mi trabajo",
    links: [
      {
        label: "Portafolio web",
        description: "Proyectos, experiencia y stack",
        href: "https://kevinho71.github.io/mi-portfolio/",
        icon: Globe,
      },
      {
        label: "GitHub",
        description: "Código y repositorios",
        href: "https://github.com/Kevinho71",
        icon: GitHubIcon,
      },
      {
        label: "Descargar CV",
        description: "PDF · versión actualizada",
        href: "https://kevinho71.github.io/mi-portfolio/cv-kevin.pdf",
        icon: Download,
      },
    ],
  },
  {
    title: "Redes",
    links: [
      {
        label: "Instagram",
        description: "@kevi.nho71",
        href: "https://www.instagram.com/kevi.nho71/",
        icon: InstagramIcon,
      },
    ],
  },
];
