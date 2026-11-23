"use client";

import React from "react";
import { m, HTMLMotionProps } from "framer-motion";
import { defaultViewport, staggerContainer, revealVariants } from "../../functions/animations";

interface StaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}

export const Stagger: React.FC<StaggerProps> = ({
  children,
  stagger = 0.08,
  delay = 0,
  className = "",
  ...props
}) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer(stagger, delay)}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
};

export const StaggerItem: React.FC<HTMLMotionProps<"div">> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <m.div variants={revealVariants} className={className} {...props}>
      {children}
    </m.div>
  );
};
