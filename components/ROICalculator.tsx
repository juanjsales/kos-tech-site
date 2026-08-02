'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, CheckCircle, Zap } from 'lucide-react';

export function ROICalculator() {
  const [mensalidadeAtual, setMensalidadeAtual] = useState(80);

  const economiaAnual = mensalidadeAtual * 12;
  const economiaTresAnos = mensalidadeAtual * 36;
  const mesesParaQuitar = Math.ceil(1750 / (mensalidadeAtual || 1));

  return (
    <section id="calculadora" className="py-20 relative z-10 border-t border-slate-800/80 bg-slate-950/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-1.5 rounded-full inline-block">
            Simulador de Economia Reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Quanto Sua Empresa Economiza Sem Mensalidades?
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            Mova a barra abaixo com o valor que você gasta (ou gastaria) por mês com hospedagem e manutenção de site tradicional.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-xl card-rgb-glow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-cyan-400" />
                  <span>Mensalidade Atual Estimada:</span>
                </label>
                <span className="text-2xl font-black text-cyan-400 font-mono">
                  R$ {mensalidadeAtual} <span className="text-xs text-slate-400 font-normal">/ mês</span>
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="30"
                max="500"
                step="10"
                value={mensalidadeAtual}
                onChange={(e) => setMensalidadeAtual(Number(e.target.value))}
                className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>R$ 30/mês (Básico)</span>
                <span>R$ 250/mês (Médio)</span>
                <span>R$ 500/mês (Corporativo)</span>
              </div>
            </div>

            {/* Explanatory notes */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono">
                <CheckCircle className="w-4 h-4" />
                <span>Na KOS: R$ 0,00 de Mensalidade para Sempre</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Você paga apenas o valor do projeto uma única vez. Zero cobranças recorrentes no cartão ou boletos surpresa no final do ano.
              </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-blue-950/60 via-slate-950 to-cyan-950/60 border border-cyan-500/30 p-6 sm:p-8 space-y-6 text-center lg:text-left">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Economia Total Estimada:
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight text-emerald-400">
                R$ {economiaTresAnos.toLocaleString('pt-BR')}
              </div>
              <span className="text-xs text-slate-400 block font-mono">
                Economia acumulada em 3 anos sem mensalidades
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-left font-mono">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Em 1 ano (12 meses):</span>
                <span className="text-lg font-bold text-cyan-300">R$ {economiaAnual.toLocaleString('pt-BR')}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Payback do Site:</span>
                <span className="text-lg font-bold text-amber-300">{mesesParaQuitar} meses</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#diagnostico"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-extrabold tracking-wider uppercase text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-500/20 transition-all"
              >
                <span>Garantir Minha Economia Agora</span>
                <Zap className="w-4 h-4 fill-current text-yellow-300" />
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
