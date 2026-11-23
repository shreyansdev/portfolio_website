"use client";

import React from "react";
import { m } from "framer-motion";
import { defaultViewport, revealVariants } from "../functions/animations";

interface PanelProps {
  children: React.ReactNode;
  variant?: "default" | "tone";
  cutCorner?: boolean;
  className?: string;
  animateOnScroll?: boolean;
}

export const Panel: React.FC<PanelProps> = ({
  children,
  variant = "default",
  cutCorner = true,
  className = "",
  animateOnScroll = true,
}) => {
  const bgClass = variant === "tone" ? "bg-tone" : "bg-paper";
  const cutClass = cutCorner ? "cut-corner-panel" : "";

  return (
    <m.div
      initial={animateOnScroll ? "hidden" : undefined}
      whileInView={animateOnScroll ? "visible" : undefined}
      viewport={animateOnScroll ? defaultViewport : undefined}
      variants={revealVariants}
      whileHover={{
        y: -4,
        boxShadow: "7px 7px 0 var(--ink)",
        transition: { duration: 0.15 },
      }}
      className={`border-2 border-line ${bgClass} ${cutClass} p-6 relative transition-[border-color,background-color] ${className}`}
    >
      {children}
    </m.div>
  );
};
