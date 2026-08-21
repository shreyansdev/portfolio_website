"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  bg?: "white" | "yellow" | "cyan" | "pink" | "lime" | "purple" | "dark" | "canvas";
  borderWidth?: "2" | "3" | "4";
  shadowSize?: "brutal" | "brutal-lg" | "brutal-xl" | "brutal-sm";
  hoverEffect?: boolean;
  className?: string;
  stickerBadge?: string;
  stickerColor?: "yellow" | "cyan" | "pink" | "lime" | "purple" | "orange";
}

export const Card: React.FC<CardProps> = ({
  children,
  bg = "white",
  borderWidth = "3",
  shadowSize = "brutal-lg",
  hoverEffect = true,
  className,
  stickerBadge,
  stickerColor = "yellow",
}) => {
  const bgStyles = {
    white: "bg-white text-ink",
    yellow: "bg-neo-yellow text-ink",
    cyan: "bg-neo-cyan text-ink",
    pink: "bg-neo-pink text-white",
    lime: "bg-neo-lime text-ink",
    purple: "bg-neo-purple text-white",
    dark: "bg-ink text-white",
    canvas: "bg-canvas text-ink",
  };

  const borderStyles = {
    "2": "border-2 border-ink",
    "3": "border-[3px] border-ink",
    "4": "border-4 border-ink",
  };

  const shadowStyles = {
    brutal: "shadow-brutal",
    "brutal-lg": "shadow-brutal-lg",
    "brutal-xl": "shadow-brutal-xl",
    "brutal-sm": "shadow-brutal-sm",
  };

  const stickerBgStyles = {
    yellow: "bg-neo-yellow text-ink",
    cyan: "bg-neo-cyan text-ink",
    pink: "bg-neo-pink text-white",
    lime: "bg-neo-lime text-ink",
    purple: "bg-neo-purple text-white",
    orange: "bg-neo-orange text-white",
  };

  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -4,
              x: -4,
              boxShadow: "10px 10px 0px 0px #0F0F0F",
              transition: { duration: 0.15 },
            }
          : undefined
      }
      className={clsx(
        "relative p-6 transition-all duration-150",
        bgStyles[bg],
        borderStyles[borderWidth],
        shadowStyles[shadowSize],
        className
      )}
    >
      {stickerBadge && (
        <span
          className={clsx(
            "absolute -top-3.5 right-4 border-2 border-ink font-mono text-xs font-black uppercase px-2.5 py-0.5 shadow-brutal-sm -rotate-2 select-none z-10",
            stickerBgStyles[stickerColor]
          )}
        >
          {stickerBadge}
        </span>
      )}
      {children}
    </motion.div>
  );
};
