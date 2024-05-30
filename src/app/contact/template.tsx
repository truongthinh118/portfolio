"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";

export default function ContactTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isVisible, setIsVisible] = useState(true);

  const variants = {
    inView: {
      clipPath: "inset(0 0 0 100%)",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    notInView: {
      clipPath: "inset(0 0 0 0)",
    },
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.main
            ref={ref}
            initial={false}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "hsl(var(--nextui-background))",
              opacity: 1,
              zIndex: 1000,
            }}
            variants={variants}
            animate={isInView ? "inView" : "notInView"}
            onAnimationComplete={() => setIsVisible(false)}
          />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
