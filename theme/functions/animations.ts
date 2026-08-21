import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 20 },
  },
};

export const brutalHover = {
  hover: {
    x: -3,
    y: -3,
    boxShadow: "6px 6px 0px 0px #0F0F0F",
    transition: { duration: 0.15 },
  },
  tap: {
    x: 1,
    y: 1,
    boxShadow: "2px 2px 0px 0px #0F0F0F",
    transition: { duration: 0.05 },
  },
};

export const stickerRotate = (rotateDeg: number = 2): Variants => ({
  hidden: { opacity: 0, scale: 0.8, rotate: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: rotateDeg,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
});

export const heroTitleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
