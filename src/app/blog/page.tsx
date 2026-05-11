import { getContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

export default async function BlogPage() {
  const blog = await getContent("blog");

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <Blog data={blog} />
      </div>
      <Footer />
    </main>
  );
}
