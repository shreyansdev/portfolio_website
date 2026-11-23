"use client";

import React, { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";

interface TimelineProgressProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineProgress: React.FC<TimelineProgressProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className={`relative pl-7 sm:pl-9 ${className}`}>
      {/* Animated Timeline Spine */}
      <m.div
        style={{ scaleY, originY: 0 }}
        className="absolute left-3 top-4 bottom-4 w-[3px] bg-line pointer-events-none"
        aria-hidden="true"
      />
      {children}
    </div>
  );
};
