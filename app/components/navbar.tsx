'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full transition-all duration-500 ease-in-out z-50 ${
          isScrolled ? 'bg-stars' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div className="navbar-header cursor-pointer">
            <Link href="/#home" className="flex flex-row items-center">
              <Image
                src="/img/logo.png"
                alt="Logo de Harry Potter"
                width={60}
                height={60}
              />
              <h1 className="text-3xl font-bold text-white pangolin">
                Harry Potter
              </h1>
            </Link>
          </div>

          <div
            id="navbar-menu"
            className="hidden text-[#ffffff] text-lg lg:flex flex-col lg:flex-row lg:items-center lg:justify-end"
          >
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#movies" className="hover:text-[#f0c75e]">
                  Películas
                </a>
              </li>
              <li>
                <a href="#books" className="hover:text-[#f0c75e]">
                  Libros
                </a>
              </li>
              <li>
                <a href="#house" className="hover:text-[#f0c75e]">
                  Casas
                </a>
              </li>
              <li>
                <a href="#spells" className="hover:text-[#f0c75e]">
                  Hechizos y Personajes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        id="home"
        style={{ backgroundImage: "url('/img/castillo-fenix.png')" }}
        className="h-[850px] bg-cover bg-center text-center text-[#946b2d]"
      >
        <div className="container mx-auto py-32">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-[#946b2d] max-w-3xl mx-auto mt-28">
            <h1 className="text-5xl font-bold tracking-wider font-serif">
              El Mundo Mágico de Harry Potter
            </h1>
            <p className="text-lg mb-6 italic">
              Explora el mundo de Harry Potter, desde los amados libros hasta
              las emocionantes películas, y los inolvidables personajes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
