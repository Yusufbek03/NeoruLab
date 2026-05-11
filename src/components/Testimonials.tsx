"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t, language } = useLanguage();

  const testimonials = [
    { 
      name: "Алина Казакова", 
      role: "CEO · DocOnline", 
      initials: "АК", 
      text: t("test1Text"), 
      color: "text-accent-green", 
      bg: "bg-accent-green/10" 
    },
    { 
      name: "Михаил Данилов", 
      role: "Founder · EduFlow", 
      initials: "МД", 
      text: t("test2Text"), 
      color: "text-accent-cyan", 
      bg: "bg-accent-cyan/10" 
    },
    { 
      name: "Ольга Смирнова", 
      role: "COO · Proptech Solutions", 
      initials: "ОС", 
      text: t("test3Text"), 
      color: "text-[#F4C542]", 
      bg: "bg-[#F4C542]/10" 
    },
    { 
      name: "Дмитрий Ветров", 
      role: "CMO · FinTech Corp", 
      initials: "ДВ", 
      text: language === "ru" ? "NeoruLab автоматизировали нашу воронку в 5 раз быстрее, чем мы ожидали. Очень крутой подход к задачам." : "NeoruLab bizning voronkamizni kutganimizdan 5 baravar tezroq avtomatlashtirdi. Vazifalarga juda ijodiy yondashuv.", 
      color: "text-purple-400", 
      bg: "bg-purple-400/10" 
    },
    { 
      name: "Елена Майер", 
      role: "Product Manager · Softify", 
      initials: "ЕМ", 
      text: language === "ru" ? "Лучшие ребята, с которыми приходилось работать. AI-решения, которые реально работают на бизнес." : "Men ishlagan eng yaxshi jamoa. AI yechimlari haqiqatdan ham biznes uchun foydali.", 
      color: "text-pink-400", 
      bg: "bg-pink-400/10" 
    },
  ];

  return (
    <section className="section bg-bg-secondary px-6 lg:px-[60px] py-[100px] overflow-hidden">
      <style jsx>{`
        .ticker-animate {
          animation: ticker 20s linear infinite;
        }
        .ticker-animate:hover, .ticker-animate:active {
          animation-play-state: paused;
        }
        @keyframes ticker {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
      `}</style>

      <div className="mb-12">
        <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
          {t("testimonialsTag")}
        </span>
        <h2 className="font-syne text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-text-primary">
          {t("testimonialsTitle1")} <span className="text-accent-green">{t("testimonialsTitle2")}</span>
        </h2>
      </div>

      <div className="flex overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex gap-5 ticker-animate">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-tertiary border-[5px] border-border-dim rounded-[14px] p-7 flex flex-col w-[350px] flex-shrink-0 transition-colors hover:border-border-accent"
            >
              <div className="text-accent-green tracking-[2px] text-[12px] mb-4">★★★★★</div>
              <p className="text-[14px] text-text-muted leading-[1.85] flex-1">
                {item.text}
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border-dim">
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-syne text-[14px] font-bold border border-border-accent ${item.bg} ${item.color}`}>
                  {item.initials}
                </div>
                <div>
                  <div className="font-bold text-[14px] text-text-primary">{item.name}</div>
                  <div className="text-[12px] text-text-muted font-mono uppercase tracking-tight">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
