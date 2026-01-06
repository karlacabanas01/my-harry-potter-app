import React, { useState, useEffect } from 'react';
import { NavbarLogo } from '../molecules/navbar/nav-logo';
import { NavbarMenu } from '../molecules/navbar/nav-menu';

export function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'py-2 bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg border-b border-[#ffd700]/20'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavbarLogo />
        <NavbarMenu />
      </div>

      <div
        className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent transition-all duration-700 ease-out ${
          isScrolled ? 'w-full opacity-60' : 'w-0 opacity-0'
        }`}
      />
    </nav>
  );
}
