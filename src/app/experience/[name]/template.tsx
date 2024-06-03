"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

export default function ExperienceDetailTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return <div ref={ref}>{children}</div>;
}
