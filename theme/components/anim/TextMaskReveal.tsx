"use client";

import React from "react";
import { m } from "framer-motion";
import { mangaEase } from "../../functions/animations";

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
          <m.span
            className={`block ${line.className ?? ""}`}
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.55,
              ease: mangaEase,
              delay: delay + idx * 0.1,
            }}
          >
            {line.text}
          </m.span>
        </span>
      ))}
    </h1>
  );
};
