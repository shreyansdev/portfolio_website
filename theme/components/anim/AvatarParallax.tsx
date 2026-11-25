"use client";

import React, { useRef, useState, useEffect } from "react";
import { m, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface AvatarParallaxProps {
  children: React.ReactNode;
  burstBubble: React.ReactNode;
  sfxOne: string;
  sfxTwo: string;
}

export const AvatarParallax: React.FC<AvatarParallaxProps> = ({
  children,
  burstBubble,
  sfxOne,
  sfxTwo,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const springConfig = { damping: 22, stiffness: 200, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const springRotX = useSpring(
    useTransform(mouseY, [-200, 200], [3, -3]),
    springConfig
  );
  const springRotY = useSpring(
    useTransform(mouseX, [-200, 200], [-3, 3]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerFine || shouldReduceMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = Math.max(-10, Math.min(10, (e.clientX - centerX) * 0.05));
    const offsetY = Math.max(-10, Math.min(10, (e.clientY - centerY) * 0.05));
    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center pt-[164px] sm:pt-[182px] lg:pt-[204px] pb-2 sm:pb-4 w-full max-w-full overflow-visible"
      style={shouldReduceMotion ? undefined : { perspective: 1000 }}
    >
      {/* Slow Ambient Rotating Radial Focus Lines (CSS Animation) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 focus-lines-spin"
        viewBox="0 0 500 500"
        aria-hidden="true"
      >
        <defs>
          <pattern id="heroFocusDots" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="var(--ink)" />
          </pattern>
        </defs>
        <g stroke="var(--ink)" strokeWidth="1.2" opacity="0.35">
          <path d="M250 250L0 20M250 250L35 0M250 250L120 0M250 250L220 0M250 250L330 0M250 250L450 0M250 250L500 100M250 250L500 220M250 250L500 360M250 250L420 500M250 250L300 500M250 250L160 500M250 250L40 470M250 250L0 350M250 250L0 180" />
        </g>
        <circle cx="250" cy="250" r="180" fill="url(#heroFocusDots)" opacity="0.16" />
      </svg>

      {/* Tone Halftone Shadow Offset */}
      <m.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: springX,
                y: springY,
              }
        }
        className="absolute pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="ml-6 sm:ml-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4">
          <div className="w-[min(70vw,260px)] h-[min(56vw,210px)] sm:w-[290px] sm:h-[320px] lg:w-[244px] lg:h-[285px] xl:w-[306px] xl:h-[355px] tone-shadow hero-tone-in" />
        </div>
      </m.div>

      {/* Main Avatar Panel with CSS Slam Entrance and Mouse Parallax */}
      <m.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: springX,
                y: springY,
                rotateX: springRotX,
                rotateY: springRotY,
                transformStyle: "preserve-3d",
              }
        }
        className="relative z-10 ml-6 sm:ml-0"
      >
        <div className="profile-frame hero-avatar-slam w-[min(70vw,260px)] h-[min(56vw,210px)] sm:w-[290px] sm:h-[320px] lg:w-[244px] lg:h-[285px] xl:w-[306px] xl:h-[355px] relative overflow-hidden flex items-center justify-center bg-paper">
          {children}
        </div>
      </m.div>

      {/* Burst Bubble Pop In */}
      <div className="absolute z-20 right-0 top-0 sm:right-2 hero-burst-pop">
        {burstBubble}
      </div>

      {/* Katakana Sound Effects with Initial Shake */}
      <span
        className="sfx one hero-sfx-shake absolute left-1 sm:left-2 top-2 font-serif font-black leading-none text-[32px] sm:text-[40px] xl:text-[44px] z-20 select-none pointer-events-none"
        aria-hidden="true"
        lang="ja"
      >
        {sfxOne}
      </span>

      <span
        style={{ animationDelay: "0.2s" }}
        className="sfx two hero-sfx-shake absolute left-0 bottom-4 font-serif font-black leading-none text-[24px] sm:text-[28px] xl:text-[32px] z-20 select-none pointer-events-none"
        aria-hidden="true"
        lang="ja"
      >
        {sfxTwo}
      </span>
    </div>
  );
};
