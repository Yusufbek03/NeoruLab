import { getContentBySlug } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseContent from "@/components/CaseContent";
import { notFound } from "next/navigation";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getContentBySlug("cases", slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <CaseContent post={post} />
      <Footer />
    </main>
  );
}
