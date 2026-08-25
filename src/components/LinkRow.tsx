import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LinkItem } from "@/data/links";

export default function LinkRow({ label, href, icon: Icon, featured }: LinkItem) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center justify-between gap-3 border-2 px-4 py-3 brutalist-shadow transition-colors",
        featured
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border bg-card text-card-foreground hover:border-accent"
      )}
    >
      <span className="flex items-center gap-3 min-w-0">
        <Icon size={18} className="shrink-0" />
        <span className="font-mono text-sm uppercase tracking-wide truncate">{label}</span>
      </span>
      <ChevronRight
        size={16}
        className={cn(
          "shrink-0 transition-transform group-hover:translate-x-0.5",
          featured ? "text-accent-foreground" : "text-muted-foreground group-hover:text-accent"
        )}
      />
    </a>
  );
}
