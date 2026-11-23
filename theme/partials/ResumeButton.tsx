import React from "react";
import { siteConfig } from "../functions/siteConfig";
import { siteContent } from "../../content/siteContent";

interface ResumeButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outline";
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  className = "btn",
  children,
  onClick,
  variant,
}) => {
  const variantClass = variant === "solid" ? "solid" : "";
  const combinedClassName = `${className} ${variantClass}`.trim();

  return (
    <a
      href={siteConfig.resumePath}
      download="Shreyans_Jain_Resume.pdf"
      className={combinedClassName}
      onClick={onClick}
    >
      {children ?? siteContent.buttons.downloadResume}
    </a>
  );
};
