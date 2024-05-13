import type { Metadata } from "next";
import { Inter, Jomhuria, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Preloader from "./components/preloader";
import Navigator from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const jomhuria = Jomhuria({
  subsets: ["latin"],
  weight: ["400"],
});

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
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <Preloader />
        <Providers>
          <div id="app-container" className="relative hidden flex-col">
            <Navigator />
            {children}
          </div>
        </Providers>
        <Toaster richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
