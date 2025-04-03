import Header from "@/components/Header";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import TariffSection from "@/components/TariffSection";
import TestimonialsSection from "@/components/Testimonialsection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <TariffSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
