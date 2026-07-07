import Link from "next/link";
import { TableWrapper } from "./TableWrapper";

export function Pricing() {
    return (
        <section id="solucoes" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display mb-3">Tabela de Engenharia e Preços</h2>
                <p className="text-sm text-slate-400">Arquiteturas de implantação em cotação de taxa única, livres de custos fixos recorrentes ou mensalidades de servidor.</p>
            </div>

            <TableWrapper>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-xs font-bold tracking-wider uppercase text-slate-400 font-display bg-dark-overlay">
                                <th className="p-6 w-2/5">Módulos de Sistema</th>
                                <th className="p-6 text-center">📍 Local<br /><span className="text-white text-base font-normal font-sans block mt-1">R$ 250</span></th>
                                <th className="p-6 text-center">⚡ Site Premium<br /><span className="text-white text-base font-normal font-sans block mt-1">R$ 1.500</span></th>
                                <th className="p-6 text-center bg-blue-500/5 border-x border-white/5 relative">
                                    
                                    <div className="inline-flex items-center justify-center p-0.5 rounded-full bg-gradient-to-br from-red-500 via-green-500 to-purple-600 mb-2">
                                        <span className="inline-block text-[9px] font-bold text-white px-2 py-0.5 bg-[#05070F] rounded-full uppercase tracking-widest mb-1">Melhor Custo-Benefício</span>
                                    </div>
                                    <span className="block text-white mt-2">🪐 Ecossistema</span>
                                    <span className="text-blue-400 text-base font-bold font-sans block mt-1">R$ 1.750</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-white/5 text-slate-400 font-light">
                            <tr className="hover:bg-white/[0.01] transition-colors">
                                <td className="p-6 font-medium text-white">Engenharia Google Maps & SEO Local</td>
                                <td className="p-6 text-center text-blue-400 font-bold text-lg">✓</td>
                                <td className="p-6 text-center text-slate-600">✕</td>
                                <td className="p-6 text-center text-blue-400 font-bold text-lg bg-white/[0.01]">✓</td>
                            </tr>
                            <tr className="hover:bg-white/[0.01] transition-colors">
                                <td className="p-6 font-medium text-white">Desenvolvimento Edge Static (Vercel/GitHub)</td>
                                <td className="p-6 text-center text-slate-600">✕</td>
                                <td className="p-6 text-center text-purple-400 font-bold text-lg">✓</td>
                                <td className="p-6 text-center text-purple-400 font-bold text-lg bg-white/[0.01]">✓</td>
                            </tr>
                            <tr className="hover:bg-white/[0.01] transition-colors">
                                <td className="p-6 font-medium text-white">Taxa de Hospedagem de Servidor Mensal</td>
                                <td className="p-6 text-center text-slate-500 font-mono text-xs">Isento</td>
                                <td className="p-6 text-center text-emerald-400 font-mono font-semibold text-xs">R$ 0.00 /mês</td>
                                <td className="p-6 text-center text-emerald-400 font-mono font-semibold text-xs bg-white/[0.01]">R$ 0.00 /mês</td>
                            </tr>
                            <tr className="hover:bg-white/[0.01] transition-colors">
                                <td className="p-6 font-medium text-white">Canais Inteligentes de Captura (WhatsApp Direct)</td>
                                <td className="p-6 text-center text-slate-600">✕</td>
                                <td className="p-6 text-center text-purple-400 font-bold text-lg">✓</td>
                                <td className="p-6 text-center text-purple-400 font-bold text-lg bg-white/[0.01]">✓</td>
                            </tr>
                            <tr className="bg-white/[0.01]">
                                <td className="p-6"></td>
                                <td className="p-6 text-center">
                                    <Link href="https://wa.me/5521989886602?text=Quero+o+Plano+Local" target="_blank" className="text-xs font-bold tracking-wider uppercase text-slate-300 border border-white/10 px-4 py-2.5 rounded-full hover:bg-white/5 transition-all">Escolher</Link>
                                </td>
                                <td className="p-6 text-center">
                                    <Link href="https://wa.me/5521989886602?text=Quero+o+Site+Premium" target="_blank" className="text-xs font-bold tracking-wider uppercase text-slate-300 border border-white/10 px-4 py-2.5 rounded-full hover:bg-white/5 transition-all">Escolher</Link>
                                </td>
                                <td className="p-6 text-center bg-white/[0.03] relative">
                                    <Link href="https://wa.me/5521989886602?text=Quero+o+Ecossistema+Completo" target="_blank" className="text-xs font-bold text-white bg-blue-600 px-6 py-3 rounded-full shadow-lg shadow-blue-500/20 hover:bg-blue-500 hover:scale-105 inline-block transition-all duration-300">Garantir Ecossistema 🚀</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TableWrapper>
        </section>
    );
}