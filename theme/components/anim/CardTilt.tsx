"use client";

import React, { useRef, useState, useEffect } from "react";
import { m, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTilt: React.FC<CardTiltProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const motionReduced = useReducedMotion();
  const shouldReduceMotion = Boolean(motionReduced || prefersReduced);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
      setIsPointerFine(mq.matches);
      const listener = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
      mq.addEventListener("change", listener);

      const rmq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReduced(rmq.matches);
      const rmListener = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
      rmq.addEventListener("change", rmListener);

      return () => {
        mq.removeEventListener("change", listener);
        rmq.removeEventListener("change", rmListener);
      };
    }
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220 };
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-3, 3]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerFine || shouldReduceMotion) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={shouldReduceMotion ? { perspective: "none" } : { perspective: 1000 }} className="h-full">
      <m.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          shouldReduceMotion
            ? {}
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        className={`h-full ${className}`}
      >
        {children}
      </m.div>
    </div>
  );
};
