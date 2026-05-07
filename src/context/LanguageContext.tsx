"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ru" | "uz";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Nav
    home: "Главная",
    services: "Услуги",
    cases: "Кейсы",
    process: "Процесс",
    blog: "Блог",
    contact: "Контакты",
    discuss: "Обсудить проект",
    
    // Hero
    accepting: "Принимаем проекты",
    heroTitle1: "Сайты, Боты",
    heroTitle2: "и",
    heroTitle3: "AI-автомати",
    heroTitle4: "зация",
    heroSub: "NeoruLab — digital-агентство нового поколения. Строим умные продукты: от лендингов до AI-систем, которые работают за вас 24/7.",
    viewCases: "Смотреть кейсы",
    getKP: "Получить КП",
    
    // Stats
    stat1: "Проектов сдано",
    stat2: "Довольных клиентов",
    stat3: "Рост конверсии",
    stat4: "AI работает за вас",
    
    // Services
    whatWeDo: "Что мы делаем",
    ourServices: "Наши услуги",
    serviceDesc: "Полный цикл разработки цифровых продуктов — от идеи до запуска и поддержки.",
    srv1Title: "Разработка сайтов",
    srv1Desc: "Лендинги, корпоративные сайты, интернет-магазины и сложные веб-приложения под ключ.",
    srv1Item1: "Лендинги и мультистраничники",
    srv1Item2: "Интернет-магазины",
    srv1Item3: "Порталы и SaaS-продукты",
    srv1Item4: "Скорость и SEO-оптимизация",
    srv2Title: "Telegram-боты",
    srv2Desc: "Умные боты для бизнеса: приём заявок, воронки продаж, поддержка клиентов и уведомления.",
    srv2Item1: "Боты-ассистенты с AI",
    srv2Item2: "CRM-интеграции",
    srv2Item3: "Воронки и авторассылки",
    srv2Item4: "Инлайн-оплата",
    srv3Title: "AI-автоматизация",
    srv3Desc: "Убираем рутину с помощью ИИ: автоответы, обработка данных, генерация контента и интеграции.",
    srv3Item1: "GPT-агенты под задачи",
    srv3Item2: "Автоматизация на n8n / Make",
    srv3Item3: "Парсинг и обработка данных",
    srv3Item4: "RAG-системы на базе знаний",
    
    // Process
    howWeWork: "Как мы работаем",
    transparentProcess: "Прозрачный процесс",
    step1Title: "Бриф и анализ",
    step1Desc: "Изучаем бизнес, цели и задачи. Готовим техническое задание и оценку.",
    step2Title: "Дизайн и прототип",
    step2Desc: "Создаём UI/UX, wireframes и интерактивный прототип для согласования.",
    step3Title: "Разработка",
    step3Desc: "Пишем чистый код, настраиваем AI-модели и интеграции. Ежедневные апдейты.",
    step4Title: "Запуск и поддержка",
    step4Desc: "Деплоим, тестируем, обучаем команду клиента и обеспечиваем поддержку.",
    
    // Why Us
    whyUsTag: "Почему NeoruLab",
    whyUsTitle1: "Мы строим",
    whyUsTitle2: "продукты, которые",
    whyUsTitle3: "работают",
    whyUsDesc: "Не просто разработчики — стратегические партнёры, которые глубоко погружаются в ваш бизнес и предлагают решения, дающие реальный результат.",
    whyUsStat1: "Средний рост конверсии у клиентов",
    whyUsStat2: "Средний срок запуска MVP",
    whyUsStat3: "Реализованных проектов",
    whyUsStat4: "Клиентов рекомендуют нас",
    
    // Testimonials
    testimonialsTag: "Отзывы",
    testimonialsTitle1: "Что говорят",
    testimonialsTitle2: "клиенты",
    
    // Contact
    contactTag: "Связаться",
    contactTitle1: "Есть идея?",
    contactTitle2: "Давайте её",
    contactTitle3: "реализуем",
    contactDesc: "Расскажите о задаче — в течение 24 часов мы пришлём оценку и план работ. Первая консультация бесплатно.",
    formName: "ИМЯ",
    formCompany: "КОМПАНИЯ",
    formContact: "EMAIL / TELEGRAM",
    formService: "ЧТО НУЖНО СДЕЛАТЬ?",
    formMessage: "РАССКАЖИТЕ О ЗАДАЧЕ",
    formSubmit: "Отправить заявку",
    formSending: "Отправка...",
    formSelect: "Выберите услугу",
    
    // Footer
    footerDesc: "Цифровое агентство нового поколения. Строим сайты, ботов и AI-системы, которые работают на ваш бизнес 24/7.",
    newsletter: "Рассылка",
    newsletterDesc: "Кейсы, инсайты и полезные материалы по AI и разработке — раз в неделю.",
    allRights: "Все права защищены.",
    privacy: "Политика конфиденциальности",
    terms: "Пользовательское соглашение",
  },
  uz: {
    // Nav
    home: "Asosiy",
    services: "Xizmatlar",
    cases: "Keyslar",
    process: "Jarayon",
    blog: "Blog",
    contact: "Kontaktlar",
    discuss: "Loyihani muhokama qilish",
    
    // Hero
    accepting: "Loyihalarni qabul qilamiz",
    heroTitle1: "Saytlar, Botlar",
    heroTitle2: "va",
    heroTitle3: "AI-avtomati",
    heroTitle4: "zatsiya",
    heroSub: "NeoruLab — yangi avlod digital-agentligi. Landing sahifalardan tortib, 24/7 ishlaydigan AI-tizimlarigacha aqlli mahsulotlar yaratamiz.",
    viewCases: "Keyslarni ko'rish",
    getKP: "KP olish",
    
    // Stats
    stat1: "Topshirilgan loyihalar",
    stat2: "Mamnun mijozlar",
    stat3: "Konversiya o'sishi",
    stat4: "AI siz uchun ishlaydi",
    
    // Services
    whatWeDo: "Biz nima qilamiz",
    ourServices: "Bizning xizmatlar",
    serviceDesc: "Raqamli mahsulotlarni yaratishning to'liq tsikli — g'oyadan tortib ishga tushirish va qo'llab-quvvatlashgacha.",
    srv1Title: "Saytlar ishlab chiqish",
    srv1Desc: "Landing sahifalar, korporativ saytlar, internet-do'konlar va murakkab veb-ilovalar.",
    srv1Item1: "Landing va ko'p sahifali saytlar",
    srv1Item2: "Internet-do'konlar",
    srv1Item3: "Portallar va SaaS-mahsulotlar",
    srv1Item4: "Tezlik va SEO-optimallashtirish",
    srv2Title: "Telegram-botlar",
    srv2Desc: "Biznes uchun aqlli botlar: arizalar qabul qilish, savdo voronkalari va mijozlarni qo'llab-quvvatlash.",
    srv2Item1: "AI bilan ishlaydigan yordamchi botlar",
    srv2Item2: "CRM integratsiyalari",
    srv2Item3: "Voronkalar va avto-xabarlar",
    srv2Item4: "Inline-to'lovlar",
    srv3Title: "AI-avtomatlashtirish",
    srv3Desc: "Sizning ishingizni AI yordamida yengillashtiramiz: avto-javoblar, ma'lumotlarni qayta ishlash.",
    srv3Item1: "Vazifalar uchun GPT-agentlar",
    srv3Item2: "n8n / Make yordamida avtomatlashtirish",
    srv3Item3: "Ma'lumotlarni yig'ish va qayta ishlash",
    srv3Item4: "Bilimlar bazasi asosidagi RAG-tizimlar",
    
    // Process
    howWeWork: "Biz qanday ishlaymiz",
    transparentProcess: "Shaffof jarayon",
    step1Title: "Brif va tahlil",
    step1Desc: "Biznesni, maqsad va vazifalarni o'rganamiz. Texnik topshiriq va baholashni tayyorlaymiz.",
    step2Title: "Dizayn va prototip",
    step2Desc: "UI/UX, wireframe va kelishish uchun interaktiv prototip yaratamiz.",
    step3Title: "Ishlab chiqish",
    step3Desc: "Toza kod yozamiz, AI-modellarni va integratsiyalarni sozlaymiz. Har kuni hisobot.",
    step4Title: "Ishga tushirish va qo'llab-quvvatlash",
    step4Desc: "Deploy qilamiz, testdan o'tkazamiz va mijoz jamoasini o'qitamiz.",
    
    // Why Us
    whyUsTag: "Nima uchun NeoruLab",
    whyUsTitle1: "Biz haqiqatda",
    whyUsTitle2: "ishlaydigan",
    whyUsTitle3: "mahsulotlar yaratamiz",
    whyUsDesc: "Shunchaki dasturchilar emas — biznesingizga chuqur kirib boradigan va real natija beradigan yechimlarni taklif qiladigan strategik hamkorlar.",
    whyUsStat1: "Mijozlarda konversiyaning o'rtacha o'sishi",
    whyUsStat2: "MVP ishga tushirishning o'rtacha muddati",
    whyUsStat3: "Amalga oshirilgan loyihalar",
    whyUsStat4: "Mijozlar bizni tavsiya qilishadi",
    
    // Testimonials
    testimonialsTag: "Sharhlar",
    testimonialsTitle1: "Mijozlar nima",
    testimonialsTitle2: "deyishadi",
    
    // Contact
    contactTag: "Bog'lanish",
    contactTitle1: "G'oya bormi?",
    contactTitle2: "Uni birgalikda",
    contactTitle3: "amalga oshiramiz",
    contactDesc: "Vazifa haqida gapirib bering — 24 soat ichida biz baho va ish rejasini yuboramiz. Birinchi maslahat bepul.",
    formName: "ISM",
    formCompany: "KOMPANIYA",
    formContact: "EMAIL / TELEGRAM",
    formService: "NIMA QILISH KERAK?",
    formMessage: "VAZIFA HAQIDA GAPIRIB BERING",
    formSubmit: "Ariza yuborish",
    formSending: "Yuborilmoqda...",
    formSelect: "Xizmatni tanlang",
    
    // Footer
    footerDesc: "Yangi avlod raqamli agentligi. Biznesingiz uchun 24/7 ishlaydigan saytlar, botlar va AI tizimlarini quramiz.",
    newsletter: "Xabarnoma",
    newsletterDesc: "AI va dasturlash bo'yicha keyslar va foydali materiallar — haftada bir marta.",
    allRights: "Barcha huquqlar himoyalangan.",
    privacy: "Maxfiylik siyosati",
    terms: "Foydalanish shartlari",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang && (savedLang === "ru" || savedLang === "uz")) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
