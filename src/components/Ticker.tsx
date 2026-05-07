"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Ticker() {
  const { t, language } = useLanguage();

  const items = language === "ru" ? [
    "Сайты",
    "Telegram боты",
    "AI-автоматизация",
    "GPT-агенты",
    "n8n / Make",
    "React / Next.js",
    "CRM-интеграции",
  ] : [
    "Saytlar",
    "Telegram botlar",
    "AI-avtomatlashtirish",
    "GPT-agentlar",
    "n8n / Make",
    "React / Next.js",
    "CRM integratsiyalari",
  ];

  // Double the items for seamless scrolling
  const tickerItems = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden bg-accent-green py-4">
      <div className="flex w-max animate-ticker">
        {tickerItems.map((item, idx) => (
          <div key={idx} className="flex items-center whitespace-nowrap px-5 font-syne text-[16px] font-bold text-black">
            {item} <span className="text-black/35 ml-2">+</span>
          </div>
        ))}
      </div>
    </div>
  );
}
