import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      {/* Efeito de glow prismático */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0 opacity-60">
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full prism-glow mix-blend-screen"></div>
      </div>
      <main className="relative z-10">
        <Header />
        <Hero />
        <Pricing />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}
