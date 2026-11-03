'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";
import Autoplay from 'embla-carousel-autoplay';

export default function ResponsiveSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start'
    
  },[ Autoplay({ delay: 3000, stopOnInteraction: false }) ]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {/* 1. Slayt (Yatay) */}
<div className="flex-none h-[420px] md:h-[500px] w-auto rounded-lg overflow-hidden">
  <Image 
    src="/1.png" 
    alt="System Watcher Image 1" 
    width={1437} 
    height={958} 
    className="h-full w-auto object-contain block"
  />
</div>

{/* 2. Slayt (Yatay) */}
<div className="flex-none h-[420px] md:h-[500px] w-auto rounded-lg overflow-hidden">
  <Image 
    src="/2.png" 
    alt="System Watcher Image 2" 
    width={1441} 
    height={955} 
    className="h-full w-auto object-contain block"
  />
</div>

{/* 3. Slayt (Dikey) */}
<div className="flex-none h-[420px] md:h-[500px] w-auto rounded-lg overflow-hidden">
  <Image 
    src="/3.png" 
    alt="System Watcher Image 3" 
    width={540} 
    height={715} 
    className="h-full w-auto object-contain block"
  />
</div>

        

      </div>

      <div className='flex gap-2 pt-5'>
        <button onClick={scrollPrev} className="p-2 bg-[rgba(255,255,255,0.1)] transition-all hover:bg-[rgba(255,255,255,0.2)] text-white cursor-pointer active:bg-[rgba(255,255,255,0.1)] flex justify-center active:scale-[101%] items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#e3e3e3">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
        </button>

        <button onClick={scrollNext} className="p-2 bg-[rgba(255,255,255,0.1)] transition-all hover:bg-[rgba(255,255,255,0.2)] active:bg-[rgba(255,255,255,0.1)] text-white cursor-pointer flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"  fill="#e3e3e3">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
        </button>
      </div>
    </div>
  );
}