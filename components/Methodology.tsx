'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Gauge, ShieldCheck, Award, ArrowRight } from 'lucide-react';

export function Methodology() {
  const differentials = [
    {
      icon: LayoutGrid,
      title: "Painel de Acompanhamento em Tempo Real",
      badge: "📊 Transparência Total",
      description:
        "Você acompanha cada etapa do seu projeto de forma simples em uma tela única. Sem e-mails confusos ou mensagens perdidas.",
      highlightColor: "text-blue-400 border-blue-500/30 bg-blue-500/10"
    },
    {
      icon: Gauge,
      title: "Site Ultra-Rápido (< 1.5s)",
      badge: "⚡ Sem Perder Clientes",
      description:
        "Seu site carrega em piscar de olhos. Evitamos que potenciais clientes desistam de esperar e comprem no concorrente.",
      highlightColor: "text-amber-400 border-amber-500/30 bg-amber-500/10"
    },
    {
      icon: ShieldCheck,
      title: "Vigilância Automática 24h por Dia",
      badge: "🛡️ Site Sempre no Ar",
      description:
        "Sistemas automáticos testam seu site a cada 5 minutos. Se houver qualquer instabilidade, corrigimos imediatamente.",
      highlightColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    },
    {
      icon: Award,
      title: "30 Dias de Suporte e Garantia",
      badge: "📜 Tranquilidade Garantida",
      description:
        "Após o lançamento do site, cuidamos de tudo pelos primeiros 30 dias para você tirar dúvidas e ajustar o que precisar.",
      highlightColor: "text-purple-400 border-purple-500/30 bg-purple-500/10"
    }
  ];

  return (
    <section id="metodologia" className="py-20 relative z-10 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-1.5 rounded-full inline-block">
            Como Trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight">
            Nossa Metodologia Passo a Passo
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Um processo organizado para que você tenha previsibilidade, zero dor de cabeça e resultados rápidos.
          </p>
        </div>

        {/* 4 Cards Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-md flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold tracking-wider uppercase border px-2.5 py-1 rounded-full ${item.highlightColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Step indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>PASSO 0{idx + 1}</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    CONFIRMADO <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-cyan-950/60 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Monitoramento Ativo KOS</h4>
              <p className="text-xs text-slate-300">Todos os sites de nossos clientes estão no ar e funcionando perfeitamente 24 horas por dia.</p>
            </div>
          </div>
          <a
            href="#diagnostico"
            className="text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-5 py-2.5 rounded-full border border-cyan-500/40 transition-all flex-shrink-0"
          >
            Quero Esse Padrão No Meu Projeto
          </a>
        </div>

      </div>
    </section>
  );
}
