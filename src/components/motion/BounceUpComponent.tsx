"use client";
import { Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  classNames?: Partial<Record<"wrapper" | "base", string>>;
  custom?: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: "80dvh",
    opacity: 0,
  },
  onscreen: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 1,
      delay: 0.05 * index,
    },
  }),
};

export default function BounceUp({ children, classNames, custom = 0 }: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={classNames?.wrapper}
    >
      <motion.div
        className={twMerge("size-full", classNames?.base)}
        variants={cardVariants}
        custom={custom}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
