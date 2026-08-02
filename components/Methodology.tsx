'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Gauge, ShieldCheck, Award, ArrowRight } from 'lucide-react';

export function Methodology() {
  const differentials = [
    {
      icon: LayoutGrid,
      title: "Hub Interativo no Notion",
      badge: "📊 Transparência Total",
      description:
        "Acompanhamento em tempo real do projeto sem e-mails confusos. Cronogramas, entregáveis, protótipos e links reunidos em um único dashboard acessível 24h.",
      highlightColor: "text-blue-400 border-blue-500/30 bg-blue-500/10"
    },
    {
      icon: Gauge,
      title: "Performance Auditada (< 1.5s)",
      badge: "⚡ Carregamento Instantâneo",
      description:
        "Carregamento ultra-rápido focado em não perder leads. Páginas otimizadas que garantem nota máxima no Google PageSpeed Insights e Core Web Vitals.",
      highlightColor: "text-amber-400 border-amber-500/30 bg-amber-500/10"
    },
    {
      icon: ShieldCheck,
      title: "Monitoramento Proativo 24/7",
      badge: "🛡️ Uptime & SSL Bot",
      description:
        "Bot automático de checagem de Uptime e certificado SSL a cada 5 minutos. Notificação imediata em caso de instabilidades antes mesmo que seu cliente perceba.",
      highlightColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    },
    {
      icon: Award,
      title: "30 Dias de Garantia Nativa",
      badge: "📜 Suporte Incluso",
      description:
        "Suporte completo pós-lançamento incluso sem pegadinhas. Ajustes finos, correções e acompanhamento inicial para assegurar o funcionamento impecável.",
      highlightColor: "text-purple-400 border-purple-500/30 bg-purple-500/10"
    }
  ];

  return (
    <section id="metodologia" className="py-20 relative z-10 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-1.5 rounded-full inline-block">
            Nossa Metodologia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight">
            O Nosso POP na Prática (Procedimento Operacional Padrão)
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Processo estruturado de ponta a ponta que garante previsibilidade, qualidade técnica superior e tranquilidade para o seu negócio.
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
                  <span>ETAPA 0{idx + 1}</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    POP OK <ArrowRight className="w-3 h-3" />
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
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Status do Bot de Monitoramento KOS</h4>
              <p className="text-xs text-slate-300">Todos os projetos ativos auditados e com Uptime 99.9% nos últimos 30 dias.</p>
            </div>
          </div>
          <a
            href="#diagnostico"
            className="text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-5 py-2.5 rounded-full border border-cyan-500/40 transition-all flex-shrink-0"
          >
            Quero esse Padrão no meu Projeto
          </a>
        </div>

      </div>
    </section>
  );
}
