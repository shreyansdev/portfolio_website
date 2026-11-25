import React from "react";
import { siteConfig } from "../functions/siteConfig";

interface SocialLinksProps {
  variant?: "text" | "icons";
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = "text",
  className = "",
}) => {
  if (variant === "text") {
    return (
      <div className={`flex gap-3 sm:gap-4 items-center ${className}`}>
        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-1 underline underline-offset-4 decoration-1 font-mono text-xs text-ink-new hover:opacity-70 transition-opacity"
        >
          LinkedIn
        </a>
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-1 underline underline-offset-4 decoration-1 font-mono text-xs text-ink-new hover:opacity-70 transition-opacity"
        >
          GitHub
        </a>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Social links">
      {/* LinkedIn */}
      <a
        href={siteConfig.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-11 h-11 border-[1.5px] border-line grid place-items-center text-ink-new hover:bg-tone transition-colors bg-paper"
      >
        <svg
          className="w-[17px] h-[17px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5 9v10M5 5v.1M10 19v-6a3 3 0 0 1 6 0v6M10 9v10M3 3h18v18H3z" />
        </svg>
      </a>

      {/* GitHub */}
      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="w-11 h-11 border-[1.5px] border-line grid place-items-center text-ink-new hover:bg-tone transition-colors bg-paper"
      >
        <svg
          className="w-[17px] h-[17px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      </a>

      {/* Email */}
      <a
        href={siteConfig.socials.email}
        aria-label="Email"
        className="w-11 h-11 border-[1.5px] border-line grid place-items-center text-ink-new hover:bg-tone transition-colors bg-paper"
      >
        <svg
          className="w-[17px] h-[17px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
          focusable="false"
        >
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="m3 7 9 7 9-7" />
        </svg>
      </a>

      {/* Phone */}
      <a
        href={siteConfig.socials.phone}
        aria-label="Phone"
        className="w-11 h-11 border-[1.5px] border-line grid place-items-center text-ink-new hover:bg-tone transition-colors bg-paper"
      >
        <svg
          className="w-[17px] h-[17px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L7.7 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 2.2 2.5z" />
        </svg>
      </a>
    </div>
  );
};
