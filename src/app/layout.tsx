import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Preloader from './components/preloader';
import Navigator from "./components/nav";
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Truong Thinh Portfolio",
  description: "Truong Thinh Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <Preloader />
        <Providers>
          <div id="app-container" className="hidden relative flex flex-col">
            <Navigator />
            {children}
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
