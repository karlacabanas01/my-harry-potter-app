'use client';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { useCart } from '@/app/context/useCart';
import { CartButton } from '../../atoms/buttons';
import CartModal from '../modals/cart-modal';
import { LuWand } from 'react-icons/lu'; // Necesitarás instalar react-icons
import { useTheme } from 'next-themes';

const menuItems = [
  { href: '#books', label: 'Books & Movies' },
  { href: '#spells', label: 'Spells & Magic' },
  { href: '#game', label: 'Quidditch Game' },
];

export function NavbarMenu(): JSX.Element {
  const [showCartModal, setShowCartModal] = useState(false);
  const { cart } = useCart();
  const { theme, setTheme } = useTheme();

  const toggleCartModal = () => setShowCartModal(!showCartModal);

  return (
    <div className="flex items-center gap-6">
      <ul className="hidden lg:flex items-center gap-8">
        {menuItems.map((item) => (
          <li key={item.label} className="relative group">
            <a
              href={item.href}
              className="
                text-lg font-serif tracking-widest transition-all duration-300
                text-gray-300 hover:text-[#ffd700] 
                hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]
                im-fell-english
              "
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffd700] transition-all duration-300 group-hover:w-full box-border shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block w-[1px] h-6 bg-white/20 mx-2" />

      <button
        onClick={() =>
          toast('The Restricted Section', {
            description:
              "The 'Lumos' spell is currently being perfected by karcabcas. This scroll will be readable soon.",
            icon: '📜',
          })
        }
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ffd700]/10 hover:border-[#ffd700]/50 transition-all duration-300 group bg-black/10"
      >
        <LuWand className="text-xl transition-transform duration-500 group-hover:rotate-12 text-[#ffd700]/40 group-hover:text-[#ffd700]" />
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ffd700]/40 group-hover:text-[#ffd700] im-fell-english">
          Lumos
        </span>
      </button>
      {/* BOTÓN DEL CARRITO */}
      <div className="relative hover:scale-110 transition-transform duration-300">
        <CartButton onClick={toggleCartModal} />
      </div>

      {showCartModal && <CartModal onClose={toggleCartModal} />}
    </div>
  );
}
