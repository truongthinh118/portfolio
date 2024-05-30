"use client";

import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider
      id="app-container"
      navigate={router.push}
      className="relative hidden"
    >
      <NextThemesProvider enableSystem={false} attribute="class">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
