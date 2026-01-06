import { useCart } from '@/app/context/useCart';
import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';

const CartButton = ({ onClick }: { onClick: () => void }) => {
  const { cart } = useCart();

  return (
    <div className="flex flex-row items-center justify-center">
      <button
        onClick={onClick}
        className="
          /* 1. Estructura Base y Cristal */
          relative group flex items-center gap-3 px-5 py-2 rounded-full
          bg-[#0a0a0a]/40 backdrop-blur-md 
          border border-[#ffd700]/40
          
          /* 2. Tipografía y Color Base */
          text-[#ffd700] font-serif tracking-widest text-sm 
          
          /* 3. Transiciones Mágicas (Hover) */
          transition-all duration-500 ease-out
          hover:bg-[#ffd700] hover:text-[#0f172a] hover:border-[#ffd700]
          hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]
          hover:scale-105
        "
      >
        <TiShoppingCart className="text-xl transform transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />

        <span className="font-bold relative z-10 mt-[2px]">
          {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
        </span>

        <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
      </button>
    </div>
  );
};

export default CartButton;
