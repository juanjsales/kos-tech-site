import Link from "next/link";

export function Header() {
    return (
        <header className="border-b border-white/5 bg-[#05070F]/60 backdrop-blur-xl sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="inline-flex flex-col items-start leading-none group">
                    <span className="text-2xl font-black tracking-widest text-white font-display uppercase flex items-center">
                        KOS<span className="font-montserrat inline-block w-2 h-2 rounded-full rainbow-decor ml-0.5 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                    </span>
                    <div className="h-[2px] w-full rainbow-decor mt-1 rounded-full"></div>
                </div>
                <Link href="#solucoes" className="text-xs font-bold tracking-widest uppercase bg-white text-slate-950 px-5 py-3 rounded-full hover:bg-slate-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/5">
                    Explorar Ecossistema
                </Link>
            </div>
        </header>
    );
}