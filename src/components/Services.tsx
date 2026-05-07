"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "01",
      icon: "🌐",
      title: t("srv1Title"),
      desc: t("srv1Desc"),
      list: [
        t("srv1Item1"),
        t("srv1Item2"),
        t("srv1Item3"),
        t("srv1Item4"),
      ],
    },
    {
      id: "02",
      icon: "🤖",
      title: t("srv2Title"),
      desc: t("srv2Desc"),
      list: [
        t("srv2Item1"),
        t("srv2Item2"),
        t("srv2Item3"),
        t("srv2Item4"),
      ],
    },
    {
      id: "03",
      icon: "⚡",
      title: t("srv3Title"),
      desc: t("srv3Desc"),
      list: [
        t("srv3Item1"),
        t("srv3Item2"),
        t("srv3Item3"),
        t("srv3Item4"),
      ],
    },
  ];

  return (
    <section id="services" className="section relative bg-bg-secondary px-6 lg:px-[60px] py-[100px]">
      <div className="grid-bg" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-[60px]">
        <div>
          <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
            {t("whatWeDo")}
          </span>
          <h2 className="font-syne text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight">
            {t("ourServices").split(" ")[0]} <span className="text-accent-green">{t("ourServices").split(" ")[1]}</span>
          </h2>
        </div>
        <p className="text-[15px] text-text-muted leading-[1.85] max-w-[500px]">
          {t("serviceDesc")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="srv-card bg-bg-tertiary border border-border-dim rounded-[14px] p-8 relative overflow-hidden transition-all hover:border-accent-green hover:-translate-y-1 group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-green to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            
            <div className="w-[52px] h-[52px] rounded-xl bg-accent-green/8 border border-border-accent flex items-center justify-center text-[22px] mb-6">
              {service.icon}
            </div>
            <h3 className="font-syne text-[20px] font-bold mb-3">{service.title}</h3>
            <p className="text-[14px] text-text-muted leading-[1.8]">{service.desc}</p>
            
            <ul className="list-none mt-5 flex flex-col gap-2">
              {service.list.map((item) => (
                <li key={item} className="font-mono text-[12px] text-text-muted flex items-center gap-2">
                  <span className="text-accent-green">→</span> {item}
                </li>
              ))}
            </ul>

            <div className="absolute bottom-6 right-7 font-syne text-[48px] font-extrabold text-text-primary/5 leading-none select-none">
              {service.id}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
