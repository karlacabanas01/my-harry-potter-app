'use client';
import { useState } from 'react';
import { productosHarryPotter } from '@/app/utils/data';
import { Product } from '../components/cart/product';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/navbar/navbar';
import { useCart } from '../components/cart/use-cart';
import Loading from '../loading';
import { usePage } from '../usePage';

export default function Page() {
  const [selectedSize, setSelectedSize] = useState<{ [key: number]: string }>(
    {},
  );
  const { cart, addToCart, removeFromCart } = useCart();
  const { isLoading } = usePage();
  const router = useRouter();

  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSize((prevState) => ({
      ...prevState,
      [productId]: size,
    }));
  };
  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col items-center">
      <Navbar
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />

      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8 flex justify-start">
          <button
            className="text-yellow-400 bg-black border-2 border-yellow-400 px-4 py-2 rounded-2xl hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => router.push('/')}
          >
            Back to
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
                product.nombre.includes('Hoodie') && !selectedSize[product.id]
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
