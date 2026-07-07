import { StaticImageData } from 'next/image';

import lan3jrSiteImg from './Lan3JR-Site.webp';
import lan3jrSiteVid from './Lan3JR-Site.webm';
import lan3jrSystemImg from './Lan3JR-System.webp';
import lan3jrSystemVid from './Lan3JR-System.webm';
import personalizadosImg from './Personalizados.webp';
import personalizadosVid from './Personalizados.webm';
import roStudioImg from './Rô-Studio.webp';

export interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  link: string;
  videoUrl?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    title: "Lan3JR Site",
    description: "Website moderno para a Lan House Lan3JR.",
    imageUrl: lan3jrSiteImg,
    videoUrl: lan3jrSiteVid,
    link: "https://example.com/lan3jr-site",
  },
  {
    title: "Lan3JR System",
    description: "Sistema interno de gerenciamento para a Lan House.",
    imageUrl: lan3jrSystemImg,
    videoUrl: lan3jrSystemVid,
    link: "https://example.com/lan3jr-system",
  },
  {
    title: "Personalizados",
    description: "Catálogo e loja de produtos personalizados.",
    imageUrl: personalizadosImg,
    videoUrl: personalizadosVid,
    link: "https://example.com/personalizados",
  },
  {
    title: "Rô Studio",
    description: "Estúdio de design e beleza Rô Studio.",
    imageUrl: roStudioImg,
    link: "https://example.com/ro-studio",
  },
];
