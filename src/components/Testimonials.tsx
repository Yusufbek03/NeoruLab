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
      text: language === "ru" 
        ? "NeoruLab сделали нам AI-бота для клиники за 2 недели. Пациенты записываются в 3 раза быстрее, нагрузка на администраторов упала вдвое. Команда всегда на связи и объясняет каждое решение."
        : "NeoruLab bizga klinika uchun 2 hafta ichida AI-bot tayyorlab berdi. Bemorlar 3 baravar tezroq navbatga yozilmoqda, administratorlar yuklamasi ikki baravar kamaydi. Jamoa doim aloqada.",
      color: "text-accent-green",
      bg: "bg-accent-green/10",
    },
    {
      name: "Михаил Данилов",
      role: "Founder · EduFlow",
      initials: "МД",
      text: language === "ru"
        ? "Заказали лендинг и Telegram-бота для онлайн-курсов. Запустили за 10 дней. Автоворонка в боте подняла доходимость до вебинара с 40% до 78%. Рекомендую без оговорок."
        : "Onlayn kurslar uchun landing va Telegram-bot buyurtma qildik. 10 kunda ishga tushirildi. Botdagi avtovoronka vebinarga keluvchilar sonini 40% dan 78% gacha oshirdi.",
      color: "text-accent-cyan",
      bg: "bg-accent-cyan/10",
    },
    {
      name: "Ольга Смирнова",
      role: "COO · Proptech Solutions",
      initials: "ОС",
      text: language === "ru"
        ? "Автоматизировали обработку заявок с помощью AI на n8n. Раньше менеджер тратил 4 часа в день на ручную сортировку — теперь система делает это мгновенно. ROI вышел за 2 месяца."
        : "n8n da AI yordamida arizalarni qayta ishlashni avtomatlashtirdik. Ilgari menejer kuniga 4 soat vaqt sarflardi — endi tizim buni bir zumda amalga oshiradi. ROI 2 oyda chiqdi.",
      color: "text-[#F4C542]",
      bg: "bg-[#F4C542]/10",
    },
  ];

  return (
    <section className="section bg-bg-secondary px-6 lg:px-[60px] py-[100px]">
      <div className="mb-12">
        <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
          {t("testimonialsTag")}
        </span>
        <h2 className="font-syne text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-text-primary">
          {t("testimonialsTitle1")} <span className="text-accent-green">{t("testimonialsTitle2")}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-bg-tertiary border border-border-dim rounded-[14px] p-7 flex flex-col transition-colors hover:border-border-accent"
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
