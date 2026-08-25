"use client"

import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import LinkRow from "@/components/LinkRow";
import { profile, sections } from "@/data/links";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function LinkTree() {
  return (
    <main className="relative z-10 flex flex-1 flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mt-6 w-full max-w-md px-6"
      >
        <div className="relative overflow-hidden rounded-3xl border border-border/60 aspect-[4/5] sm:aspect-[3/4] soft-card">
          <Image
            src={profile.heroImage}
            alt={profile.name}
            fill
            priority
            sizes="(min-width: 448px) 448px, 100vw"
            className="object-cover object-[center_18%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/95" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-6 pb-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 text-[11px] font-medium text-accent backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent dot-pulse" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </span>
            <h1 className="font-display text-3xl text-foreground">{profile.name}</h1>
            <p className="text-sm font-medium text-accent">{profile.role}</p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin size={12} />
              {profile.location}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-full max-w-md flex-col gap-8 px-6 pt-8 pb-16"
      >
        <motion.div variants={item} className="text-center">
          <p className="text-lg font-display text-foreground">{profile.greeting}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/75">{profile.tagline}</p>
        </motion.div>

        {sections.map((section) => (
          <motion.section key={section.title} variants={item} className="flex flex-col gap-3">
            <h2 className="px-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {section.title}
            </h2>
            <div className="flex flex-col gap-2.5">
              {section.links.map((link) => (
                <LinkRow key={link.label} {...link} />
              ))}
            </div>
          </motion.section>
        ))}

        <motion.footer variants={item} className="pt-2 text-center">
          <p className="text-[11px] text-muted-foreground">
            Gracias por pasarte por aquí <span className="terminal-cursor text-accent">_</span>
          </p>
        </motion.footer>
      </motion.div>
    </main>
  );
}
