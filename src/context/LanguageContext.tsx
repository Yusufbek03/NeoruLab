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
    heroCodeStatus: "# ✓ Запущено успешно",
    
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
    srv4Title: "Дизайн и графика",
    srv4Desc: "Профессиональный UX/UI дизайн сайтов и продающая графика для вашего бизнеса и маркетплейсов.",
    srv5Title: "Digital-marketing",
    srv5Desc: "Настройка таргетированной рекламы в Telegram, Instagram, VK и Яндекс. Директ для роста продаж.",
    srv6Title: "Медиа-продакшн",
    srv6Desc: "Профессиональный видеомонтаж, создание Reels, подкастов и обучающих видео.",
    srvGPT: "GPT-агенты",
    srvCRM: "CRM-интеграции",
    
    // Process
    howWeWork: "Как мы работаем",
    transparentProcess1: "Прозрачный",
    transparentProcess2: "процесс",
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
    whyUsDiscuss: "Обсудить задачу",
    days: "дн",
    
    // Testimonials
    testimonialsTag: "Отзывы",
    testimonialsTitle1: "Что говорят",
    testimonialsTitle2: "клиенты",
    test1Text: "NeoruLab сделали нам AI-бота для клиники за 2 недели. Пациенты записываются в 3 раза быстрее, нагрузка на администраторов упала вдвое. Команда всегда на связи и объясняет каждое решение.",
    test2Text: "Заказали лендинг и Telegram-бота для онлайн-курсов. Запустили за 10 дней. Автоворонка в боте подняла доходимость до вебинара с 40% до 78%. Рекомендую без оговорок.",
    test3Text: "Автоматизировали обработку заявок с помощью AI на n8n. Раньше менеджер тратил 4 часа в день на ручную сортировку — теперь система делает это мгновенно. ROI вышел за 2 месяца.",
    
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
    formMulti: "Несколько услуг",
    formSuccess: "Спасибо! Ваша заявка принята, мы свяжемся с вами в течение 24 часов.",
    formError: "Произошла ошибка. Попробуйте снова.",
    valName: "Минимум 2 символа",
    valContact: "Введите email или @username",
    valService: "Выберите услугу",
    valMessage: "Опишите задачу подробнее (минимум 10 символов)",
    phName: "Иван Иванов",
    phCompany: "ООО Рога и Копыта",
    phContact: "ivan@company.ru или @username",
    phMessage: "Опишите задачу, бюджет и сроки...",
    
    // Portfolio
    portfolio: "Портфолио",
    our: "Наши",
    casesTitle: "кейсы",
    allProjects: "Все проекты",
    viewCase: "Смотреть кейс",
    visitWebsite: "Перейти на сайт",
    live: "Демо",
    chatbotHi: "Привет! Я AI-ассистент Neoru. 👋",
    chatbotConsult: "Хочу консультацию",
    
    // Ticker
    tick1: "Сайты",
    tick2: "Telegram боты",
    tick3: "AI-автоматизация",
    tick4: "GPT-агенты",
    tick5: "n8n / Make",
    tick6: "React / Next.js",
    tick7: "CRM-интеграции",
    
    // Footer
    company: "Компания",
    about: "О нас",
    blog: "Блог",
    careers: "Карьера",
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
    heroCodeStatus: "# ✓ Muvaffaqiyatli ishga tushirildi",
    
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
    srv4Title: "Dizayn va grafika",
    srv4Desc: "Saytlar uchun professional UX/UI dizayn va biznesingiz hamda marketpleyslar uchun sotuvchi grafikalar.",
    srv5Title: "Digital-marketing",
    srv5Desc: "Telegram, Instagram, VK va Yandex Direct-da savdoni oshirish uchun maqsadli reklamalarni sozlash.",
    srv6Title: "Media-production",
    srv6Desc: "Professional video montaj, Reels, podkastlar va ta'lim videolarini yaratish.",
    srvGPT: "GPT-agentlar",
    srvCRM: "CRM integratsiyalari",
    
    // Process
    howWeWork: "Biz qanday ishlaymiz",
    transparentProcess1: "Shaffof",
    transparentProcess2: "jarayon",
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
    whyUsDiscuss: "Vazifani muhokama qilish",
    days: "kun",
    
    // Testimonials
    testimonialsTag: "Sharhlar",
    testimonialsTitle1: "Mijozlar nima",
    testimonialsTitle2: "deyishadi",
    test1Text: "NeoruLab bizga klinika uchun 2 hafta ichida AI-bot tayyorlab berdi. Bemorlar 3 baravar tezroq navbatga yozilmoqda, administratorlar yuklamasi ikki baravar kamaydi. Jamoa doim aloqada.",
    test2Text: "Onlayn kurslar uchun landing va Telegram-bot buyurtma qildik. 10 kunda ishga tushirildi. Botdagi avtovoronka vebinarga keluvchilar sonini 40% dan 78% gacha oshirdi.",
    test3Text: "n8n da AI yordamida arizalarni qayta ishlashni avtomatlashtirdik. Ilgari menejer kuniga 4 soat vaqt sarflardi — endi tizim buni bir zumda amalga oshiradi. ROI 2 oyda chiqdi.",
    
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
    formMulti: "Bir nechta xizmatlar",
    formSuccess: "Rahmat! Arizangiz qabul qilindi, 24 soat ichida bog'lanamiz.",
    formError: "Xatolik yuz berdi. Qayta urinib ko'ring.",
    valName: "Kamida 2 ta belgi",
    valContact: "Email yoki @username kiriting",
    valService: "Xizmatni tanlang",
    valMessage: "Vazifa haqida batafsilroq yozing (kamida 10 ta belgi)",
    phName: "Ivan Ivanov",
    phCompany: "MChJ Super Biznes",
    phContact: "ivan@company.uz yoki @username",
    phMessage: "Vazifa, byudjet va muddatlarni yozing...",
    
    // Portfolio
    portfolio: "Portfoliomiz",
    our: "Bizning",
    casesTitle: "keyslarimiz",
    allProjects: "Barcha loyihalar",
    viewCase: "Keysni ko'rish",
    visitWebsite: "Saytga o'tish",
    live: "Demo",
    chatbotHi: "Salom! Men Neoru AI-yordamchisiman. 👋",
    chatbotConsult: "Maslahat olmoqchiman",
    
    // Ticker
    tick1: "Saytlar",
    tick2: "Telegram botlar",
    tick3: "AI-avtomatlashtirish",
    tick4: "GPT-agentlar",
    tick5: "n8n / Make",
    tick6: "React / Next.js",
    tick7: "CRM integratsiyalari",
    
    // Footer
    company: "Kompaniya",
    about: "Biz haqimizda",
    blog: "Blog",
    careers: "Karyera",
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
