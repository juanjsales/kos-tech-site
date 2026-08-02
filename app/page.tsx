import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesPilars } from "@/components/ServicesPilars";
import { Methodology } from "@/components/Methodology";
import { CasesSection } from "@/components/CasesSection";
import { ROICalculator } from "@/components/ROICalculator";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { DiagnosticForm } from "@/components/DiagnosticForm";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Background glow layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full prism-glow mix-blend-screen" />
      </div>

      <Header />
      
      <main className="relative z-10 space-y-4">
        {/* Section 1: Hero Banner */}
        <Hero />

        {/* Section 2: Pilares de Serviços */}
        <ServicesPilars />

        {/* Section 3: Diferenciais da Metodologia (POP) */}
        <Methodology />

        {/* Section 4: Cases de Sucesso & Portfólio */}
        <CasesSection />

        {/* Section: Calculadora Interativa de Economia (ROI) */}
        <ROICalculator />

        {/* Pricing / Tabela de Engenharia */}
        <Pricing />

        {/* Section FAQ: Dúvidas Frequentes */}
        <FAQ />

        {/* Section 5: Formulário de Captura & Diagnóstico */}
        <DiagnosticForm />
      </main>

      {/* Section 6: Rodapé */}
      <Footer />

      {/* Floating WhatsApp Button Widget */}
      <WhatsAppFloatingButton />
    </div>
  );
}
