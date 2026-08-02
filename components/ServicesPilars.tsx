'use client';

import { motion } from 'framer-motion';
import { Globe, Cpu, Layers, ArrowUpRight, Check } from 'lucide-react';

export function ServicesPilars() {
  const pilars = [
    {
      id: "web-apps",
      icon: Globe,
      title: "Aplicações Web & Landing Pages de Alta Conversão",
      subtitle: "Arquitetura Frontend Moderna & Mobile-First",
      description:
        "Desenvolvimento de interfaces ultra-rápidas otimizadas para conversão e captura de clientes, integrando SEO Técnico, compressão WebP e Social Cards (Open Graph).",
      tags: ["Mobile-First", "SEO Técnico", "WebP Media", "Open Graph", "Vercel / Next.js"],
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      accentColor: "text-cyan-400",
      borderColor: "hover:border-cyan-500/50"
    },
    {
      id: "automation",
      icon: Cpu,
      title: "Automação de Workflows & Backend",
      subtitle: "Integrações de Alta Conectividade via API",
      description:
        "Conexão de sistemas e robôs de automação que disparam mensagens no WhatsApp, sincronizam dados em tempo real no Google Sheets/CRMs e processam pagamentos (Stripe & Mercado Pago).",
      tags: ["Webhooks API", "WhatsApp Bot", "CRMs & Sheets", "Stripe / Mercado Pago", "Serverless Functions"],
      gradient: "from-cyan-500/20 via-emerald-500/10 to-transparent",
      accentColor: "text-emerald-400",
      borderColor: "hover:border-emerald-500/50"
    },
    {
      id: "consulting",
      icon: Layers,
      title: "Consultoria de Processos & Arquitetura",
      subtitle: "Eliminação de Custos Recorrentes e Gargalos",
      description:
        "Mapeamento de gargalos operacionais, migração de infraestruturas caras para soluções Serverless de custo zero de manutenção e blindagem de segurança digital.",
      tags: ["Serverless CDN", "Custo Mensal R$0", "Mapeamento POP", "Performance Audit", "Cloud Security"],
      gradient: "from-purple-500/20 via-blue-500/10 to-transparent",
      accentColor: "text-purple-400",
      borderColor: "hover:border-purple-500/50"
    }
  ];

  return (
    <section id="servicos" className="py-20 relative z-10 border-t border-slate-800/60 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full inline-block">
            Pilares de Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight">
            Engenharia de Soluções Sob Medida para o Seu Negócio
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Combinamos arquitetura web de ponta com automação estratégica para acelerar vendas e eliminar tarefas manuais.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pilars.map((pilar, idx) => {
            const Icon = pilar.icon;
            return (
              <motion.div
                key={pilar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-8 backdrop-blur-xl transition-all duration-300 card-rgb-glow hover:-translate-y-1 ${pilar.borderColor}`}
              >
                {/* Subtle top glow gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pilar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 space-y-6">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase border border-slate-800 px-2.5 py-1 rounded-full">
                      Pilar 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                      {pilar.title}
                    </h3>
                    <p className={`text-xs font-semibold ${pilar.accentColor} uppercase tracking-wider mb-3`}>
                      {pilar.subtitle}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed font-normal">
                      {pilar.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2 border-t border-slate-800/80 pt-4">
                    {pilar.tags.map((tag, tagIdx) => (
                      <li key={tagIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <div className="pt-2">
                    <a
                      href="#diagnostico"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                    >
                      <span>Aplicar este Pilar</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
