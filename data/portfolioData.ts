export interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    title: "Projeto 1",
    description: "Descrição breve do projeto 1.",
    imageUrl: "https://picsum.photos/seed/p1/400/300",
    link: "https://example.com/projeto1",
  },
  {
    title: "Projeto 2",
    description: "Descrição breve do projeto 2.",
    imageUrl: "https://picsum.photos/seed/p2/400/300",
    link: "https://example.com/projeto2",
  },
  {
    title: "Projeto 3",
    description: "Descrição breve do projeto 3.",
    imageUrl: "https://picsum.photos/seed/p3/400/300",
    link: "https://example.com/projeto3",
  },
  {
    title: "Projeto 4",
    description: "Descrição breve do projeto 4.",
    imageUrl: "https://picsum.photos/seed/p4/400/300",
    link: "https://example.com/projeto4",
  },
];
