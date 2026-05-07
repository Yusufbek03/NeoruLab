"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Blog() {
  const { t, language } = useLanguage();

  const posts = [
    {
      title: language === "ru" 
        ? "Как AI-агент сэкономил нам 40 часов в месяц: кейс с n8n и GPT-4" 
        : "AI-agent bizga oyiga 40 soat vaqtni qanday tejadi: n8n va GPT-4 keysi",
      desc: language === "ru"
        ? "Разбираем реальный workflow: входящая заявка → AI-обработка → уведомление менеджеру за 3 секунды."
        : "Real workflow tahlili: kiruvchi ariza → AI-ishlov berish → 3 soniya ichida menejerga xabar.",
      category: language === "ru" ? "AI-автоматизация" : "AI-avtomatlashtirish",
      bg: "bg-[#0D2818]",
      icon: "🤖",
      date: language === "ru" ? "15 апреля 2025" : "15-aprel, 2025",
    },
    {
      title: language === "ru"
        ? "5 типов Telegram-ботов, которые реально продают: с примерами кода"
        : "Haqiqatda sotadigan 5 turdagi Telegram-botlar: kod namunalari bilan",
      desc: language === "ru"
        ? "Бот-квиз, бот-воронка, бот-поддержка, бот-рассылка, бот-магазин — плюсы и минусы каждого."
        : "Bot-kviz, bot-voronka, bot-qo'llab-quvvatlash, bot-xabarnoma, bot-do'kon — har birining afzalliklari.",
      category: "Telegram",
      bg: "bg-[#0D1A25]",
      icon: "✈️",
      date: language === "ru" ? "2 апреля 2025" : "2-aprel, 2025",
    },
    {
      title: language === "ru"
        ? "Next.js 15 vs Nuxt 4: что выбрать для вашего проекта в 2025 году?"
        : "Next.js 15 vs Nuxt 4: 2025-yilda loyihangiz uchun qaysi birini tanlash kerak?",
      desc: language === "ru"
        ? "Честное сравнение двух фреймворков: производительность, экосистема, сложность найма команды."
        : "Ikki freymvorkning halol solishtiruvi: unumdorlik, ekotizim, jamoani yollash murakkabligi.",
      category: language === "ru" ? "Веб-разработка" : "Veb-ishlab chiqish",
      bg: "bg-[#1A150D]",
      icon: "🌐",
      date: language === "ru" ? "18 марта 2025" : "18-mart, 2025",
    },
  ];

  return (
    <section id="blog" className="section bg-bg-secondary px-6 lg:px-[60px] py-[100px]">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
            {t("blog")}
          </span>
          <h2 className="font-syne text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-text-primary">
            {language === "ru" ? "Наш" : "Bizning"} <span className="text-accent-green">{t("blog").toLowerCase()}</span>
          </h2>
        </div>
        <Link href="#" className="hidden sm:inline-flex items-center gap-[7px] px-[22px] py-[9px] rounded-md font-sans text-[13.5px] font-semibold no-underline bg-transparent text-text-primary border border-border-accent transition-all hover:border-accent-green hover:text-accent-green">
          {language === "ru" ? "Все статьи" : "Barcha maqolalar"} →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, idx) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-bg-tertiary border border-border-dim rounded-[14px] overflow-hidden group hover:border-accent-green/25 transition-all hover:-translate-y-1"
          >
            <div className={`h-[180px] ${post.bg} flex items-center justify-center relative overflow-hidden`}>
              <div className="text-[52px] opacity-40">{post.icon}</div>
              <span className="absolute top-3.5 left-3.5 font-mono text-[10px] px-2.5 py-1 rounded bg-accent-green/15 text-accent-green border border-border-accent">
                {post.category}
              </span>
              <Link href="#" className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-accent-green text-black flex items-center justify-center font-bold text-[14px] no-underline transition-transform group-hover:scale-110">
                ↗
              </Link>
            </div>
            <div className="p-[22px]">
              <h3 className="font-syne text-[16px] font-bold leading-[1.4] mb-2.5 group-hover:text-accent-green transition-colors text-text-primary">
                {post.title}
              </h3>
              <p className="text-[13px] text-text-muted leading-[1.7]">
                {post.desc}
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border-dim">
                <div className="w-6 h-6 rounded-full bg-accent-green/15 border border-border-accent flex items-center justify-center text-[10px] text-accent-green font-bold">N</div>
                <span className="font-mono text-[11px] text-text-muted">NeoruLab Team · {post.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
