"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark">
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
