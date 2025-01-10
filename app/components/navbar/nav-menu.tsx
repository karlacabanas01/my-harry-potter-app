import React, { useState } from 'react';
import CartButton from '../cart/cart-button';
import CartModal from '../cart/cart-modal';
import { useCart } from '@/app/context/useCart';

const menuItems = [
  { href: '#books', label: 'Books-Movies' },
  { href: '#spells', label: 'Spells-Characters' },
  { href: '#game', label: 'Game' },
];

export function NavbarMenu(): JSX.Element {
  const [showCartModal, setShowCartModal] = useState(false);
  const { cart } = useCart(); // Ver si cart está sincronizado aquí también
  console.log('Contenido del carrito en NavbarMenu:', cart);

  const toggleCartModal = () => setShowCartModal(!showCartModal);

  return (
    <div className="flex items-center">
      <ul className="hidden text-xl font-bold lg:flex space-x-4 lg:mr-4 pangolin">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-[#f0c75e]">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <CartButton onClick={toggleCartModal} />
      {showCartModal && <CartModal onClose={toggleCartModal} />}
    </div>
  );
}
