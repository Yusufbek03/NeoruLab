"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

interface ServiceData {
  id: string;
  slug: string;
  icon: string;
  title_ru: string;
  title_uz: string;
  desc_ru: string;
  desc_uz: string;
  list_ru: string[];
  list_uz: string[];
}

export default function Services({ data }: { data?: ServiceData[] }) {
  const { t, language } = useLanguage();

  const services = data?.map(s => ({
    id: s.id,
    slug: s.slug,
    icon: s.icon,
    title: language === "ru" ? s.title_ru : s.title_uz,
    desc: language === "ru" ? s.desc_ru : s.desc_uz,
    list: language === "ru" ? s.list_ru : s.list_uz,
  })).sort((a, b) => a.id.localeCompare(b.id)) || [];

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
          <Link href={`/services/${service.slug}`} key={service.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="srv-card h-full bg-bg-tertiary border-[5px] border-border-dim rounded-[14px] p-8 relative overflow-hidden transition-all hover:border-accent-green hover:-translate-y-1 group cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-green to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
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
          </Link>
        ))}
      </div>
    </section>
  );
}
