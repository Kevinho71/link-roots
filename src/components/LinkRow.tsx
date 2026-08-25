import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LinkItem } from "@/data/links";

export default function LinkRow({ label, href, icon: Icon, description, featured }: LinkItem) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center gap-4 rounded-2xl border px-4 py-3.5 soft-card",
        featured
          ? "border-accent/60 bg-gradient-to-br from-accent/25 to-primary/20 text-foreground"
          : "border-border/70 bg-card text-card-foreground"
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
          featured
            ? "bg-accent/25 text-accent"
            : "bg-secondary/70 text-accent group-hover:bg-accent/15"
        )}
      >
        <Icon size={18} />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-medium text-foreground">{label}</span>
        {description && (
          <span className="truncate text-xs text-muted-foreground">{description}</span>
        )}
      </span>
      <ChevronRight
        size={18}
        className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </a>
  );
}
