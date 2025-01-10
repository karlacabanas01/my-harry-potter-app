'use client';
import React, { createContext, useContext, useState } from 'react';
import { CartItem, ProductoHarryPotter } from '@/app/utils/types';

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: ProductoHarryPotter, size?: string) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: ProductoHarryPotter, size?: string) => {
    console.log('Producto agregado:', product); // Confirmar que se agrega
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.producto.id === product.id && item.size === size,
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.producto.id === product.id && item.size === size
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        );
      }

      return [...prevCart, { producto: product, size, cantidad: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.producto.id !== productId),
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
