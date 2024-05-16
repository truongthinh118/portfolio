"use client";
import React, { useEffect, useState } from "react";
import {
  Switch,
  useSwitch,
  VisuallyHidden,
  SwitchProps,
  Button,
} from "@nextui-org/react";
import { SunIcon } from "./icon/SunIcon";
import { MoonIcon } from "./icon/MoonIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitch(props: SwitchProps) {
  const [isSelected, setSelected] = useState(true);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (isSelected) setTheme("light");
    else setTheme("dark");
  }, [isSelected]);

  useEffect(() => {
    setSelected(!window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, [window.matchMedia("(prefers-color-scheme: dark)").matches]);

  //   useEffect(() => {
  //     localStorage.theme = theme;
  //   }, [theme]);

  return (
    <Button
      onPress={() => setSelected(!isSelected)}
      className="h-min min-h-min w-min min-w-min p-2 text-inherit"
      isIconOnly
      variant="light"
      disableRipple
    >
      {isSelected ? <SunIcon className="h-6" /> : <MoonIcon className="h-6" />}
    </Button>
  );
}
