"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface BlogPostData {
  slug: string;
  title_ru: string;
  title_uz: string;
  desc_ru: string;
  desc_uz: string;
  category_ru: string;
  category_uz: string;
  date_ru: string;
  date_uz: string;
  icon: string;
  bg: string;
}

export default function Blog({ data }: { data?: BlogPostData[] }) {
  const { t, language } = useLanguage();

  const posts = data?.map(p => ({
    slug: p.slug,
    title: language === "ru" ? p.title_ru : p.title_uz,
    desc: language === "ru" ? p.desc_ru : p.desc_uz,
    category: language === "ru" ? p.category_ru : p.category_uz,
    date: language === "ru" ? p.date_ru : p.date_uz,
    icon: p.icon,
    bg: p.bg,
  })) || [];

  return (
    <section id="blog" className="section bg-bg-secondary px-6 lg:px-[60px] py-[100px]">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="font-mono text-[11px] font-semibold text-accent-green tracking-[0.15em] uppercase mb-3 block">
            {t("blog")}
          </span>
          <h2 className="font-syne text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-text-primary">
            {t("ourBlog")} <span className="text-accent-green">{t("blogTitle")}</span>
          </h2>
        </div>
        <Link href="/blog" className="hidden sm:inline-flex items-center gap-[7px] px-[22px] py-[9px] rounded-md font-sans text-[13.5px] font-semibold no-underline bg-transparent text-text-primary border border-border-accent transition-all hover:border-accent-green hover:text-accent-green">
          {t("allArticles")} →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, idx) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-bg-tertiary h-full border-[5px] border-border-dim rounded-[14px] overflow-hidden transition-all group-hover:border-accent-green/25 hover:-translate-y-1"
            >

              <div className={`h-[180px] ${post.bg} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-[52px] opacity-40 transition-transform group-hover:scale-110 duration-500">{post.icon}</div>
                <span className="absolute top-3.5 left-3.5 font-mono text-[10px] px-2.5 py-1 rounded bg-accent-green/15 text-accent-green border border-border-accent">
                  {post.category}
                </span>
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-accent-green text-black flex items-center justify-center font-bold text-[14px] transition-transform group-hover:scale-110">
                  ↗
                </div>
              </div>
              <div className="p-[22px]">
                <h3 className="font-syne text-[16px] font-bold leading-[1.4] mb-2.5 group-hover:text-accent-green transition-colors text-text-primary">
                  {post.title}
                </h3>
                <p className="text-[13px] text-text-muted leading-[1.7]">
                  {post.desc}
                </p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border-dim">
                  <div className="w-6 h-6 rounded-full bg-accent-green/15 border border-border-accent flex items-center justify-center text-[10px] text-accent-green font-bold">N</div>
                  <span className="font-mono text-[11px] text-text-muted">NeoruLab Team · {post.date}</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
