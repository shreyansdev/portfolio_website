"use client";

import React from "react";
import { m, HTMLMotionProps } from "framer-motion";
import { defaultViewport, revealVariants } from "../../functions/animations";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
  ...props
}) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={revealVariants}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
};
