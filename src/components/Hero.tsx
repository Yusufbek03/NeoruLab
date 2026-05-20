"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { num: "120", label: t("stat1"), suffix: "+" },
    { num: "98", label: t("stat2"), suffix: "%" },
    { num: "3", label: t("stat3"), suffix: "×" },
    { num: "24", label: t("stat4"), suffix: "/7" },
  ];

  const chips = [
    "React / Next.js",
    "Telegram Bot API",
    "OpenAI / LangChain",
    "n8n / Make",
    "Python / Node.js",
  ];

  return (
    <section id="home" className="relative overflow-hidden min-h-[calc(100vh-68px)] flex items-center px-6 lg:px-[60px] py-20">
      <div className="grid-bg" />
      <div className="glow glow-green w-[600px] h-[600px] top-[-200px] right-[-100px]" />
      <div className="glow glow-cyan w-[400px] h-[400px] bottom-[-100px] left-[200px] opacity-15" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center w-full">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-[12px] text-accent-green tracking-widest border border-border-accent px-[14px] py-1.5 rounded-sm mb-6"
          >
            <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-blink" />
            {t("accepting")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-syne text-[clamp(38px,5vw,68px)] font-extrabold leading-[1.05] tracking-tight mb-5"
          >
            {t("heroTitle1")}<br />
            {t("heroTitle2")} <span className="text-accent-green">{t("heroTitle3")}</span><br />
            <span className="text-transparent stroke-[1px] stroke-text-primary/30 [-webkit-text-stroke:1px_var(--text-primary)] opacity-30">
              {t("heroTitle4")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] text-text-muted leading-[1.8] max-width-[440px] mt-5"
          >
            {t("heroSub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3 mt-9 flex-wrap"
          >
            <a href="#cases" className="inline-flex items-center gap-[7px] px-[22px] py-[9px] rounded-md font-sans text-[13.5px] font-semibold no-underline bg-accent-green text-black transition-all hover:bg-accent-green-dark hover:-translate-y-px hover:shadow-[0_0_24px_rgba(0,229,160,0.4)]">
              {t("viewCases")} →
            </a>
            <a href="#contact" className="inline-flex items-center gap-[7px] px-[22px] py-[9px] rounded-md font-sans text-[13.5px] font-semibold no-underline bg-transparent text-text-primary border border-border-accent transition-all hover:border-accent-green hover:text-accent-green">
              {t("getKP")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-2.5 mt-8 flex-wrap"
          >
            {chips.map((chip) => (
              <span key={chip} className="font-mono text-[11px] px-3 py-[5px] rounded-sm border border-border-dim text-text-muted bg-white/2">
                {chip}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-bg-secondary border border-border-dim rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-dim bg-bg-tertiary">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
              <span className="font-mono text-[11px] text-text-muted mx-auto">neoru-ai-agent.py</span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-[1.9]">
              <div className="text-text-muted"># NeoruLab AI Agent v2.4</div>
              <div>
                <span className="text-accent-cyan">import</span>{" "}
                <span className="text-text-primary">anthropic, telegram</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="text-[#F4C542]">agent</span> ={" "}
                <span className="text-accent-green">NeoruAgent</span>
                <span className="text-text-primary">(</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-text-muted">model=</span>
                <span className="text-accent-green">"claude-3"</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-text-muted">tools=</span>
                <span className="text-text-primary">[crm, calendar, gpt]</span>
              </div>
              <div>
                <span className="text-text-primary">)</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="text-accent-cyan">await</span> agent.
                <span className="text-accent-green">run</span>
                <span className="text-text-primary">()</span>
              </div>
              <div>
                <span className="text-text-muted">{t("heroCodeStatus").split(" ")[0]} {t("heroCodeStatus").split(" ")[1]}</span>{" "}
                <span className="text-accent-green">{t("heroCodeStatus").split(" ")[2]}</span>{" "}
                <span className="inline-block w-2 h-3.5 bg-accent-green align-middle animate-blink" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                className="bg-bg-secondary border border-border-dim rounded-xl px-5 py-[18px] relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-green to-transparent" />
                <div className="font-syne text-[30px] font-extrabold text-text-primary">
                  {stat.num}<span className="text-accent-green">{stat.suffix}</span>
                </div>
                <div className="text-[12px] text-text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
