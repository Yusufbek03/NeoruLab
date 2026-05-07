import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains-mono",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "NeoruLab — Сайты, Боты, AI-автоматизация",
  description: "Digital-агентство нового поколения. Строим сайты, ботов и AI-системы, которые работают на ваш бизнес 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} ${manrope.variable} antialiased selection:bg-accent-green selection:text-black`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
