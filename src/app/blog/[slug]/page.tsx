import { getContentBySlug } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getContentBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <BlogContent post={post} />
      <Footer />
    </main>
  );
}
