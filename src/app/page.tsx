import Header from "@/components/Header";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <FaqSection />
      <Footer />
    </main>
  );
}
