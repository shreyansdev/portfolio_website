import React from "react";

interface BurstBubbleProps {
  label: string;
  value: string;
  className?: string;
}

export const BurstBubble: React.FC<BurstBubbleProps> = ({
  label,
  value,
  className = "",
}) => {
  return (
    <div
      className={`burst-bubble relative inline-flex items-center justify-center text-ink-new select-none ${className}`}
    >
      <svg
        viewBox="0 0 220 164"
        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        style={{ filter: "drop-shadow(3px 3px 0 var(--ink))" }}
        aria-hidden="true"
      >
        <polygon
          points="110,4 134,29 172,19 173,49 211,58 188,82 211,106 173,115 172,145 134,135 110,160 86,135 48,145 47,115 9,106 32,82 9,58 47,49 48,19 86,29"
          fill="var(--paper)"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5">
        <span className="font-mono text-xs uppercase tracking-[0.02em] block text-muted leading-[1.15] max-w-[134px]">
          {label}
        </span>
        <strong className="font-display text-lg sm:text-xl block text-ink-new mt-1 leading-none whitespace-nowrap">
          {value}
        </strong>
      </div>
    </div>
  );
};
