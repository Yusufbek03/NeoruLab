"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  return (
    <section id="about" className="section bg-bg px-6 lg:px-[60px] py-[100px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
            {language === 'ru' ? 'О компании' : 'Kompaniya haqida'}
          </span>
          {/* text-text-primary handles dynamic color (white in dark, black in light) */}
          <h2 className="font-syne text-[clamp(32px,4vw,64px)] font-extrabold leading-[1.1] tracking-tight text-text-primary mb-8">
            {language === 'ru' ? 'Мы —' : 'Biz —'}
            <br />
            <span className="text-accent-green">NeoruLab.</span>
          </h2>
          <p className="text-[20px] text-text-muted leading-[1.8]">
            {language === 'ru' 
              ? 'Digital-агентство полного цикла, специализирующееся на внедрении искусственного интеллекта в бизнес-процессы. Мы трансформируем компании, создавая цифровые продукты, которые работают на ваш рост 24/7.'
              : 'Biznes jarayonlariga sun\'iy intellektni joriy etishga ixtisoslashgan to\'liq tsiklli digital-agentlikmiz. Biz kompaniyalarni sizning o\'sishingiz uchun 24/7 ishlaydigan raqamli mahsulotlar yaratish orqali transformatsiya qilamiz.'}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
        >
          <div className="w-full max-w-[380px] rounded-3xl overflow-hidden border-2 border-accent-green/30 p-1 bg-bg-tertiary/20 shadow-2xl">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover rounded-2xl"
            >
              <source src="/about-video.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
