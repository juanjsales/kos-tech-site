'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/5521981756362?text=${encodeURIComponent(
    'Olá Juan! Estava navegando no site KOS e gostaria de tirar uma dúvida sobre soluções web e automação.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip badge */}
      <div className="hidden sm:flex items-center gap-2 bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-mono px-3.5 py-2 rounded-full shadow-2xl backdrop-blur-md animate-pulse">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>Atendimento Online</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
