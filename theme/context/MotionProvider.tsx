"use client";

import React from "react";
import { LazyMotion, domMax, MotionConfig } from "framer-motion";

interface MotionProviderProps {
  children: React.ReactNode;
}

export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domMax}>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
};
