import { getContentBySlug } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceContent from "@/components/ServiceContent";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import { notFound } from "next/navigation";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getContentBySlug("services", slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ServiceContent service={service} />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
