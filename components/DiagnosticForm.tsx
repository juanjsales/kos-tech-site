'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, Clock } from 'lucide-react';

export function DiagnosticForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipoEmpresa: 'Empresa B2B',
    desafio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) return;

    setIsSubmitting(true);

    // Simulate Webhook / API dispatch
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Construct WhatsApp pre-filled message as a fallback link
      const text = encodeURIComponent(
        `Olá Juan! Solicitei um diagnóstico técnico no site KOS:\n\n` +
        `• Nome: ${formData.nome}\n` +
        `• E-mail: ${formData.email}\n` +
        `• Tipo de Empresa: ${formData.tipoEmpresa}\n` +
        `• Desafio: ${formData.desafio}`
      );
      
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Open WhatsApp direct in background or tab
      setTimeout(() => {
        window.open(`https://wa.me/5521981756362?text=${text}`, '_blank');
      }, 1000);

    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="diagnostico" className="py-20 relative z-10 border-t border-slate-800/80 bg-slate-950/90">
      
      {/* Background glow behind form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] pointer-events-none overflow-hidden z-0 opacity-30">
        <div className="w-full h-full rounded-full prism-glow" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full inline-block">
            Diagnóstico Gratuito & Proposta Comercial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Solicitar Diagnóstico Técnico da Sua Plataforma
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            Preencha os dados abaixo para receber uma análise de gargalos operacionais e uma proposta personalizada em até 24 horas.
          </p>
        </div>

        {/* Card Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10 shadow-2xl backdrop-blur-xl card-rgb-glow"
        >
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Solicitação Recebida com Sucesso!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Obrigado, <strong className="text-cyan-400">{formData.nome}</strong>. Redirecionando para o WhatsApp para atendimento prioritário...
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono text-cyan-400 underline hover:text-cyan-300"
                >
                  Enviar outra solicitação
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Field 1: Nome Completo */}
                <div className="space-y-2">
                  <label htmlFor="nome" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Nome Completo <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Ex: Carlos Silva"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans"
                  />
                </div>

                {/* Field 2: E-mail Corporativo */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    E-mail Corporativo <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="carlos@suaempresa.com.br"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans"
                  />
                </div>

              </div>

              {/* Field 3: Tipo de Empresa */}
              <div className="space-y-2">
                <label htmlFor="tipoEmpresa" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Tipo de Empresa / Projeto <span className="text-cyan-400">*</span>
                </label>
                <select
                  id="tipoEmpresa"
                  value={formData.tipoEmpresa}
                  onChange={(e) => setFormData({ ...formData, tipoEmpresa: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans"
                >
                  <option value="Empresa B2B">Empresa B2B / Corporativo</option>
                  <option value="Infoproduto / Lançamento">Infoproduto / Lançamento Digital</option>
                  <option value="ONG / Terceiro Setor">ONG / Terceiro Setor (Impacto Social)</option>
                  <option value="Comércio Local / Outro">Comércio Local / Outro</option>
                </select>
              </div>

              {/* Field 4: Seu Maior Desafio */}
              <div className="space-y-2">
                <label htmlFor="desafio" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Seu Maior Desafio Operacional ou Objetivo do Site <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="desafio"
                  rows={4}
                  required
                  value={formData.desafio}
                  onChange={(e) => setFormData({ ...formData, desafio: e.target.value })}
                  placeholder="Descreva resumidamente o que sua empresa precisa (ex: reformular landing page para carregar mais rápido, automatizar mensagens no WhatsApp, integrar CRM...)"
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-extrabold tracking-widest uppercase text-white rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Processando Diagnóstico...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Enviar & Solicitar Proposta Comercial</span>
                      <Send className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 font-mono pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Seus dados estão 100% protegidos
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" /> Resposta comercial direta em até 24h
                </span>
              </div>

            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
}
