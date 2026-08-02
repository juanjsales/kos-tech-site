'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Realmente não há custos mensais de hospedagem?",
      answer:
        "Sim! Desenvolvemos aplicações estáticas altamente otimizadas hospedadas em redes de alta velocidade (Vercel/GitHub). Essa tecnologia suporta milhares de acessos diários sem cobrar mensalidades de servidor."
    },
    {
      question: "Qual é o prazo médio de entrega do projeto?",
      answer:
        "Dependendo do plano escolhido, a entrega completa varia de 3 a 7 dias úteis. Todo o acompanhamento do projeto é feito em tempo real em um painel transparente e fácil de usar."
    },
    {
      question: "Emitente de Nota Fiscal e contrato de prestação de serviços?",
      answer:
        "Sim, atuamos 100% formalizados com emissão de Nota Fiscal (PJ) para empresas B2B, infoprodutores e ONGs, além de contrato transparente com garantia explícita."
    },
    {
      question: "Como funciona o atendimento automático no WhatsApp?",
      answer:
        "Quando um cliente preenche o formulário no seu site, os dados são organizados e abrem a conversa direto no WhatsApp da sua empresa, permitindo atendimento instantâneo sem digitar nada manual."
    },
    {
      question: "Posso utilizar meu próprio domínio (.com.br / .com)?",
      answer:
        "Com certeza! Configuramos seu domínio personalizado e ativamos o Certificado de Segurança SSL (o cadeado de segurança HTTPS) de forma 100% gratuita no seu site."
    },
    {
      question: "Como funciona a Garantia Nativa de 30 Dias?",
      answer:
        "Após o lançamento do site, você conta com 30 dias de suporte técnico incluso para tirar dúvidas, fazer ajustes finos e garantir que sua empresa opere sem sobressaltos."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative z-10 border-t border-slate-800/80 bg-slate-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full inline-block">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Respostas diretas para as dúvidas mais comuns de nossos clientes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all duration-200 hover:border-slate-700"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
