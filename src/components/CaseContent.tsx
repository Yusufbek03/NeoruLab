"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ContentProps {
  post: {
    title_ru: string;
    title_uz: string;
    contentHtml: string;
    category_ru: string;
    category_uz: string;
    date_ru: string;
    date_uz: string;
    icon: string;
    bg: string;
    url?: string;
    image?: string;
  };
}

export default function CaseContent({ post }: ContentProps) {
  const { language, t } = useLanguage();
  const router = useRouter();

  const title = language === "ru" ? post.title_ru : post.title_uz;
  const category = language === "ru" ? post.category_ru : post.category_uz;
  const date = language === "ru" ? post.date_ru : post.date_uz;

  return (
    <section className="relative bg-bg px-6 lg:px-[60px] pt-[150px] pb-[100px]">
      <div className="grid-bg" />
      
      <div className="max-w-[760px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-10">
            <button 
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-accent-green font-mono text-[12px] hover:underline transition-all cursor-pointer"
            >
              ← {language === "ru" ? "Назад" : "Orqaga"}
            </button>

            {post.url && (
              <a 
                href={post.url.startsWith('http') ? post.url : `https://${post.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-green text-black font-syne font-bold text-[13px] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(40,202,65,0.2)]"
              >
                {t("visitWebsite")} ↗
              </a>
            )}
          </div>

          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20 uppercase tracking-widest">
              {category}
            </span>
            <span className="font-mono text-[12px] text-text-muted">
              {date}
            </span>
          </div>
          
          <h1 className="font-syne text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.05] mb-12 tracking-tight text-white">
            {title}
          </h1>

          <div className={`w-full overflow-hidden rounded-3xl mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${post.image ? '' : `${post.bg} h-[320px] flex items-center justify-center text-[120px]`}`}>
            {post.image ? (
              <Image 
                src={post.image} 
                alt={title} 
                width={1200}
                height={675}
                priority
                className="w-full h-auto object-cover"
              />
            ) : (
              post.icon
            )}
          </div>
          
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-syne prose-headings:font-bold prose-headings:text-white
              prose-h2:text-[32px] prose-h2:mt-16 prose-h2:mb-8
              prose-h3:text-[24px] prose-h3:mt-12 prose-h3:mb-6
              prose-p:text-text-muted prose-p:leading-[1.9] prose-p:mb-10
              prose-strong:text-accent-green prose-strong:font-bold
              prose-a:text-accent-green prose-a:no-underline hover:prose-a:underline
              prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-8 prose-li:mb-5
              prose-li:before:content-['→'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-accent-green"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </motion.div>
      </div>
    </section>
  );
}
