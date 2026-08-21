"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { siteConfig } from "../functions/siteConfig";
import { clsx } from "clsx";

interface ResumeButtonProps {
  variant?: "primary" | "secondary" | "dark" | "lime";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  label = "Download Resume",
  showIcon = true,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary: "bg-neo-yellow text-ink border-ink hover:bg-[#FFF000]",
    secondary: "bg-neo-cyan text-ink border-ink hover:bg-[#33F3FF]",
    dark: "bg-ink text-white border-white hover:bg-black",
    lime: "bg-neo-lime text-ink border-ink hover:bg-[#B5F547]",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-mono font-bold border-2 shadow-brutal-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base font-mono font-black border-[3px] shadow-brutal gap-2",
    lg: "px-7 py-3.5 text-base sm:text-lg font-mono font-black uppercase tracking-wider border-4 shadow-brutal-lg gap-3",
  };

  return (
    <motion.a
      href={siteConfig.resumePath}
      download="Shreyans_Jain_Resume.pdf"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: mousePos.x, y: mousePos.y }}
      transition={{ type: "spring", stiffness: 250, damping: 15, mass: 0.5 }}
      whileHover={{ scale: 1.04, boxShadow: "8px 8px 0px 0px #0F0F0F" }}
      whileTap={{ scale: 0.96, boxShadow: "2px 2px 0px 0px #0F0F0F" }}
      aria-label="Download Resume PDF"
      className={clsx(
        "inline-flex items-center justify-center select-none uppercase tracking-wide transition-colors cursor-pointer relative group",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {showIcon && <Download className="w-5 h-5 group-hover:animate-bounce" />}
      <span>{label}</span>
      <FileText className="w-4 h-4 opacity-70 group-hover:opacity-100" />
    </motion.a>
  );
};
