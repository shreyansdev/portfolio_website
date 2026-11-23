"use client";

import React, { useRef, useState, useEffect } from "react";
import { m, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import {
  slamSpring,
  popSpring,
  sfxShakeVariants,
  burstPopVariants,
} from "../../functions/animations";

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
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
      setIsPointerFine(mq.matches);
      const listener = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
      mq.addEventListener("change", listener);
      return () => mq.removeEventListener("change", listener);
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
      className="relative flex items-center justify-center min-h-[420px] sm:min-h-[480px] lg:min-h-[530px] w-full max-w-full overflow-visible"
      style={{ perspective: 1000 }}
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
        style={{
          x: springX,
          y: springY,
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="absolute w-[min(310px,76vw)] sm:w-[350px] lg:w-[390px] h-[350px] sm:h-[400px] lg:h-[440px] tone-shadow pointer-events-none select-none z-1"
        aria-hidden="true"
      />

      {/* Main Avatar Panel with Slam Entrance and Mouse Parallax */}
      <m.div
        style={{
          x: springX,
          y: springY,
          rotateX: springRotX,
          rotateY: springRotY,
          transformStyle: "preserve-3d",
        }}
        initial={{ scale: 1.06, rotate: -2, opacity: 0 }}
        animate={{ scale: 1, rotate: 2.2, opacity: 1 }}
        transition={slamSpring}
        className="profile-frame w-[min(310px,76vw)] sm:w-[350px] lg:w-[390px] h-[350px] sm:h-[400px] lg:h-[440px] relative z-10 overflow-hidden flex items-center justify-center bg-tone"
      >
        {children}
      </m.div>

      {/* Burst Bubble Pop In */}
      <m.div
        initial="hidden"
        animate="visible"
        variants={burstPopVariants}
        className="absolute z-20 -right-2 top-4 sm:right-2 sm:top-6"
      >
        {burstBubble}
      </m.div>

      {/* Katakana Sound Effects with Initial Shake */}
      <m.span
        initial="hidden"
        animate="visible"
        variants={sfxShakeVariants}
        className="sfx one absolute right-0 top-1 font-serif font-black vertical-rl text-[38px] sm:text-[46px] z-20 select-none pointer-events-none"
        aria-hidden="true"
      >
        {sfxOne}
      </m.span>

      <m.span
        initial="hidden"
        animate="visible"
        variants={sfxShakeVariants}
        transition={{ delay: 0.2 }}
        className="sfx two absolute left-0 bottom-4 font-serif font-black vertical-rl text-[26px] sm:text-[30px] z-20 select-none pointer-events-none"
        aria-hidden="true"
      >
        {sfxTwo}
      </m.span>
    </div>
  );
};
