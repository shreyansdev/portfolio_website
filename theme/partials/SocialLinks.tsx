"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { siteConfig } from "../functions/siteConfig";

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  size = "md",
  showLabels = false,
  className = "",
}) => {
  const links = [
    {
      name: "LinkedIn",
      href: siteConfig.socials.linkedin,
      icon: Linkedin,
      color: "bg-[#0A66C2] text-white",
      hoverBg: "hover:bg-neo-cyan hover:text-ink",
    },
    {
      name: "GitHub",
      href: siteConfig.socials.github,
      icon: Github,
      color: "bg-ink text-white",
      hoverBg: "hover:bg-neo-yellow hover:text-ink",
    },
    {
      name: "Email",
      href: siteConfig.socials.email,
      icon: Mail,
      color: "bg-[#EA4335] text-white",
      hoverBg: "hover:bg-neo-pink hover:text-white",
    },
    {
      name: "Phone",
      href: siteConfig.socials.phone,
      icon: Phone,
      color: "bg-[#25D366] text-ink",
      hoverBg: "hover:bg-neo-lime hover:text-ink",
    },
  ];

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const containerPadding = {
    sm: "p-2",
    md: "p-2.5",
    lg: "p-3",
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        const isExternal = link.href.startsWith("http");

        return (
          <motion.a
            key={link.name}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.08, y: -3, boxShadow: "5px 5px 0px 0px #0F0F0F" }}
            whileTap={{ scale: 0.95, y: 0, boxShadow: "1px 1px 0px 0px #0F0F0F" }}
            aria-label={link.name}
            className={`inline-flex items-center gap-2 font-mono font-bold text-xs uppercase border-2 border-ink shadow-brutal transition-colors select-none ${link.color} ${link.hoverBg} ${containerPadding[size]}`}
          >
            <Icon className={iconSizes[size]} />
            {showLabels && <span>{link.name}</span>}
          </motion.a>
        );
      })}
    </div>
  );
};
