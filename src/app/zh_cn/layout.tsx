import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import Preloader from "../../components/PreLoader";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="zh">
      <body className={`${inter.className} min-h-screen`}>
        <Providers>
          <Preloader />
          <div id="content" className="container hidden">
            {children}
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
