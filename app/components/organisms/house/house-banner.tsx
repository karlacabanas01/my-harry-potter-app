'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
  name: string;
  logoSrc: string;
  color: string;
}

const HouseBanner = ({ name, logoSrc, color }: Props) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`text-center transition-transform duration-500 ease-in-out cursor-pointer  ${
        isZoomed ? 'scale-125 z-30' : ''
      }`}
    >
      <div className="wave-animation relative w-32 h-64 md:w-40 md:h-80 mx-auto shadow-2xl">
        <div
          className="w-full h-56 pt-8 md:h-72 flex flex-col justify-center items-center relative"
          style={{ backgroundColor: color }}
        >
          <Image
            src={logoSrc}
            alt={`${name} Crest`}
            className="object-contain"
            layout="intrinsic"
            width={100}
            height={100}
            sizes="(max-width: 768px) 100px, (min-width: 769px) 150px"
          />
          <p className="bg-banner text-lg mt-2 md:text-lg font-bold">{name}</p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 w-0 h-0 border-l-[64px] md:border-l-[80px] border-r-[64px] md:border-r-[80px] border-t-[32px] md:border-t-[40px] border-transparent mx-auto"
          style={{ borderTopColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default HouseBanner;
