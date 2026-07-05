import Image from 'next/image';
import Link from 'next/link';
import { PortfolioItem } from '@/data/portfolioData';

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link href={item.link} target="_blank" rel="noopener noreferrer">
      <div className="group rounded-xl overflow-hidden border border-white/10 bg-[#05070F]/60 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:border-white/30 shadow-lg shadow-black/30">
        <div className="relative w-full h-48">
          <Image src={item.imageUrl} alt={item.title} fill className="object-cover group-hover:opacity-90 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-sm text-gray-400">{item.description}</p>
        </div>
        <div className="h-1 rainbow-decor"></div>
      </div>
    </Link>
  );
}
