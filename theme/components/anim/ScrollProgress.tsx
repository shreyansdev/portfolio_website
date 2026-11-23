"use client";

import React from "react";
import { m, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <m.div
      style={{ scaleX, originX: 0 }}
      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-ink-new z-50 pointer-events-none"
      aria-hidden="true"
    />
  );
};
