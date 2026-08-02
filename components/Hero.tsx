'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, ArrowRight, CheckCircle2, ShieldCheck, Activity } from "lucide-react";
import { Terminal } from "./Terminal";

export function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-20 z-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Badge Visual em linguagem simples */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-cyan-300 bg-slate-900/80 border border-cyan-500/30 px-3.5 py-2 rounded-full shadow-inner backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>⚡ Carregamento Instantâneo | Sem Mensalidade de Servidor | Nota 100 no Google</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.15]">
            Websites de{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Alta Performance
            </span>{" "}
            e Automação Inteligente para seu Negócio.
          </h1>

          {/* Subtítulo em linguagem acessível para leigos */}
          <p className="text-slate-300 font-normal text-base md:text-lg leading-relaxed max-w-2xl">
            Substituímos processos manuais por sistemas modernos que funcionam sozinhos. Criamos sites que não travam, recebem clientes diretamente no seu WhatsApp e não cobram mensalidades caras de hospedagem.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link 
              href="#diagnostico"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-extrabold tracking-widest uppercase text-white rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-[1.02] active:scale-95"
            >
              <span>Solicitar Diagnóstico Gratuito</span>
              <Zap className="w-4 h-4 text-yellow-300 fill-current group-hover:scale-125 transition-transform" />
            </Link>

            <Link
              href="#cases"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold tracking-widest uppercase text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-full transition-all duration-300"
            >
              <span>Ver Projetos na Prática</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          {/* Highlights Footer in Hero */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-400 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Sem Custos Mensais</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Garantia de 30 Dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Site 100% no Ar</span>
            </div>
          </div>

        </motion.div>

        {/* Right Terminal Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 w-full"
        >
          <Terminal />
        </motion.div>

      </div>
    </section>
  );
}