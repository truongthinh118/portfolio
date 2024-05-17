"use client";
import { useIsSSR } from "@react-aria/ssr";

const MOBILE_SCREEN_WIDTH = 700;

export const isMobile = () => {
  let isSSR = useIsSSR();

  if (isSSR || typeof window === "undefined") {
    return false;
  }

  return window.screen.width <= MOBILE_SCREEN_WIDTH;
};
