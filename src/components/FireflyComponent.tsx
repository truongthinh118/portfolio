"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

export default function FireFly() {
  const fireflies = Array.from({ length: 15 }, (_, i) => (
    <span key={i} className="firefly" />
  ));

  const { theme } = useTheme();
  const isSSR = useIsSSR();

  return <>{(theme === "dark" || isSSR) && <>{fireflies}</>}</>;
}
