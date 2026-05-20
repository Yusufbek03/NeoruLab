"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitLead } from "@/app/actions";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, t("valName")),
    company: z.string().optional(),
    contact: z.string().min(5, t("valContact")),
    phone: z.string().min(7, t("valPhone")),
    service: z.string().min(1, t("valService")),
    message: z.string().min(10, t("valMessage")),
  });

  type FormValues = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const result = await submitLead(data);
      if (result.success) {
        setShowSuccess(true);
        reset();
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setShowError(true);
    }
  };

  const socials = [
    { name: "Email", icon: "/icons/gmail.svg", href: "mailto:neorulab@gmail.com", label: "neorulab@gmail.com" },
    { name: "Telegram", icon: "/icons/telegram.svg", href: "https://t.me/neorulab", label: "@neorulab" },
  ];

  return (
    <section id="contact" className="section bg-bg px-6 lg:px-[60px] py-[100px] relative">
      <div className="grid-bg" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
            {t("contactTag")}
          </span>
          <h2 className="font-syne text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-4 text-text-primary">
            {t("contactTitle1")}<br />{t("contactTitle2")} <span className="text-accent-green">{t("contactTitle3")}</span>
          </h2>
          <p className="text-[16px] text-text-muted leading-[1.7] max-w-[480px]">
            {t("contactDesc")}
          </p>
          
          <div className="mt-9 flex flex-col gap-4 max-w-[480px]">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-border-dim bg-bg-secondary/30 transition-all hover:border-accent-green hover:bg-bg-secondary group"
              >
                <div className="w-9 h-9 rounded-lg border border-border-accent flex items-center justify-center bg-bg-tertiary/50 group-hover:bg-accent-green transition-colors">
                  {/* Removed filters, relying on original SVG colors which should be black/dark. 
                      If icons are black, they are visible on white. 
                      If icons are white, I would need a filter only in dark mode. */}
                  <img src={social.icon} alt={social.name} className="w-5 h-5 transition-transform group-hover:invert dark:invert" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-muted uppercase font-mono">{social.name}</span>
                  <span className="font-mono text-[13px] text-text-primary group-hover:text-accent-green transition-colors">{social.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bg-secondary/50 border border-border-dim rounded-2xl p-8 lg:p-10 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-text-muted tracking-wider uppercase">{t("formName")}</label>
                <input
                  {...register("name")}
                  placeholder={t("phName")}
                  className={`bg-bg-tertiary border ${errors.name ? 'border-red-500/50' : 'border-border-dim'} rounded-lg px-4 py-3 font-sans text-[14px] text-text-primary outline-none focus:border-accent-green transition-colors placeholder:text-[#2D3A47]`}
                />
                {errors.name && <span className="text-red-500 text-[10px] font-mono">{errors.name.message}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-text-muted tracking-wider uppercase">{t("formCompany")}</label>
                <input
                  {...register("company")}
                  placeholder={t("phCompany")}
                  className="bg-bg-tertiary border border-border-dim rounded-lg px-4 py-3 font-sans text-[14px] text-text-primary outline-none focus:border-accent-green transition-colors placeholder:text-[#2D3A47]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-text-muted tracking-wider uppercase">{t("formContact")}</label>
                <input
                  {...register("contact")}
                  placeholder={t("phContact")}
                  className={`bg-bg-tertiary border ${errors.contact ? 'border-red-500/50' : 'border-border-dim'} rounded-lg px-4 py-3 font-sans text-[14px] text-text-primary outline-none focus:border-accent-green transition-colors placeholder:text-[#2D3A47]`}
                />
                {errors.contact && <span className="text-red-500 text-[10px] font-mono">{errors.contact.message}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-text-muted tracking-wider uppercase">{t("formPhone")}</label>
                <input
                  {...register("phone")}
                  placeholder={t("phPhone")}
                  className={`bg-bg-tertiary border ${errors.phone ? 'border-red-500/50' : 'border-border-dim'} rounded-lg px-4 py-3 font-sans text-[14px] text-text-primary outline-none focus:border-accent-green transition-colors placeholder:text-[#2D3A47]`}
                />
                {errors.phone && <span className="text-red-500 text-[10px] font-mono">{errors.phone.message}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-text-muted tracking-wider uppercase">{t("formService")}</label>
              <select
                {...register("service")}
                className={`bg-bg-tertiary border ${errors.service ? 'border-red-500/50' : 'border-border-dim'} rounded-lg px-4 py-3 font-sans text-[14px] text-text-primary outline-none focus:border-accent-green transition-colors appearance-none cursor-pointer`}
              >
                <option value="" className="bg-bg-tertiary">{t("formSelect")}</option>
                <option value="Разработка сайтов" className="bg-bg-tertiary">{t("srv1Title")}</option>
                <option value="Telegram-боты" className="bg-bg-tertiary">{t("srv2Title")}</option>
                <option value="AI-автоматизация" className="bg-bg-tertiary">{t("srv3Title")}</option>
                <option value="Дизайн и графика" className="bg-bg-tertiary">{t("srv4Title")}</option>
                <option value="Digital-маркетинг" className="bg-bg-tertiary">{t("srv5Title")}</option>
                <option value="Медиа-продакшн" className="bg-bg-tertiary">{t("srv6Title")}</option>
                <option value="Несколько услуг" className="bg-bg-tertiary">{t("formMulti")}</option>
              </select>
              {errors.service && <span className="text-red-500 text-[10px] font-mono">{errors.service.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-text-muted tracking-wider uppercase">{t("formMessage")}</label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder={t("phMessage")}
                className={`bg-bg-tertiary border ${errors.message ? 'border-red-500/50' : 'border-border-dim'} rounded-lg px-4 py-3 font-sans text-[14px] text-text-primary outline-none focus:border-accent-green transition-colors resize-none placeholder:text-[#2D3A47]`}
              />
              {errors.message && <span className="text-red-500 text-[10px] font-mono">{errors.message.message}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-sans text-[14px] font-bold bg-accent-green text-black transition-all hover:bg-accent-green-dark hover:shadow-[0_0_24px_rgba(0,229,160,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t("formSending") : `${t("formSubmit")} →`}
            </button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                transition: { type: "spring", damping: 15, stiffness: 100 }
              }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0b131a]/95 border border-border-dim rounded-2xl p-8 max-w-md w-full text-center relative overflow-hidden shadow-2xl"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-accent-green/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-accent-green/10 blur-3xl pointer-events-none" />

              <div className="flex justify-center mb-6">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full bg-accent-green/20 blur-sm"
                  />
                  <div className="w-16 h-16 rounded-full bg-accent-green/10 border-2 border-accent-green flex items-center justify-center relative z-10">
                    <svg className="w-8 h-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="font-syne text-2xl font-bold text-text-primary mb-3">
                {t("formSuccessTitle")}
              </h3>
              <p className="text-[14px] text-text-muted leading-relaxed mb-6 font-sans">
                {t("formSuccess")}
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-3.5 rounded-lg font-sans text-[14px] font-bold bg-accent-green text-black transition-all hover:bg-accent-green-dark hover:shadow-[0_0_16px_rgba(0,229,160,0.3)]"
              >
                {t("close")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                transition: { type: "spring", damping: 15, stiffness: 100 }
              }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0b131a]/95 border border-red-500/30 rounded-2xl p-8 max-w-md w-full text-center relative overflow-hidden shadow-2xl"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

              <div className="flex justify-center mb-6">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full bg-red-500/20 blur-sm"
                  />
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500 flex items-center justify-center relative z-10">
                    <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="font-syne text-2xl font-bold text-text-primary mb-3">
                {t("formErrorTitle")}
              </h3>
              <p className="text-[14px] text-text-muted leading-relaxed mb-6 font-sans">
                {t("formError")}
              </p>

              <button
                onClick={() => setShowError(false)}
                className="w-full py-3.5 rounded-lg font-sans text-[14px] font-bold bg-red-500 text-white transition-all hover:bg-red-600"
              >
                {t("close")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
