import type { Metadata } from "next";
import { JetBrains_Mono, Special_Elite } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin Ady Guzmán — Links",
  description:
    "Enlaces de Kevin Ady Guzmán: portafolio, GitHub, LinkedIn y redes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jetbrainsMono.variable} ${specialElite.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grid-bg">{children}</body>
    </html>
  );
}
