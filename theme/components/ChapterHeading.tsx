"use client";

import React from "react";
import { m } from "framer-motion";
import {
  defaultViewport,
  sealVariants,
  titleWipeVariants,
  fadeIn,
} from "../functions/animations";

interface ChapterHeadingProps {
  seal: string;
  eyebrow: string;
  title: string;
  kicker?: string;
  verticalJp?: string;
  className?: string;
}

export const ChapterHeading: React.FC<ChapterHeadingProps> = ({
  seal,
  eyebrow,
  title,
  kicker,
  verticalJp,
  className = "",
}) => {
  return (
    <div className={`relative mb-10 sm:mb-12 ${className}`}>
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Circular Kanji Seal (Rotates and scales in) */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={sealVariants}
          className="w-[60px] h-[60px] sm:w-[76px] sm:h-[76px] border-[3px] border-line rounded-full grid place-items-center font-serif text-3xl sm:text-[44px] shrink-0 relative bg-paper text-ink-new"
        >
          <span className="relative z-10 leading-none">{seal}</span>
          <div className="absolute inset-[4px] sm:inset-[5px] border border-dashed border-line rounded-full pointer-events-none" />
        </m.div>

        {/* Eyebrow & Title (Wipes in from the left) */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={titleWipeVariants}
        >
          <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-muted mb-1 sm:mb-2">
            {eyebrow}
          </div>
          <h2 className="font-display text-[38px] sm:text-[54px] lg:text-[72px] leading-[0.95] uppercase text-ink-new">
            {title}
          </h2>
          {kicker && (
            <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.08em] uppercase text-muted mt-2">
              {kicker}
            </div>
          )}
        </m.div>
      </div>

      {/* Vertical Japanese Side Strip (Fades in) */}
      {verticalJp && (
        <m.span
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="vertical-jp absolute right-0 sm:right-3 top-[-10px] text-muted text-[10px] sm:text-xs opacity-70 hidden sm:block pointer-events-none"
        >
          {verticalJp}
        </m.span>
      )}
    </div>
  );
};
