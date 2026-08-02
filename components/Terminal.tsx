'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';

interface TerminalLine {
    text: string;
    color: string;
}

export function Terminal() {
    const [inputValue, setInputValue] = useState('');
    const [outputLines, setOutputLines] = useState<TerminalLine[]>([
        { text: '> Digite o nome da sua empresa abaixo para simular uma análise rápida...', color: 'text-cyan-400 font-semibold' },
        { text: '// Simulação visual de presença na internet...', color: 'text-slate-500' },
    ]);
    const terminalBodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [outputLines]);

    const handleAudit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const name = inputValue.toUpperCase();
        setOutputLines([{ text: `> Analisando presença digital de: "${name}"...`, color: 'text-cyan-400 font-bold' }]);

        const steps = [
            { text: `[BUSCA] Procurando pela empresa "${name}" na sua região...`, color: `text-slate-400` },
            { text: `[ANALISE] Checando se o site atual é rápido e fácil de acessar no celular...`, color: `text-slate-400` },
            { text: `[ALERTA] Concorrentes estão absorvendo potenciais clientes por falta de atendimento rápido.`, color: `text-red-400 font-bold` },
            { text: `[DIAGNÓSTICO] Concluído: A empresa ${name} precisa de um site veloz e integrado ao WhatsApp.`, color: `text-yellow-400 font-semibold` },
            { text: `[SOLUÇÃO] Implantação recomendada: Plataforma KOS de Alta Performance.`, color: `text-emerald-400 font-bold` },
            { text: `> Clique em "Solicitar Diagnóstico Gratuito" para falar com o especialista.`, color: `text-cyan-300 animate-pulse` }
        ];

        steps.forEach((step, index) => {
            setTimeout(() => {
                setOutputLines(prevLines => [...prevLines, step]);
            }, (index + 1) * 900);
        });

        setInputValue('');
    };

    return (
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl shadow-2xl p-6 backdrop-blur-xl relative overflow-hidden group card-rgb-glow">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/60"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/60"></span>
                </div>
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">DIAGNÓSTICO_RÁPIDO_V2</span>
            </div>

            <div ref={terminalBodyRef} className="font-mono text-xs text-slate-300 space-y-3 h-64 overflow-y-auto" aria-live="polite">
                {outputLines.map((line, index) => (
                    <p key={index} className={line.color}>{line.text}</p>
                ))}
            </div>

            <form onSubmit={handleAudit} className="mt-4 pt-4 border-t border-slate-800 flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite o nome da sua empresa..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2.5 text-xs font-sans focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
                />
                <button type="submit" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg transition-all active:scale-95 flex-shrink-0">
                    ANALISAR
                </button>
            </form>
        </div>
    );
}