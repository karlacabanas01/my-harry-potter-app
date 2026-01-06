'use client';
import Image from 'next/image';
import React from 'react';

interface Props {
  name: string;
  logoSrc: string;
  color: string;
}

const HouseBanner = ({ name, logoSrc, color }: Props) => {
  return (
    <div className="group relative flex flex-col items-center">
      <div
        className="
          relative w-32 h-64 md:w-40 md:h-80
          transition-all duration-700 ease-in-out
          group-hover:translate-y-[-10px]
          drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]
        "
      >
        <div
          className="
            relative w-full h-[85%] 
            flex flex-col justify-center items-center 
            overflow-hidden rounded-t-sm
            animate-wave /* Animación de ondeado */
          "
          style={{
            backgroundColor: color,
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-30 pointer-events-none" />

          <div className="relative w-20 h-20 md:w-28 md:h-28 z-10 transition-transform duration-500 group-hover:scale-110">
            <Image
              src={logoSrc}
              alt={`${name} Crest`}
              fill
              className="object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.4)]"
              sizes="150px"
            />
          </div>

          <p
            className="
            mt-4 z-10
            font-magic tracking-[0.2em] uppercase text-[10px] md:text-xs 
            bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm
            text-white/90 border border-white/10
          "
          >
            {name}
          </p>
        </div>

        <div
          className="
            absolute bottom-0 left-0 right-0 
            w-0 h-0 
            border-l-[64px] md:border-l-[80px] 
            border-r-[64px] md:border-r-[80px] 
            border-t-[32px] md:border-t-[40px] 
            border-transparent mx-auto
            transition-transform duration-700
            animate-wave-reverse
          "
          style={{
            borderTopColor: color,
            filter: 'brightness(0.85)',
          }}
        />
      </div>

      <div
        className="
        w-12 h-2 bg-black/40 blur-md rounded-full mt-4 
        scale-x-150 opacity-0 group-hover:opacity-100 
        transition-opacity duration-500
      "
      />
    </div>
  );
};

export default HouseBanner;
