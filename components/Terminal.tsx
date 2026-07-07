'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';

interface TerminalLine {
    text: string;
    color: string;
}

export function Terminal() {
    const [inputValue, setInputValue] = useState('');
    const [outputLines, setOutputLines] = useState<TerminalLine[]>([
        { text: '> Inicializando escaneamento de mercado local...', color: 'text-blue-400' },
        { text: '// Aguardando inserção de dados do comércio...', color: 'text-slate-500' },
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
        setOutputLines([{ text: `> Inicializando auditoria para: "${name}"...`, color: 'text-blue-400' }]);

        const steps = [
            { text: `[CONEXÃO] Varrendo servidores locais na região...`, color: `text-slate-500` },
            { text: `[DETECÇÃO] Mapeando coordenadas e indexação de mapas ativos...`, color: `text-slate-500` },
            { text: `[ALERTA] Vazamento de tráfego detectado: concorrentes absorvendo a maioria dos cliques locais.`, color: `text-red-400 font-bold` },
            { text: `[DIAGNÓSTICO] Diagnóstico concluído. A empresa ${name} necessita de blindagem digital urgente.`, color: `text-yellow-400` },
            { text: `[SISTEMA] Solução recomendada: Implantação de Ecossistema Estático KOS.`, color: `text-green-400 font-bold` },
            { text: `> Clique em "Garantir Ecossistema" abaixo para aplicar a correção automática via WhatsApp.`, color: `text-blue-400 animate-pulse` }
        ];

        steps.forEach((step, index) => {
            setTimeout(() => {
                setOutputLines(prevLines => [...prevLines, step]);
            }, (index + 1) * 1200);
        });

        setInputValue('');
    };

    return (
        <div className="bg-[#0A0D1A]/90 border border-white/10 rounded-2xl shadow-2xl p-6 backdrop-blur-xl relative overflow-hidden group">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/40"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/40"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/40"></span>
                </div>
                <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">KOS_CORE_AUDIT_v2.6</span>
            </div>

            <div ref={terminalBodyRef} className="font-mono text-xs text-slate-400 space-y-3 h-64 overflow-y-auto" aria-live="polite">
                {outputLines.map((line, index) => (
                    <p key={index} className={line.color}>{line.text}</p>
                ))}
            </div>

            <form onSubmit={handleAudit} className="mt-4 pt-4 border-t border-white/5 flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite o nome da sua empresa..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors text-white"
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold px-4 py-2 rounded-lg transition-all active:scale-95">
                    ANALISAR
                </button>
            </form>
        </div>
    );
}