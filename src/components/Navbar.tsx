"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { Moon, Sun, Languages } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
const navLinks = [
  { name: t("home"), href: "/#home", id: "home" },
  { name: t("services"), href: "/#services", id: "services" },
  { name: t("cases"), href: "/#cases", id: "cases" },
  { name: t("process"), href: "/#process", id: "process" },
  { name: language === 'ru' ? 'О нас' : 'Biz haqimizda', href: "/#about", id: "about" },
  { name: t("contact"), href: "/#contact", id: "contact" },
];

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 flex items-center px-6 lg:px-[60px] h-[68px] bg-bg/85 backdrop-blur-lg border-b border-border-dim">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link href="/" className="inline-flex items-center gap-[10px] no-underline">
          <div className="w-[34px] h-[34px] rounded-lg bg-accent-green flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20" />
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] text-black">
              <path d="M2 9C2 5.13 5.13 2 9 2s7 3.13 7 7-3.13 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="9" cy="9" r="2.5" fill="currentColor"/>
              <path d="M9 2v2M9 14v2M2 9h2M14 9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-syne text-[18px] font-extrabold text-text-primary">
            Neoru<em className="text-accent-green not-italic">Lab</em>
          </span>
        </Link>
      </div>

      {/* Center: Menu */}
      <div className="hidden xl:flex flex-1 justify-center">
        <ul className="flex items-center gap-7 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="text-[13.5px] font-medium no-underline transition-colors tracking-wide text-text-muted hover:text-accent-green whitespace-nowrap"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Actions */}
      <div className="flex-1 flex items-center justify-end gap-4">
        {/* Language Switcher */}
        <button
          onClick={() => setLanguage(language === "ru" ? "uz" : "ru")}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-dim text-text-primary hover:border-accent-green transition-all"
        >
          <Languages size={16} className="text-accent-green" />
          <span className="text-[12px] font-bold font-mono">{language.toUpperCase()}</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-dim text-text-primary hover:border-accent-green transition-all"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <Link
          href="/#contact"
          className="hidden sm:inline-flex items-center gap-[7px] px-[22px] py-[9px] rounded-md font-sans text-[13.5px] font-semibold no-underline bg-accent-green text-black transition-all hover:bg-accent-green-dark hover:-translate-y-px hover:shadow-[0_0_24px_rgba(0,229,160,0.4)]"
        >
          {t("discuss")}
        </Link>
      </div>
    </nav>
  );
}
