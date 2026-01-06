import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function NavbarLogo(): JSX.Element {
  return (
    <div className="flex flex-row items-center">
      <Link href="/#home" className="flex items-center group gap-3">
        <div className="relative transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6">
          <Image
            src="/img/logo.png"
            alt="Logo de Harry Potter"
            width={60}
            height={60}
            className="drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]"
          />
        </div>

        <div className="hidden sm:flex flex-col">
          <h1
            className="text-2xl font-bold tracking-widest font-serif leading-none transition-colors duration-300
            text-[#e2d1c3] group-hover:text-[#ffd700] group-hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]
            im-fell-english"
          >
            Harry Potter
          </h1>
          <span className="text-[10px] tracking-[0.3em] text-[#ffd700] opacity-0 group-hover:opacity-80 transition-opacity duration-500 uppercase font-serif ml-1">
            Wizarding World
          </span>
        </div>
      </Link>
    </div>
  );
}
