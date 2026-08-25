"use client"

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
    <main className="flex-1 flex justify-center px-6 py-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md flex flex-col gap-10"
      >
        <motion.header variants={item} className="flex flex-col items-center text-center gap-3">
          <div className="flex h-24 w-24 items-center justify-center border-2 border-accent bg-card brutalist-shadow">
            <span className="font-display text-3xl text-accent crt-glow">{profile.initials}</span>
          </div>
          <div>
            <h1 className="font-display text-2xl text-foreground chromatic-hover">{profile.name}</h1>
            <p className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {profile.role}
            </p>
          </div>
          <p className="max-w-xs text-sm text-foreground/80">{profile.tagline}</p>
        </motion.header>

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
