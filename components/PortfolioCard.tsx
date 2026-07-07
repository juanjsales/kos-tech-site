"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
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
    <Link href={item.link} target="_blank" rel="noopener noreferrer">
      <div 
        className="group rounded-xl overflow-hidden border border-white/10 bg-[#05070F]/60 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:border-white/30 shadow-lg shadow-black/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-48 overflow-hidden bg-black">
          <Image 
            src={item.imageUrl} 
            alt={item.title} 
            fill 
            className="object-cover group-hover:opacity-90 transition-opacity duration-300 z-0" 
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
