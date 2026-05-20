"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();

  const stats = [
    {
      num: "3",
      suffix: "×",
      label: t("whyUsStat1"),
      icon: "🚀",
    },
    {
      num: "7",
      suffix: t("days"),
      label: t("whyUsStat2"),
      icon: "⚡",
    },
    {
      num: "120",
      suffix: "+",
      label: t("whyUsStat3"),
      icon: "🤖",
    },
    {
      num: "98",
      suffix: "%",
      label: t("whyUsStat4"),
      icon: "✅",
    },
  ];

  return (
    <section className="section bg-bg overflow-hidden px-6 lg:px-[60px] py-[100px] relative">
      <div className="glow glow-green w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-10" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
            {t("whyUsTag")}
          </span>
          <h2 className="font-syne text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-5 text-text-primary">
            {t("whyUsTitle1")}<br />{t("whyUsTitle2")}<br /><span className="text-accent-green">{t("whyUsTitle3")}</span>
          </h2>
          <p className="text-[15px] text-text-muted leading-[1.85] max-w-[500px] mt-5">
            {t("whyUsDesc")}
          </p>
          <a href="#contact" className="inline-flex items-center gap-[7px] px-[22px] py-[9px] rounded-md font-sans text-[13.5px] font-semibold no-underline bg-accent-green text-black transition-all hover:bg-accent-green-dark hover:-translate-y-px hover:shadow-[0_0_24px_rgba(0,229,160,0.4)] mt-8">
            {t("whyUsDiscuss")} →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-secondary border border-border-dim rounded-xl p-7 relative overflow-hidden transition-colors hover:border-border-accent group"
            >
              <div className="absolute bottom-3 right-4 text-[40px] opacity-10 group-hover:opacity-20 transition-opacity">
                {stat.icon}
              </div>
              <div className="font-syne text-[38px] font-extrabold text-text-primary">
                {stat.num}<span className="text-accent-green">{stat.suffix}</span>
              </div>
              <div className="text-[13px] text-text-muted mt-1.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
