import { Variants } from "framer-motion";

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerOne: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: "opacity",
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: "opacity",
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: "opacity",
  },
};

export const defaultFadeInScaleVariants = {
  initial: {
    scale: 0.4,
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.8, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    scale: 0.85,
    opacity: 0,
    transition: { duration: 0.8, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};

export const defaultFadeInUpVariants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};

export const defaultFadeInLeftVariants = {
  initial: {
    x: -90,
    opacity: 0,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};
