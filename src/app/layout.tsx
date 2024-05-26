import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import Navigator from "@/components/NavComponent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import Preloader from "@/components/PreLoader";
import { font } from "@/assets/font";

export const metadata: Metadata = {
  title: "Truong Thinh Portfolio",
  description: "Truong Thinh Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={`${font.inter.className} min-h-screen`}>
        <Preloader />
        <Providers>
          <Navigator />
          {children}
        </Providers>
        <Toaster richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
