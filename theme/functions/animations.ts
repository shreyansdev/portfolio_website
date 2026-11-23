import { Variants } from "framer-motion";

export const defaultViewport = { once: true, amount: 0.2 } as const;

export const mangaEase = [0.22, 1, 0.36, 1] as const;

export const slamSpring = {
  type: "spring",
  stiffness: 380,
  damping: 24,
  mass: 0.8,
} as const;

export const popSpring = {
  type: "spring",
  stiffness: 420,
  damping: 20,
} as const;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: mangaEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export const slideUpMask: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.5, ease: mangaEase },
  },
};

export const sealVariants: Variants = {
  hidden: { scale: 0.6, rotate: -30, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: mangaEase },
  },
};

export const titleWipeVariants: Variants = {
  hidden: { x: -24, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: mangaEase },
  },
};

export const burstPopVariants: Variants = {
  hidden: { scale: 0.5, rotate: -12, opacity: 0 },
  visible: {
    scale: 1,
    rotate: -5,
    opacity: 1,
    transition: popSpring,
  },
};

export const sfxShakeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    x: [0, -3, 3, -2, 2, 0],
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const stampLetterVariants: Variants = {
  hidden: { scale: 1.8, opacity: 0, y: -24 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 450, damping: 20 },
  },
};

export const staggerContainer = (
  stagger: number = 0.08,
  delay: number = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25 },
  },
};
