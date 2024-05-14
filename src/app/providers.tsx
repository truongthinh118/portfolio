"use client";

import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/system";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider
      id="app-container"
      navigate={router.push}
      className="hidden"
    >
      {children}
    </NextUIProvider>
  );
}
