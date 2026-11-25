"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "../functions/siteConfig";
import { useTheme } from "../context/ThemeContext";

interface AvatarImageProps {
  size: "800" | "160";
  priority?: boolean;
  className?: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  size,
  priority = false,
  className = "",
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const px = size === "800" ? 800 : 160;
  const lightSrc = size === "800" ? siteConfig.avatarLight800 : siteConfig.avatarLight160;
  const darkSrc = size === "800" ? siteConfig.avatarDark800 : siteConfig.avatarDark160;

  const lightIsActive = mounted && theme === "light";
  const darkIsActive = mounted && theme === "dark";

  return (
    <>
      <img
        src={lightSrc}
        alt={siteConfig.avatarAlt}
        width={px}
        height={px}
        decoding="async"
        loading={priority && lightIsActive ? undefined : "lazy"}
        fetchPriority={priority && lightIsActive ? "high" : undefined}
        className={`avatar-img-light object-cover object-[center_30%] ${className}`}
      />
      <img
        src={darkSrc}
        alt={siteConfig.avatarAlt}
        width={px}
        height={px}
        decoding="async"
        loading={priority && darkIsActive ? undefined : "lazy"}
        fetchPriority={priority && darkIsActive ? "high" : undefined}
        className={`avatar-img-dark object-cover object-[center_30%] ${className}`}
      />
    </>
  );
};
