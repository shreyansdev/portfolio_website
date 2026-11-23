import React from "react";

interface SpeechBubbleProps {
  children: React.ReactNode;
  variant?: "quote-tail" | "oval";
  className?: string;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  children,
  variant = "quote-tail",
  className = "",
}) => {
  if (variant === "oval") {
    return (
      <div
        className={`border-2 border-line rounded-full py-3 px-5 text-center font-mono text-xs bg-paper text-ink-new ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`quote-bubble border-2 border-line bg-tone p-6 sm:p-7 relative text-ink-new ${className}`}
    >
      {children}
      {/* Speech dialogue tail */}
      <div
        className="absolute left-9 -bottom-[17px] w-7 h-7 bg-tone border-l-2 border-b-2 border-line pointer-events-none"
        style={{ transform: "skew(-25deg) rotate(-25deg)" }}
      />
    </div>
  );
};
