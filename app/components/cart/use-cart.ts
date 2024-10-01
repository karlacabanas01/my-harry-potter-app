import { useState } from 'react';
import { CartItem, ProductoHarryPotter } from '@/app/utils/types';

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (producto: ProductoHarryPotter, size?: string) => {
    setCart((prevCart) => {
      // Verifica si el producto con la misma talla ya existe en el carrito
      const existingProduct = prevCart.find(
        (item) => item.producto.id === producto.id && item.size === size,
      );

      if (existingProduct) {
        // Si el producto ya existe con la misma talla, incrementa la cantidad
        return prevCart.map((item) =>
          item.producto.id === producto.id && item.size === size
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        );
      } else {
        // Si no existe, agrégalo con cantidad 1 y la talla seleccionada
        return [...prevCart, { producto, cantidad: 1, size }];
      }
    });
  };

  const removeFromCart = (productId: number, size?: string) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.producto.id === productId && item.size === size,
      );

      if (existingProduct && existingProduct.cantidad > 1) {
        // Si el producto tiene más de 1 cantidad, reduce la cantidad
        return prevCart.map((item) =>
          item.producto.id === productId && item.size === size
            ? { ...item, cantidad: item.cantidad - 1 }
            : item,
        );
      } else {
        // Si solo tiene 1 cantidad, lo quita del carrito
        return prevCart.filter(
          (item) => !(item.producto.id === productId && item.size === size),
        );
      }
    });
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
}
