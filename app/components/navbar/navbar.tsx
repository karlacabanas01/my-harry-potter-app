import React, { useState, useEffect } from 'react';
import { NavbarLogo } from './nav-logo';
import { NavbarMenu } from './nav-menu';
import { CartItem } from '@/app/utils/types';

interface NavbarProps {
  cart: CartItem[];
  removeFromCart: (itemId: number) => void;
  addToCart: (product: any, size?: string) => void;
}

export function Navbar({
  cart,
  removeFromCart,
  addToCart,
}: NavbarProps): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
          <NavbarLogo />

          <NavbarMenu
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </nav>
    </>
  );
}
