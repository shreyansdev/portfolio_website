import React from "react";

interface ProjectCoverArtProps {
  title: string;
  ariaLabel?: string;
  className?: string;
}

export const ProjectCoverArt: React.FC<ProjectCoverArtProps> = ({
  title,
  ariaLabel,
  className = "w-full h-auto",
}) => {
  switch (title) {
    case "AI Image Detector":
      return (
        <svg
          viewBox="0 0 220 260"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label={ariaLabel ?? "Magnifying glass over a pixelated face"}
          role="img"
          className={className}
        >
          <path d="M50 35h120v145H50z" strokeDasharray="4 7" />
          <path
            d="M77 70h22v22H77zm44 0h22v22h-22zM88 112h44v12H88zm-11 28h22v22H77zm66 0h22v22h-22z"
            fill="currentColor"
          />
          <circle cx="111" cy="112" r="70" strokeWidth="8" />
          <path d="m161 164 42 52" strokeWidth="18" />
          <path d="M90 101q21-19 42 0M93 145q18 13 36 0" strokeWidth="3" />
        </svg>
      );

    case "CipherChat":
      return (
        <svg
          viewBox="0 0 220 260"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label={ariaLabel ?? "Two speech bubbles with a padlock between them"}
          role="img"
          className={className}
        >
          <path d="M15 45h93v68H65l-28 25v-25H15z" />
          <path d="M113 112h92v68h-23v25l-27-25h-42z" />
          <path d="M90 90h40v40H90z" fill="var(--paper)" />
          <rect x="91" y="108" width="38" height="32" rx="4" fill="var(--paper)" />
          <path d="M100 108V96a10 10 0 0 1 20 0v12m-10 12v8" />
        </svg>
      );

    case "Internet Weather Station":
      return (
        <svg
          viewBox="0 0 220 260"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label={ariaLabel ?? "Handheld weather device with clouds and rain"}
          role="img"
          className={className}
        >
          <rect x="48" y="22" width="124" height="214" rx="14" />
          <rect x="61" y="40" width="98" height="151" />
          <path
            d="M78 104q0-22 24-22 10-29 37-15 17 8 14 28 18 2 15 19H80q-12-2-2-10z"
            fill="var(--paper)"
          />
          <path d="m93 133-8 18m35-18-8 18m35-18-8 18" strokeWidth="4" />
          <circle cx="110" cy="213" r="8" />
          <path d="M72 65h30" />
        </svg>
      );

    case "Web Serial Terminal":
      return (
        <svg
          viewBox="0 0 220 260"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label={ariaLabel ?? "Terminal window with a USB cable plugged in"}
          role="img"
          className={className}
        >
          <rect x="20" y="35" width="180" height="145" rx="5" />
          <path d="M20 65h180M40 50h3m15 0h3m15 0h3" />
          <path d="m48 92 24 18-24 18m38 0h44" strokeWidth="5" />
          <path d="M110 180v28q0 16 16 16h24" />
          <rect x="150" y="213" width="36" height="18" rx="3" />
          <path d="M160 213v-9h16v9" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 220 260"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label={ariaLabel ?? "Project cover art"}
          role="img"
          className={className}
        >
          <rect x="25" y="30" width="170" height="200" rx="6" />
          <path d="M25 65h170M45 48h4m12 0h4m12 0h4" />
          <path d="m60 110 25 20-25 20m35 0h45" strokeWidth="5" />
        </svg>
      );
  }
};
