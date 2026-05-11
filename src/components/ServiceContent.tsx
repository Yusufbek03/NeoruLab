"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface ServiceProps {
  service: {
    icon: string;
    title_ru: string;
    title_uz: string;
    about_ru: string;
    about_uz: string;
    list_ru: string[];
    list_uz: string[];
  };
}

export default function ServiceContent({ service }: ServiceProps) {
  const { language } = useLanguage();

  const title = language === "ru" ? service.title_ru : service.title_uz;
  const about = language === "ru" ? service.about_ru : service.about_uz;
  const list = language === "ru" ? service.list_ru : service.list_uz;

  return (
    <section className="relative bg-bg px-6 lg:px-[60px] pt-[150px] pb-[100px]">
      <div className="grid-bg" />
      
      <div className="max-w-[1100px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[72px] h-[72px] rounded-2xl bg-accent-green/10 border border-border-accent flex items-center justify-center text-[36px] mb-8 shadow-[0_0_20px_rgba(0,229,160,0.1)]">
            {service.icon}
          </div>
          
          <h1 className="font-syne text-[clamp(32px,6vw,72px)] font-extrabold leading-[1.05] mb-10 tracking-tight max-w-[900px]">
            {title}
          </h1>
          
          <div className="flex flex-col gap-16">
            <div className="max-w-[850px]">
              <p className="text-text-muted text-[18px] md:text-[22px] leading-[1.8]">
                {about}
              </p>
            </div>
            
            <div className="w-full">
              <h4 className="font-mono text-[11px] font-bold text-accent-green uppercase tracking-[0.2em] mb-8">
                {language === "ru" ? "Что входит в услугу:" : "Xizmat tarkibi:"}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {list.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    whileHover={{ scale: 1.01, x: 5 }}
                    className="group flex items-center gap-5 p-5 md:p-6 rounded-2xl border border-accent-green/20 bg-bg-tertiary/20 backdrop-blur-sm transition-all duration-300 hover:bg-accent-green hover:border-accent-green cursor-default"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-accent-green/30 flex items-center justify-center text-[14px] text-accent-green transition-colors group-hover:text-black group-hover:border-black/20 group-hover:bg-black/5">
                      ✓
                    </span>
                    <span className="text-[16px] md:text-[18px] font-medium text-text-primary transition-colors group-hover:text-black">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
