"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface CaseData {
  slug: string;
  title_ru: string;
  title_uz: string;
  desc_ru: string;
  desc_uz: string;
  tags_ru: string[];
  tags_uz: string[];
  url: string;
  image?: string;
  type: "big" | "side";
}

export default function Cases({ data }: { data?: CaseData[] }) {
  const { t, language } = useLanguage();

  const cases = data?.map(c => ({
    id: c.slug,
    title: language === "ru" ? c.title_ru : c.title_uz,
    desc: language === "ru" ? c.desc_ru : c.desc_uz,
    tags: language === "ru" ? c.tags_ru : c.tags_uz,
    url: c.url,
    image: c.image,
    type: c.type,
  })) || [];

  const bigCase = cases.find(c => c.type === "big") || cases[0];
  const sideCases = cases.filter(c => c !== bigCase);

  if (!bigCase) return null;

  return (
    <section id="cases" className="section bg-bg-secondary px-6 lg:px-[60px] py-[100px]">
      <div className="mb-12">
        <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
          {t("portfolio")}
        </span>
        <h2 className="font-syne text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-text-primary">
          {t("our")} <span className="text-accent-green">{t("casesTitle")}</span>
        </h2>
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
            {bigCase.image ? (
              <Image 
                src={bigCase.image} 
                alt={bigCase.title} 
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-[88%] bg-[#0A0F14] rounded-lg border border-white/8 overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-white/4 border-b border-white/6">
                  <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
                  <div className="w-[7px] h-[7px] rounded-full bg-[#FFBD2E]" />
                  <div className="w-[7px] h-[7px] rounded-full bg-[#28CA41]" />
                  <div className="flex-1 mx-2.5 h-4 bg-white/5 rounded px-2 font-mono text-[9px] text-text-muted flex items-center">
                    {bigCase.url}
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
            )}
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-3 flex-wrap">
              {bigCase.tags.map(tag => (
                <span key={tag} className="font-mono text-[10px] px-[9px] py-[3px] rounded bg-accent-green/7 text-accent-green border border-border-accent">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-syne text-[18px] font-bold mb-2 text-text-primary">{bigCase.title}</h3>
            <p className="text-[13px] text-text-muted leading-[1.7]">{bigCase.desc}</p>
            <div className="flex items-center gap-4 mt-4">
              <Link href={`/cases/${bigCase.id}`} className="inline-flex items-center gap-1.5 font-mono text-[12px] text-accent-green no-underline hover:gap-2.5 transition-all">
                {t("viewCase")} →
              </Link>
              {bigCase.url && (
                <a 
                  href={bigCase.url.startsWith('http') ? bigCase.url : `https://${bigCase.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[12px] text-text-muted hover:text-white transition-colors"
                >
                  {t("live")} ↗
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right col */}
        <div className="flex flex-col gap-5">
          {sideCases.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
              className="case-card bg-bg-tertiary border border-border-dim rounded-[14px] overflow-hidden group hover:border-accent-green/30 transition-colors"
            >
              <div className={`${idx === 0 ? 'h-[200px]' : 'h-[180px]'} bg-bg flex items-center justify-center relative overflow-hidden`}>
                {item.image ? (
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : idx === 0 ? (
                  /* Chatbot Mockup */
                  <div className="w-[85%] bg-[#0A0F14] rounded-[10px] border border-white/8 overflow-hidden p-[14px] flex flex-col gap-2.5">
                    <div className="flex gap-2 items-end">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] bg-accent-green text-black font-bold">N</div>
                      <div className="p-2 px-3 rounded-[10px] rounded-bl-[2px] bg-accent-green/10 text-accent-green font-mono text-[10px] leading-[1.5] max-w-[75%]">
                        {t("chatbotHi")}
                      </div>
                    </div>
                    <div className="flex gap-2 items-end flex-row-reverse">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] bg-white/10 text-text-muted">U</div>
                      <div className="p-2 px-3 rounded-[10px] rounded-br-[2px] bg-white/7 text-text-primary font-mono text-[10px] leading-[1.5] max-w-[75%]">
                        {t("chatbotConsult")}
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
                <div className="flex items-center gap-4 mt-4">
                  <Link href={`/cases/${item.id}`} className="inline-flex items-center gap-1.5 font-mono text-[12px] text-accent-green no-underline hover:gap-2.5 transition-all">
                    {t("viewCase")} →
                  </Link>
                  {item.url && (
                    <a 
                      href={item.url.startsWith('http') ? item.url : `https://${item.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[12px] text-text-muted hover:text-white transition-colors"
                    >
                      {t("live")} ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
