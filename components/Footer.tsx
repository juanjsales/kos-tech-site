'use client';

import Link from "next/link";
import { Zap, ShieldCheck, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xl font-black tracking-widest text-white font-mono uppercase">
                KOS
              </span>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                — Soluções Tecnológicas
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Engenharia de Software, Websites de Alta Performance & Automações Serverless para B2B, Infoprodutos e ONGs.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            <Link href="#servicos" className="hover:text-cyan-400 transition-colors">Pilares</Link>
            <Link href="#metodologia" className="hover:text-cyan-400 transition-colors">Metodologia</Link>
            <Link href="#cases" className="hover:text-cyan-400 transition-colors">Cases</Link>
            <Link href="#tabela" className="hover:text-cyan-400 transition-colors">Investimento</Link>
            <Link href="#diagnostico" className="hover:text-cyan-400 transition-colors">Diagnóstico</Link>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-400 hover:text-cyan-400 transition-all group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright & seal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} KOS — Soluções Tecnológicas. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Plataforma Otimizada & Acessível</span>
            <span className="text-slate-600">|</span>
            <span>Desenvolvido por <strong className="text-slate-200 font-semibold">Juan Jorge Gomes de Sales</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}