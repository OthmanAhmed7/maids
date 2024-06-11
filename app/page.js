import Explore from "@/components/Explore";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Last from "@/components/Last";

export default function Home() {
  return (
    <main className="bg-[#f8fbfe]">
      <div className="gradient rounded-bl-[10rem] w-full overflow-hidden">
        <Header />
        <Hero />
        <Numbers />
      </div>
      <Services />
      <Explore />
      <Faqs />
      <Testimonials />
      <Last />
      <Footer />
    </main>
  );
}
