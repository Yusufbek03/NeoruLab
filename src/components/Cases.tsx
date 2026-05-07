"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Cases() {
  const { t, language } = useLanguage();

  const cases = [
    {
      id: 1,
      title: language === "ru" ? "Mebelline — интернет-магазин мебели" : "Mebelline — mebel internet-do'koni",
      desc: language === "ru" 
        ? "Полноценный магазин с каталогом 2000+ товаров, личным кабинетом, онлайн-оплатой и интеграцией с 1C. Конверсия выросла на 140%."
        : "2000+ mahsulot katalogi, shaxsiy kabinet, onlayn to'lov va 1C integratsiyasiga ega to'liq do'kon. Konversiya 140% ga oshdi.",
      tags: language === "ru" ? ["Веб-разработка", "Next.js", "E-commerce"] : ["Veb-ishlab chiqish", "Next.js", "E-commerce"],
      type: "big",
      url: "shop.mebelline.ru",
    },
    {
      id: 2,
      title: language === "ru" ? "AI-бот для клиники DocOnline" : "DocOnline klinikasi uchun AI-bot",
      desc: language === "ru"
        ? "Бот записывает пациентов, отвечает на вопросы и синхронизируется с МИС. Экономит 6 часов работы администраторов в день."
        : "Bot bemorlarni navbatga qo'yadi, savollarga javob beradi va MIS bilan sinxronlashadi. Kuniga administratorlarning 6 soat vaqtini tejaydi.",
      tags: ["Telegram Bot", "GPT-4", "CRM"],
      type: "side",
      url: "bot.doconline.ru",
    },
    {
      id: 3,
      title: language === "ru" ? "Lead Scoring для отдела продаж" : "Savdo bo'limi uchun Lead Scoring",
      desc: language === "ru"
        ? "AI автоматически скорит входящие заявки и уведомляет менеджеров. Скорость обработки выросла в 8 раз."
        : "AI kelayotgan arizalarni avtomatik ravishda baholaydi va menejerlarni xabardor qiladi. Qayta ishlash tezligi 8 baravarga oshdi.",
      tags: language === "ru" ? ["AI-автоматизация", "n8n", "LangChain"] : ["AI-avtomatlashtirish", "n8n", "LangChain"],
      type: "side",
      url: "automation.internal",
    },
  ];

  return (
    <section id="cases" className="section bg-bg-secondary px-6 lg:px-[60px] py-[100px]">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
            {language === "ru" ? "Портфолио" : "Portfoliomiz"}
          </span>
          <h2 className="font-syne text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-text-primary">
            {language === "ru" ? "Наши" : "Bizning"} <span className="text-accent-green">{language === "ru" ? "кейсы" : "keyslarimiz"}</span>
          </h2>
        </div>
        <Link href="#contact" className="hidden sm:inline-flex items-center gap-[7px] px-[22px] py-[9px] rounded-md font-sans text-[13.5px] font-semibold no-underline bg-transparent text-text-primary border border-border-accent transition-all hover:border-accent-green hover:text-accent-green">
          {language === "ru" ? "Все проекты" : "Barcha loyihalar"} →
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5">
        {/* BIG card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="case-card bg-bg-tertiary border border-border-dim rounded-[14px] overflow-hidden group hover:border-accent-green/30 transition-colors"
        >
          <div className="h-[260px] bg-bg flex items-center justify-center relative overflow-hidden">
            <div className="w-[88%] bg-[#0A0F14] rounded-lg border border-white/8 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white/4 border-b border-white/6">
                <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
                <div className="w-[7px] h-[7px] rounded-full bg-[#FFBD2E]" />
                <div className="w-[7px] h-[7px] rounded-full bg-[#28CA41]" />
                <div className="flex-1 mx-2.5 h-4 bg-white/5 rounded px-2 font-mono text-[9px] text-text-muted flex items-center">
                  {cases[0].url}
                </div>
              </div>
              <div className="p-3 flex flex-col gap-[7px]">
                <div className="flex gap-[7px]">
                  <div className="flex-[1.5] h-20 bg-accent-green/8 rounded" />
                  <div className="flex-1 flex flex-col gap-[7px]">
                    <div className="h-[18px] bg-accent-green/8 rounded" />
                    <div className="h-[12px] w-[60%] bg-accent-green/8 rounded" />
                    <div className="h-6 w-[70%] bg-accent-green/20 rounded" />
                  </div>
                </div>
                <div className="flex gap-[7px]">
                  <div className="flex-1 h-10 bg-accent-green/8 rounded" />
                  <div className="flex-1 h-10 bg-accent-green/8 rounded" />
                  <div className="flex-1 h-10 bg-accent-green/8 rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-3 flex-wrap">
              {cases[0].tags.map(tag => (
                <span key={tag} className="font-mono text-[10px] px-[9px] py-[3px] rounded bg-accent-green/7 text-accent-green border border-border-accent">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-syne text-[18px] font-bold mb-2 text-text-primary">{cases[0].title}</h3>
            <p className="text-[13px] text-text-muted leading-[1.7]">{cases[0].desc}</p>
            <Link href="#" className="inline-flex items-center gap-1.5 mt-4 font-mono text-[12px] text-accent-green no-underline group-hover:gap-2.5 transition-all">
              {language === "ru" ? "Смотреть кейс" : "Keysni ko'rish"} →
            </Link>
          </div>
        </motion.div>

        {/* Right col */}
        <div className="flex flex-col gap-5">
          {cases.slice(1).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
              className="case-card bg-bg-tertiary border border-border-dim rounded-[14px] overflow-hidden group hover:border-accent-green/30 transition-colors"
            >
              <div className={`${idx === 0 ? 'h-[200px]' : 'h-[180px]'} bg-bg flex items-center justify-center relative overflow-hidden`}>
                {idx === 0 ? (
                  /* Chatbot Mockup */
                  <div className="w-[85%] bg-[#0A0F14] rounded-[10px] border border-white/8 overflow-hidden p-[14px] flex flex-col gap-2.5">
                    <div className="flex gap-2 items-end">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] bg-accent-green text-black font-bold">N</div>
                      <div className="p-2 px-3 rounded-[10px] rounded-bl-[2px] bg-accent-green/10 text-accent-green font-mono text-[10px] leading-[1.5] max-w-[75%]">
                        {language === "ru" ? "Привет! Я AI-ассистент Neoru. 👋" : "Salom! Men Neoru AI-yordamchisiman. 👋"}
                      </div>
                    </div>
                    <div className="flex gap-2 items-end flex-row-reverse">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] bg-white/10 text-text-muted">U</div>
                      <div className="p-2 px-3 rounded-[10px] rounded-br-[2px] bg-white/7 text-text-primary font-mono text-[10px] leading-[1.5] max-w-[75%]">
                        {language === "ru" ? "Хочу консультацию" : "Maslahat olmoqchiman"}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Workflow Mockup */
                  <div className="w-[88%] p-3.5 bg-[#0A0F14] rounded-[10px] border border-white/8">
                    <div className="font-mono text-[10px] text-text-muted mb-2.5">// n8n workflow</div>
                    <div className="flex gap-2 items-center flex-wrap">
                      <div className="px-2.5 py-1.5 bg-accent-green/10 border border-border-accent rounded-md font-mono text-[10px] text-accent-green">CRM Webhook</div>
                      <div className="text-text-muted text-[12px]">→</div>
                      <div className="px-2.5 py-1.5 bg-accent-cyan/8 border border-accent-cyan/15 rounded-md font-mono text-[10px] text-accent-cyan">GPT Score</div>
                      <div className="text-text-muted text-[12px]">→</div>
                      <div className="px-2.5 py-1.5 bg-accent-green/10 border border-border-accent rounded-md font-mono text-[10px] text-accent-green">Telegram Alert</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {item.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] px-[9px] py-[3px] rounded bg-accent-green/7 text-accent-green border border-border-accent">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-syne text-[18px] font-bold mb-2 text-text-primary">{item.title}</h3>
                <p className="text-[13px] text-text-muted leading-[1.7]">{item.desc}</p>
                <Link href="#" className="inline-flex items-center gap-1.5 mt-4 font-mono text-[12px] text-accent-green no-underline group-hover:gap-2.5 transition-all">
                  {language === "ru" ? "Смотреть кейс" : "Keysni ko'rish"} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
