import Link from "next/link";
import { Terminal } from "./Terminal";

export function Hero() {
    return ( <>
        
<section className="max-w-6xl mx-auto px-6 pt-16 pb-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-7 space-y-6 text-left">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> Motor Web de Próxima Geração
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
                        Leve sua marca ao mapa, sem custos de servidor.
                    </h1>
                    <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-xl">
                        Criamos sites ultra‑rápidos que ficam no topo do Google sem cobrar nada por hospedagem.
                    </p>
                    <div className="pt-2">
                        <Link href="#solucoes" className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold tracking-widest uppercase text-white rounded-full bg-gradient-to-br from-red-500 via-green-500 to-purple-600 hover:text-white focus:ring-4 focus:outline-none">
                            <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-[#05070F] rounded-full group-hover:bg-opacity-0">
                                Iniciar Diagnóstico da Minha Empresa
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-5 w-full">
                    <Terminal />
                </div>

            </div>
        </section>
    </>
);
}