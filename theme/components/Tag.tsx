import React from "react";

interface TagProps {
  children: React.ReactNode;
  variant?: "tag" | "chip";
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = "tag",
  className = "",
}) => {
  const styles =
    variant === "chip"
      ? "font-mono text-[10px] px-2.5 py-1 border border-line uppercase leading-tight bg-paper text-ink-new inline-block select-none"
      : "font-mono text-[10px] px-2 py-1 border border-line uppercase leading-tight bg-paper text-ink-new inline-block select-none";

  return <span className={`${styles} ${className}`}>{children}</span>;
};
