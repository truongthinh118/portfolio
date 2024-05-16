"use client";
import { Button } from "@nextui-org/react";
import { SunIcon } from "./icon/SunIcon";
import { MoonIcon } from "./icon/MoonIcon";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  return (
    <Button
      onPress={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
      className="h-min min-h-min w-min min-w-min p-2 text-inherit"
      isIconOnly
      variant="light"
      disableRipple
    >
      {theme !== "light" || isSSR ? (
        <SunIcon className="h-6" />
      ) : (
        <MoonIcon className="h-6" />
      )}
    </Button>
  );
}
