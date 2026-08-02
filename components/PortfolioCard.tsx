"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolioData';

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !item.videoUrl) return;

    if (isHovered) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.debug("Video play interrupted:", error);
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered, item.videoUrl]);

  return (
    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block">
      <div 
        className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-slate-700 shadow-xl card-rgb-glow flex flex-col h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-44 overflow-hidden bg-slate-950">
          <Image 
            src={item.imageUrl} 
            alt={item.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500 z-0" 
          />
          {item.videoUrl && (
            <video
              ref={videoRef}
              src={item.videoUrl}
              muted
              loop
              playsInline
              preload="metadata"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out pointer-events-none ${
                isHovered ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          )}
          
          <div className="absolute top-3 right-3 z-20 bg-slate-950/80 border border-slate-800 p-1.5 rounded-full text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity">
            {item.videoUrl && isHovered ? (
              <Play className="w-3.5 h-3.5 fill-current animate-pulse text-emerald-400" />
            ) : (
              <ExternalLink className="w-3.5 h-3.5" />
            )}
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
          <div>
            <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
              {item.title}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </div>
          
          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-cyan-400">
            <span>Acessar Aplicação</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Bottom RGB Glow Accent */}
        <div className="h-1 rainbow-decor" />
      </div>
    </Link>
  );
}
