"use client";

const MOBILE_SCREEN_WIDTH = 700;

export const isMobile = () => {
  //   let isSSR = useIsSSR();

  if (typeof window === "undefined") {
    return false;
  }

  return window.screen.width <= MOBILE_SCREEN_WIDTH;
};
