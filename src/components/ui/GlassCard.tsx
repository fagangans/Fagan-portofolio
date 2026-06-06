"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden",
          "transition-all duration-500",
          glow && "hover:border-gold/50 hover:shadow-[0_0_40px_-10px_rgba(201,168,76,0.4)]",
          className
        )}
        {...props}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent" />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
