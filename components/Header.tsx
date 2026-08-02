'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Zap } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3 focus:outline-none">
          <div className="flex flex-col items-start leading-none">
            <span className="text-2xl font-black tracking-widest text-white font-mono uppercase flex items-center gap-1">
              KOS
              <span className="inline-block w-2.5 h-2.5 rounded-full rainbow-decor shadow-[0_0_12px_rgba(6,182,212,0.8)]"></span>
            </span>
            <span className="text-[10px] font-mono tracking-wider text-cyan-400 font-semibold uppercase mt-0.5">
              Web & Automação
            </span>
            <div className="h-[2px] w-full rainbow-decor mt-1 rounded-full group-hover:opacity-100 opacity-70 transition-opacity"></div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <Link href="#servicos" className="hover:text-cyan-400 transition-colors">
            Pilares
          </Link>
          <Link href="#metodologia" className="hover:text-cyan-400 transition-colors">
            Metodologia
          </Link>
          <Link href="#cases" className="hover:text-cyan-400 transition-colors">
            Cases & Portfólio
          </Link>
          <Link href="#tabela" className="hover:text-cyan-400 transition-colors">
            Investimento
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#diagnostico"
            className="group relative inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-2.5 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            <span>Solicitar Diagnóstico</span>
            <Zap className="w-3.5 h-3.5 fill-current text-cyan-200 group-hover:animate-bounce" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Alternar Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
            <Link
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Pilares de Serviços
            </Link>
            <Link
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Metodologia (POP)
            </Link>
            <Link
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Cases & Portfólio
            </Link>
            <Link
              href="#tabela"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Tabela de Investimento
            </Link>
          </nav>
          <div className="pt-2">
            <Link
              href="#diagnostico"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 rounded-full shadow-lg shadow-cyan-500/20"
            >
              <span>Solicitar Diagnóstico Técnico</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}