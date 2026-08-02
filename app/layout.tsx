import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "@/app/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "KOS — Engenharia de Software, Websites de Alta Performance & Automação",
  description: "Transformo processos manuais em plataformas digitais escaláveis, integrações via API (WhatsApp, CRMs, Gateways) e soluções serverless sem custos recorrentes de hospedagem.",
  keywords: [
    "Engenharia de Software",
    "Desenvolvimento Web Next.js",
    "Automação de Processos",
    "Integrador de APIs",
    "WhatsApp Bot",
    "Landing Pages Alta Conversão",
    "Consultoria Serverless",
    "Desenvolvedor PJ",
    "ONGs e Terceiro Setor",
    "Infoprodutos"
  ],
  authors: [{ name: "Juan Jorge Gomes de Sales" }],
  creator: "Juan Jorge Gomes de Sales",
  openGraph: {
    title: "KOS — Soluções Web & Automação de Alta Performance",
    description: "Plataformas digitais escaláveis, soluções serverless de carregamento instantâneo e automações inteligentes para B2B, Infoprodutos e ONGs.",
    url: "https://kos-rho.vercel.app/",
    siteName: "KOS Soluções Tecnológicas",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOS — Soluções Web & Automação de Alta Performance",
    description: "Engenharia de Software, Websites de Alta Performance e Automação de Processos sem custos mensais de servidor.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "KOS — Soluções Tecnológicas",
    "url": "https://kos-rho.vercel.app/",
    "image": "https://kos-rho.vercel.app/icon",
    "description": "Engenharia de Software, Websites de Alta Performance e Automação de Processos para empresas B2B, Infoprodutos e ONGs.",
    "founder": {
      "@type": "Person",
      "name": "Juan Jorge Gomes de Sales",
      "jobTitle": "Engenheiro de Soluções Web & Automação"
    },
    "knowsAbout": [
      "Next.js",
      "React",
      "Serverless Architecture",
      "API Integrations",
      "Process Automation",
      "Web Performance",
      "SEO Optimization"
    ],
    "priceRange": "$$"
  };

  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${montserrat.variable} scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative bg-slate-950 text-slate-100 antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}