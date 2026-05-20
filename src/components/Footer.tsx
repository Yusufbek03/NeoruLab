"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { subscribeNewsletter } from "@/app/actions";

export default function Footer() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    const res = await subscribeNewsletter(email);
    if (res.success) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const socialLinks = [
    { name: "Email", icon: "/icons/gmail.svg", href: "mailto:hello@neorulab.ru" },
    { name: "Telegram", icon: "/icons/telegram.svg", href: "https://t.me/neorulab" },
  ];

  const serviceLinks = [
    t("srv1Title"),
    t("srv2Title"),
    t("srv3Title"),
    t("srvGPT"),
    t("srvCRM"),
  ];

  const companyLinks = [
    { name: t("about"), href: "/#about" },
    { name: t("cases"), href: "/#cases" },
    { name: t("blog"), href: "/#blog" },
    { name: t("careers"), href: "/#careers" },
    { name: t("contact"), href: "/#contact" },
  ];

  return (
    <footer className="bg-bg border-t border-border-dim px-6 lg:px-[60px] pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-12 pb-12 border-b border-border-dim">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-[10px] no-underline">
            <div className="w-[34px] h-[34px] rounded-lg bg-accent-green flex items-center justify-center relative overflow-hidden group">
              <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] text-black">
                <path d="M2 9C2 5.13 5.13 2 9 2s7 3.13 7 7-3.13 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="9" cy="9" r="2.5" fill="currentColor"/>
              </svg>
            </div>
            <span className="font-syne text-[18px] font-extrabold text-text-primary">
              Neoru<em className="text-accent-green not-italic">Lab</em>
            </span>
          </Link>
          <p className="text-[13.5px] text-text-muted leading-[1.85] max-w-[280px]">
            {t("footerDesc")}
          </p>
          <div className="flex gap-2.5 mt-4">
            {socialLinks.map((soc) => (
              <Link
                key={soc.name}
                href={soc.href}
                className="w-9 h-9 rounded-lg border border-border-dim text-text-muted flex items-center justify-center transition-all hover:border-accent-green hover:bg-accent-green group"
              >
                <img src={soc.icon} alt={soc.name} className="w-4 h-4 transition-all group-hover:invert dark:invert" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-syne text-[14px] font-bold mb-5 text-text-primary">{t("services")}</h5>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-[13.5px] text-text-muted hover:text-accent-green transition-colors no-underline">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-syne text-[14px] font-bold mb-5 text-text-primary">{t("company")}</h5>
          <ul className="flex flex-col gap-3">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-[13.5px] text-text-muted hover:text-accent-green transition-colors no-underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-syne text-[14px] font-bold mb-5 text-text-primary">{t("newsletter")}</h5>
          <p className="text-[13px] text-text-muted leading-[1.7]">
            {t("newsletterDesc")}
          </p>
          <form onSubmit={handleSubscribe} className="flex mt-3 relative">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              placeholder={language === "ru" ? "your@email.ru" : "your@email.uz"}
              className="flex-1 bg-bg-secondary border border-border-dim rounded-l-md px-3.5 py-2.5 text-[13px] text-text-primary outline-none focus:border-accent-green placeholder:text-[#2D3A47] disabled:opacity-55"
            />
            <button 
              type="submit"
              disabled={status === "loading"}
              className="px-4 bg-accent-green text-black rounded-r-md font-bold text-[14px] transition-colors hover:bg-accent-green-dark disabled:opacity-55 flex items-center justify-center min-w-[44px]"
            >
              {status === "loading" ? (
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                "→"
              )}
            </button>
          </form>
          {status === "success" && (
            <p className="text-[11px] text-accent-green mt-2 font-mono">
              {t("newsletterSuccess")}
            </p>
          )}
          {status === "error" && (
            <p className="text-[11px] text-[#FF5A5A] mt-2 font-mono">
              {t("newsletterError")}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center pt-7 gap-4">
        <span className="font-mono text-[12px] text-text-muted">© 2025 NeoruLab. {t("allRights")}</span>
        <div className="flex gap-5">
          <Link href="#" className="font-mono text-[12px] text-text-muted hover:text-accent-green transition-colors no-underline">
            {t("privacy")}
          </Link>
          <Link href="#" className="font-mono text-[12px] text-text-muted hover:text-accent-green transition-colors no-underline">
            {t("terms")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
