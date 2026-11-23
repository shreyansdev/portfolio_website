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
      className={`burst-bubble bg-paper border-2 border-line text-ink-new text-center p-3 select-none ${className}`}
      style={{
        clipPath:
          "polygon(50% 0, 60% 16%, 78% 4%, 80% 24%, 100% 30%, 86% 48%, 100% 65%, 78% 70%, 82% 94%, 60% 84%, 48% 100%, 38% 82%, 16% 95%, 20% 72%, 0 62%, 15% 47%, 2% 27%, 25% 25%, 27% 4%, 43% 17%)",
      }}
    >
      <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider block text-muted leading-tight">
        {label}
      </span>
      <strong className="font-display text-sm sm:text-base md:text-lg block text-ink-new mt-0.5 leading-tight">
        {value}
      </strong>
    </div>
  );
};
