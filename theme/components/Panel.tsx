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
  overlay?: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  children,
  variant = "default",
  cutCorner = true,
  className = "",
  animateOnScroll = true,
  overlay,
}) => {
  const bgClass = variant === "tone" ? "bg-tone" : "bg-paper";
  const stretchClass = className.includes("h-full") ? "h-full" : "";

  const panelBody = (
    <div className={`panel-hover-lift relative ${stretchClass}`}>
      <div className={`panel-drop-shadow ${stretchClass}`}>
        {cutCorner ? (
          <div
            className={`bg-line cut-corner-panel p-[2px] transition-colors ${stretchClass}`}
          >
            <div
              className={`${bgClass} cut-corner-panel-inner p-6 relative transition-colors ${className}`}
            >
              {children}
            </div>
          </div>
        ) : (
          <div
            className={`border-2 border-line ${bgClass} p-6 relative transition-[border-color,background-color] ${className}`}
          >
            {children}
          </div>
        )}
      </div>
      {overlay}
    </div>
  );

  if (!animateOnScroll) {
    return <div className={stretchClass}>{panelBody}</div>;
  }

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={revealVariants}
      className={stretchClass}
    >
      {panelBody}
    </m.div>
  );
};
