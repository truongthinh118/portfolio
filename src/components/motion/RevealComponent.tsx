"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  classNames?: Partial<Record<"wrapper" | "base", string>>;
}

export default function Reveal({
  children,
  width = "fit-content",
  classNames,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className={classNames?.wrapper}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={classNames?.base}
      >
        {children}
      </motion.div>
    </div>
  );
}
