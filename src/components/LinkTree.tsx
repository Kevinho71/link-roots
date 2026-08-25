"use client"

import Image from "next/image";
import { motion } from "motion/react";
import LinkRow from "@/components/LinkRow";
import { profile, sections } from "@/data/links";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function LinkTree() {
  return (
    <main className="flex-1 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-md aspect-[4/5] sm:aspect-[3/4] overflow-hidden"
      >
        <Image
          src={profile.heroImage}
          alt={profile.name}
          fill
          priority
          sizes="(min-width: 448px) 448px, 100vw"
          className="object-cover object-[center_18%] grayscale-[10%]"
        />
        {/* difuminado del hero hacia el fondo de la página */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/55 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 px-6 pb-6 text-center">
          <h1 className="font-display text-3xl text-foreground crt-glow chromatic-hover">{profile.name}</h1>
          <p className="text-xs font-mono uppercase tracking-widest text-accent">{profile.role}</p>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md flex flex-col gap-10 px-6 pt-8 pb-16"
      >
        <motion.p variants={item} className="text-center text-sm text-foreground/80">
          {profile.tagline}
        </motion.p>

        {sections.map((section) => (
          <motion.section key={section.title} variants={item} className="flex flex-col gap-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="text-accent">{"// "}</span>
              {section.title}
            </h2>
            <div className="flex flex-col gap-3">
              {section.links.map((link) => (
                <LinkRow key={link.label} {...link} />
              ))}
            </div>
          </motion.section>
        ))}

        <motion.footer variants={item} className="pt-4 text-center">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <span className="terminal-cursor text-accent">_</span> built with next.js
          </p>
        </motion.footer>
      </motion.div>
    </main>
  );
}
