import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = fs.realpathSync(path.join(process.cwd(), "content"));

export async function getContent(type: string) {
  const dirPath = path.join(contentDirectory, type);
  if (!fs.existsSync(dirPath)) return [];

  const fileNames = fs.readdirSync(dirPath);
  const allContentData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      return getContentBySlug(type, slug);
    })
  );

  return allContentData.filter(Boolean);
}

export async function getContentBySlug(type: string, slug: string) {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Dynamic imports for ESM-only remark modules
  const { remark } = await import("remark");
  const { default: html } = await import("remark-html");

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as any),
  };
}
