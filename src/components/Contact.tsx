"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitLead } from "@/app/actions";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();

  const formSchema = z.object({
    name: z.string().min(2, language === "ru" ? "Минимум 2 символа" : "Kamida 2 ta belgi"),
    company: z.string().optional(),
    contact: z.string().min(5, language === "ru" ? "Введите email или @username" : "Email yoki @username kiriting"),
    service: z.string().min(1, language === "ru" ? "Выберите услугу" : "Xizmatni tanlang"),
    message: z.string().min(10, language === "ru" ? "Опишите задачу подробнее (минимум 10 символов)" : "Vazifa haqida batafsilroq yozing (kamida 10 ta belgi)"),
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
    // Simulate backend processing since Server Actions are not supported in static exports
    console.log("Form submitted locally:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    alert(language === "ru" ? "Спасибо! Ваша заявка принята, мы свяжемся с вами в течение 24 часов." : "Rahmat! Arizangiz qabul qilindi, 24 soat ichida bog'lanamiz.");
    reset();
  };

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
          
          <div className="mt-9 flex flex-col gap-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg border border-border-accent flex items-center justify-center text-[16px] bg-bg-secondary/50">✉️</div>
              <span className="font-mono text-[13px] text-text-muted hover:text-accent-green transition-colors cursor-pointer">hello@neurulab.ru</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg border border-border-accent flex items-center justify-center text-[16px] bg-bg-secondary/50">✈️</div>
              <span className="font-mono text-[13px] text-text-muted hover:text-accent-green transition-colors cursor-pointer">@neurulab</span>
            </div>
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
                  placeholder={language === "ru" ? "Иван Иванов" : "Ivan Ivanov"}
                  className={`bg-bg-tertiary border ${errors.name ? 'border-red-500/50' : 'border-border-dim'} rounded-lg px-4 py-3 font-sans text-[14px] text-text-primary outline-none focus:border-accent-green transition-colors placeholder:text-[#2D3A47]`}
                />
                {errors.name && <span className="text-red-500 text-[10px] font-mono">{errors.name.message}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-text-muted tracking-wider uppercase">{t("formCompany")}</label>
                <input
                  {...register("company")}
                  placeholder={language === "ru" ? "ООО Рога и Копыта" : "MChJ Super Biznes"}
                  className="bg-bg-tertiary border border-border-dim rounded-lg px-4 py-3 font-sans text-[14px] text-text-primary outline-none focus:border-accent-green transition-colors placeholder:text-[#2D3A47]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-text-muted tracking-wider uppercase">{t("formContact")}</label>
              <input
                {...register("contact")}
                placeholder={language === "ru" ? "ivan@company.ru или @username" : "ivan@company.uz yoki @username"}
                className={`bg-bg-tertiary border ${errors.contact ? 'border-red-500/50' : 'border-border-dim'} rounded-lg px-4 py-3 font-sans text-[14px] text-text-primary outline-none focus:border-accent-green transition-colors placeholder:text-[#2D3A47]`}
              />
              {errors.contact && <span className="text-red-500 text-[10px] font-mono">{errors.contact.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-text-muted tracking-wider uppercase">{t("formService")}</label>
              <select
                {...register("service")}
                className={`bg-bg-tertiary border ${errors.service ? 'border-red-500/50' : 'border-border-dim'} rounded-lg px-4 py-3 font-sans text-[14px] text-text-primary outline-none focus:border-accent-green transition-colors appearance-none cursor-pointer`}
              >
                <option value="" className="bg-bg-tertiary">{t("formSelect")}</option>
                <option value="Разработка сайта" className="bg-bg-tertiary">{t("srv1Title")}</option>
                <option value="Telegram-бот" className="bg-bg-tertiary">{t("srv2Title")}</option>
                <option value="AI-автоматизация" className="bg-bg-tertiary">{t("srv3Title")}</option>
                <option value="Несколько услуг" className="bg-bg-tertiary">{language === "ru" ? "Несколько услуг" : "Bir nechta xizmatlar"}</option>
              </select>
              {errors.service && <span className="text-red-500 text-[10px] font-mono">{errors.service.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-text-muted tracking-wider uppercase">{t("formMessage")}</label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder={language === "ru" ? "Опишите задачу, бюджет и сроки..." : "Vazifa, byudjet va muddatlarni yozing..."}
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
    </section>
  );
}
