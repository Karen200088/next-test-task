"use client";

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { AppWrapper } from "@/app/AppProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-secondary-950 overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
