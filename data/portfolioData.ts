export interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  videoUrl?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    title: "Lan3JR Site",
    description: "Website moderno para a Lan House Lan3JR.",
    imageUrl: "/data/Lan3JR-Site.webp",
    videoUrl: "/data/Lan3JR-Site.webm",
    link: "https://example.com/lan3jr-site",
  },
  {
    title: "Lan3JR System",
    description: "Sistema interno de gerenciamento para a Lan House.",
    imageUrl: "/data/Lan3JR-System.webp",
    videoUrl: "/data/Lan3JR-System.webm",
    link: "https://example.com/lan3jr-system",
  },
  {
    title: "Personalizados",
    description: "Catálogo e loja de produtos personalizados.",
    imageUrl: "/data/Personalizados.webp",
    videoUrl: "/data/Personalizados.webm",
    link: "https://example.com/personalizados",
  },
  {
    title: "Rô Studio",
    description: "Estúdio de design e beleza Rô Studio.",
    imageUrl: "/data/Rô-Studio.webp",
    videoUrl: "/data/Rô-Studio.webm",
    link: "https://example.com/ro-studio",
  },
];
