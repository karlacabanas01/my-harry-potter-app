import React, { useState } from 'react';
import CartButton from '../cart/cart-button';
import CartModal from '../cart/cart-modal';
import { CartItem, ProductoHarryPotter } from '@/app/utils/types';

interface Props {
  cart: CartItem[];
  removeFromCart: (itemId: number) => void;
  addToCart: (product: ProductoHarryPotter, size?: string) => void;
}

const menuItems = [
  { href: '#movies', label: 'Movies' },
  { href: '#books', label: 'Books' },
  { href: '#house', label: 'Houses' },
  { href: '#spells', label: 'Spells and Characters' },
];

export function NavbarMenu({
  cart,
  removeFromCart,
  addToCart,
}: Props): JSX.Element {
  const [showCartModal, setShowCartModal] = useState(false);

  const toggleCartModal = () => setShowCartModal(!showCartModal);

  return (
    <div className="flex items-center text-2xl font-bold pangolin">
      <ul className="hidden lg:flex space-x-4 lg:mr-4">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-[#f0c75e]">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <CartButton cart={cart} onClick={toggleCartModal} />
      {showCartModal && (
        <CartModal
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          onClose={toggleCartModal}
        />
      )}
    </div>
  );
}
