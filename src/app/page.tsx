import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/content";

export default async function Home() {
  const services = await getContent("services");
  const cases = await getContent("cases");

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Services data={services} />
      <Process />
      <Cases data={cases} />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
