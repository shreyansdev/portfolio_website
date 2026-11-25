"use client";

import React from "react";
import { m, HTMLMotionProps } from "framer-motion";
import { defaultViewport, staggerContainer, revealVariants } from "../../functions/animations";

interface StaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  cssEntrance?: boolean;
}

export const Stagger: React.FC<StaggerProps> = ({
  children,
  stagger = 0.08,
  delay = 0,
  className = "",
  cssEntrance = false,
  ...props
}) => {
  if (cssEntrance) {
    return <div className={className}>{children}</div>;
  }

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

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  cssDelay?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = "",
  cssDelay,
  ...props
}) => {
  if (cssDelay !== undefined) {
    return (
      <div
        className={`hero-reveal ${className}`}
        style={{ animationDelay: `${cssDelay}s` }}
      >
        {children}
      </div>
    );
  }

  return (
    <m.div variants={revealVariants} className={className} {...props}>
      {children}
    </m.div>
  );
};
