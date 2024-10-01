'use client';
import { useState } from 'react';
import { productosHarryPotter } from '@/app/utils/data';
import { Product } from '../components/cart/product';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/navbar/navbar';
import { useCart } from '../components/cart/use-cart';

export default function Page() {
  const [selectedSize, setSelectedSize] = useState<{ [key: number]: string }>(
    {},
  );
  const { cart, addToCart, removeFromCart } = useCart();
  const router = useRouter();

  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSize((prevState) => ({
      ...prevState,
      [productId]: size,
    }));
  };

  return (
    <>
      <Navbar
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />

      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8 flex justify-center">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
            onClick={() => router.push('/')}
          >
            Volver
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {productosHarryPotter.map((product) => (
            <Product
              key={product.id}
              product={product}
              selectedSize={selectedSize[product.id]}
              addToCart={addToCart}
              handleSizeChange={handleSizeChange}
              isDisabled={
                product.nombre.includes('Sudadera') && !selectedSize[product.id]
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
