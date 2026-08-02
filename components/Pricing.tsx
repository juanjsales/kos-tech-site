'use client';

import Link from "next/link";
import { Check, X, Zap, ShieldCheck } from "lucide-react";
import { TableWrapper } from "./TableWrapper";

export function Pricing() {
  return (
    <section id="tabela" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/80">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full inline-block">
          Preços Transparentes Sem Pegadinhas
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight">
          Tabela de Planos & Investimento
        </h2>
        <p className="text-slate-400 text-base md:text-lg">
          Valores fixos de pagamento único. Você não paga mensalidades de servidor nem taxas escondidas no final do mês.
        </p>
      </div>

      <TableWrapper>
        <div className="overflow-x-auto rainbow-table bg-slate-950/90 backdrop-blur-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-xs font-mono font-bold tracking-wider uppercase text-slate-300 bg-slate-900/80">
                <th className="p-6 w-2/5">O Que Está Incluído</th>
                <th className="p-6 text-center">
                  <span className="block text-slate-200 text-sm font-bold">📍 Negócio Local</span>
                  <span className="text-cyan-400 text-lg font-bold block mt-1 font-mono">R$ 250</span>
                </th>
                <th className="p-6 text-center">
                  <span className="block text-slate-200 text-sm font-bold">⚡ Site Premium</span>
                  <span className="text-cyan-400 text-lg font-bold block mt-1 font-mono">R$ 1.500</span>
                </th>
                <th className="p-6 text-center bg-blue-950/40 border-x border-cyan-500/30 relative">
                  <div className="inline-flex items-center justify-center p-0.5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 mb-1">
                    <span className="inline-block text-[9px] font-mono font-bold text-slate-950 px-2 py-0.5 bg-cyan-300 rounded-full uppercase tracking-widest">
                      Mais Recomendado
                    </span>
                  </div>
                  <span className="block text-white text-base font-extrabold mt-1">🪐 Ecossistema Completo</span>
                  <span className="text-cyan-300 text-xl font-black block mt-0.5 font-mono">R$ 1.750</span>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-800/80 text-slate-300">
              
              <tr className="hover:bg-slate-900/50 transition-colors">
                <td className="p-6 font-medium text-white">Configuração do Negócio no Google Maps & Busca Local</td>
                <td className="p-6 text-center text-cyan-400 font-bold text-lg"><Check className="w-5 h-5 mx-auto" /></td>
                <td className="p-6 text-center text-slate-600"><X className="w-5 h-5 mx-auto" /></td>
                <td className="p-6 text-center text-cyan-400 font-bold text-lg bg-blue-950/20"><Check className="w-5 h-5 mx-auto" /></td>
              </tr>

              <tr className="hover:bg-slate-900/50 transition-colors">
                <td className="p-6 font-medium text-white">Site Moderno & Super Rápido (Sem Risco de Quedas)</td>
                <td className="p-6 text-center text-slate-600"><X className="w-5 h-5 mx-auto" /></td>
                <td className="p-6 text-center text-cyan-400 font-bold text-lg"><Check className="w-5 h-5 mx-auto" /></td>
                <td className="p-6 text-center text-cyan-400 font-bold text-lg bg-blue-950/20"><Check className="w-5 h-5 mx-auto" /></td>
              </tr>

              <tr className="hover:bg-slate-900/50 transition-colors">
                <td className="p-6 font-medium text-white">Mensalidade de Hospedagem do Site</td>
                <td className="p-6 text-center text-slate-400 font-mono text-xs">ISENTO</td>
                <td className="p-6 text-center text-emerald-400 font-mono font-bold text-xs">R$ 0,00 / mês</td>
                <td className="p-6 text-center text-emerald-400 font-mono font-bold text-xs bg-blue-950/20">R$ 0,00 / mês</td>
              </tr>

              <tr className="hover:bg-slate-900/50 transition-colors">
                <td className="p-6 font-medium text-white">Atendimento Automático de Clientes pelo WhatsApp</td>
                <td className="p-6 text-center text-slate-600"><X className="w-5 h-5 mx-auto" /></td>
                <td className="p-6 text-center text-cyan-400 font-bold text-lg"><Check className="w-5 h-5 mx-auto" /></td>
                <td className="p-6 text-center text-cyan-400 font-bold text-lg bg-blue-950/20"><Check className="w-5 h-5 mx-auto" /></td>
              </tr>

              <tr className="hover:bg-slate-900/50 transition-colors">
                <td className="p-6 font-medium text-white">Integração com Sistemas de Pagamento (PIX / Cartão) & Planilhas</td>
                <td className="p-6 text-center text-slate-600"><X className="w-5 h-5 mx-auto" /></td>
                <td className="p-6 text-center text-slate-600"><X className="w-5 h-5 mx-auto" /></td>
                <td className="p-6 text-center text-cyan-400 font-bold text-lg bg-blue-950/20"><Check className="w-5 h-5 mx-auto" /></td>
              </tr>

              <tr className="hover:bg-slate-900/50 transition-colors">
                <td className="p-6 font-medium text-white">Suporte Direto & Garantia Nativa de 30 Dias</td>
                <td className="p-6 text-center text-cyan-400 font-bold text-lg"><Check className="w-5 h-5 mx-auto" /></td>
                <td className="p-6 text-center text-cyan-400 font-bold text-lg"><Check className="w-5 h-5 mx-auto" /></td>
                <td className="p-6 text-center text-cyan-400 font-bold text-lg bg-blue-950/20"><Check className="w-5 h-5 mx-auto" /></td>
              </tr>

              <tr className="bg-slate-900/90">
                <td className="p-6"></td>
                <td className="p-6 text-center">
                  <Link 
                    href="https://wa.me/5521981756362?text=Quero+o+Plano+Local" 
                    target="_blank" 
                    className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200 border border-slate-700 px-4 py-2.5 rounded-full hover:bg-slate-800 transition-all inline-block"
                  >
                    Escolher
                  </Link>
                </td>
                <td className="p-6 text-center">
                  <Link 
                    href="https://wa.me/5521981756362?text=Quero+o+Site+Premium" 
                    target="_blank" 
                    className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200 border border-slate-700 px-4 py-2.5 rounded-full hover:bg-slate-800 transition-all inline-block"
                  >
                    Escolher
                  </Link>
                </td>
                <td className="p-6 text-center bg-blue-950/40 relative">
                  <Link 
                    href="https://wa.me/5521981756362?text=Quero+o+Ecossistema+Completo" 
                    target="_blank" 
                    className="text-xs font-mono font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-6 py-3 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-105 inline-flex items-center gap-2 transition-all duration-300"
                  >
                    <span>Garantir Ecossistema</span>
                    <Zap className="w-3.5 h-3.5 fill-current text-yellow-300" />
                  </Link>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </TableWrapper>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs font-mono">
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Pagamento Único (Sem Cobranças Surpresa)</span>
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-cyan-400" /> Emissão de Nota Fiscal (PJ)</span>
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-purple-400" /> Atendimento Humano Direto com o Especialista</span>
      </div>

    </section>
  );
}