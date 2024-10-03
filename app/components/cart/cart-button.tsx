import { CartItem } from '@/app/utils/types';
import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';

const CartButton = ({
  cart,
  onClick,
}: {
  cart: CartItem[];
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <button
        onClick={onClick}
        className="bg-[#d3a625] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
      >
        <TiShoppingCart />
        <span>
          {cart.length} {cart.length === 1 ? 'item' : 'items'}
        </span>
      </button>
    </div>
  );
};

export default CartButton;
