import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal delay={0}>
          <span
            className={cn(
              "inline-block rounded-full px-4 py-1 text-xs font-heading font-semibold italic uppercase tracking-[0.18em]",
              light
                ? "bg-white/10 text-metro-orange-400"
                : "bg-metro-orange-500/10 text-metro-orange-600"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2
          className={cn(
            "mt-4 font-heading text-3xl font-bold sm:text-4xl",
            light ? "text-white" : "text-metro-navy-800"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed",
              light ? "text-metro-grey-300" : "text-metro-grey-500"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
