"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      id: "01",
      title: t("step1Title"),
      desc: t("step1Desc"),
    },
    {
      id: "02",
      title: t("step2Title"),
      desc: t("step2Desc"),
    },
    {
      id: "03",
      title: t("step3Title"),
      desc: t("step3Desc"),
    },
    {
      id: "04",
      title: t("step4Title"),
      desc: t("step4Desc"),
    },
  ];

  return (
    <section id="process" className="section bg-bg px-6 lg:px-[60px] py-[100px]">
      <div className="text-center mb-16">
        <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
          {t("howWeWork")}
        </span>
        <h2 className="font-syne text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight">
          {t("transparentProcess").split(" ")[0]} <span className="text-accent-green">{t("transparentProcess").split(" ")[1]}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
        <div className="hidden lg:block absolute top-[32px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border-accent to-transparent" />
        
        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="step px-6 text-center relative group"
          >
            <div className="w-16 h-16 rounded-full bg-bg-secondary border border-border-accent flex items-center justify-center font-syne text-[20px] font-extrabold text-accent-green mx-auto mb-7 relative z-10 transition-colors group-hover:bg-accent-green group-hover:text-black group-hover:border-accent-green">
              {step.id}
            </div>
            <h3 className="font-syne text-[16px] font-bold mb-2.5">{step.title}</h3>
            <p className="text-[13px] text-text-muted leading-[1.75]">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
