import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "@/app/globals.css"

// Configuração otimizada das fontes
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
  title: "KOS – Motor Web de Próxima Geração",
  description: "Leve sua marca ao mapa, sem custos de servidor."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${montserrat.variable} scroll-smooth dark`}>

            <body className="relative bg-black text-slate-200 antialiased overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full prism-glow -z-10"></div>{children}
      </body>
    </html>
  );
}