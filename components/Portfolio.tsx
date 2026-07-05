import { portfolioData } from '@/data/portfolioData';
import { PortfolioCard } from '@/components/PortfolioCard';

export function Portfolio() {
  return (
    <section className="py-16 bg-[#05070F]/30 backdrop-blur-xl" id="portfolio">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4 bg-clip-text text-transparent">
      </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {portfolioData.map((item, idx) => (
            <PortfolioCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
