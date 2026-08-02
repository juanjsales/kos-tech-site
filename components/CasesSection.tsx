'use client';

import { motion } from 'framer-motion';
import { Rocket, HeartHandshake, CheckCircle2, AlertTriangle, ShieldCheck, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { PortfolioCard } from '@/components/PortfolioCard';

export function CasesSection() {
  const featuredCases = [
    {
      id: "case-infoprodutos",
      badge: "Exemplo 01 | Infoprodutos & Lançamentos",
      icon: Rocket,
      title: "Zero Lags & Atendimento Automático de Clientes",
      subtitle: "Vendas sem Interrupções para Campanhas e Anúncios",
      desafio: "Sites tradicionais que caem nos momentos de maior tráfego de anúncios ou demoram para carregar o formulário, fazendo você perder vendas.",
      solucao: "Páginas super rápidas e blindadas contra quedas de acessos. Envio automático dos dados do cliente direto no WhatsApp da sua equipe em menos de 1 segundo.",
      metricas: [
        "100% no ar mesmo com milhares de acessos juntos",
        "Carregamento do site em menos de 1 segundo",
        "Aumento real na conversão de novos clientes"
      ],
      accentColor: "from-blue-500/20 to-cyan-500/10",
      badgeStyle: "text-cyan-400 border-cyan-500/30 bg-cyan-950/60"
    },
    {
      id: "case-ongs",
      badge: "Exemplo 02 | ONGs & Impacto Social",
      icon: HeartHandshake,
      title: "Portais Transparentes & Fáceis de Usar",
      subtitle: "Acessibilidade para Todos & Confiança para Doadores",
      desafio: "Falta de clareza na prestação de contas para parceiros/doadores e sites antigos que não funcionam direito no celular ou para pessoas com deficiência.",
      solucao: "Portais institucionais com Selo de Impacto Digital, painel visual de prestação de contas, total acessibilidade e facilidade de doação.",
      metricas: [
        "Acessível para qualquer pessoa em qualquer dispositivo",
        "Redução drástica nos custos com servidores",
        "Maior transparência e retenção de apoiadores"
      ],
      accentColor: "from-purple-500/20 to-emerald-500/10",
      badgeStyle: "text-emerald-400 border-emerald-500/30 bg-emerald-950/60"
    }
  ];

  return (
    <section id="cases" className="py-20 relative z-10 border-t border-slate-800/80 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full inline-block">
            Cases & Exemplos Reais
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight">
            Como Resolvemos Problemas Reais
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Veja a comparação simples entre os problemas que sua empresa enfrenta e como nossas soluções resolvem na prática.
          </p>
        </div>

        {/* 2 Featured Cases (Desafio vs. Solução) Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {featuredCases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 p-8 backdrop-blur-xl flex flex-col justify-between card-rgb-glow"
              >
                <div className="space-y-6">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono font-bold tracking-wider uppercase border px-3 py-1 rounded-full ${item.badgeStyle}`}>
                      {item.badge}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Desafio Block */}
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-red-400 uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      <span>O Problema / Desafio</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desafio}
                    </p>
                  </div>

                  {/* Solucao Block */}
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Nossa Solução</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.solucao}
                    </p>
                  </div>

                  {/* Metricas */}
                  <div className="space-y-2 border-t border-slate-800 pt-4">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Resultados Alcançados:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                      {item.metricas.map((metrica, mIdx) => (
                        <li key={mIdx} className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span>{metrica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href="#diagnostico"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300"
                  >
                    <span>Quero um Projeto Parecido</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Client Gallery / Active Projects */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Sistemas & Sites em Funcionamento</h3>
              <p className="text-xs text-slate-400">Clique para abrir o site ou passar o mouse para ver a prévia em vídeo</p>
            </div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
              4 Projetos Ativos
            </span>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioData.map((item, idx) => (
              <PortfolioCard key={idx} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
