"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "yellow" | "cyan" | "pink" | "lime" | "purple" | "orange" | "white" | "dark";
  size?: "sm" | "md" | "lg";
  rotate?: "none" | "left" | "right" | "slight-left" | "slight-right";
  className?: string;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "yellow",
  size = "md",
  rotate = "none",
  className,
  onClick,
}) => {
  const variantStyles = {
    yellow: "bg-neo-yellow text-ink border-ink",
    cyan: "bg-neo-cyan text-ink border-ink",
    pink: "bg-neo-pink text-white border-ink",
    lime: "bg-neo-lime text-ink border-ink",
    purple: "bg-neo-purple text-white border-ink",
    orange: "bg-neo-orange text-white border-ink",
    white: "bg-white text-ink border-ink",
    dark: "bg-ink text-white border-white",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-mono font-bold tracking-wider border-2 shadow-brutal-sm",
    md: "px-3 py-1 text-xs sm:text-sm font-mono font-bold tracking-wider border-2 shadow-brutal",
    lg: "px-4 py-1.5 text-sm sm:text-base font-mono font-black uppercase tracking-widest border-[3px] shadow-brutal-lg",
  };

  const rotateStyles = {
    none: "",
    left: "-rotate-3",
    right: "rotate-3",
    "slight-left": "-rotate-1",
    "slight-right": "rotate-1",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-none font-bold uppercase transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        rotateStyles[rotate],
        className
      )}
    >
      {children}
    </motion.span>
  );
};
