import React from "react";

interface TextMaskRevealProps {
  lines: { text: string; className?: string }[];
  className?: string;
  delay?: number;
}

export const TextMaskReveal: React.FC<TextMaskRevealProps> = ({
  lines,
  className = "",
  delay = 0.05,
}) => {
  return (
    <h1 className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden py-0.5">
          <span
            className={`block hero-text-mask ${line.className ?? ""}`}
            style={{ animationDelay: `${delay + idx * 0.1}s` }}
          >
            {line.text}
          </span>
        </span>
      ))}
    </h1>
  );
};
