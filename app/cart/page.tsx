'use client';
import { useState } from 'react';
import { productosHarryPotter } from '@/app/utils/data';
import { useRouter } from 'next/navigation';
import Loading from '../loading';
import { usePage } from '../usePage';
import { useCart } from '../context/useCart';
import { Navbar } from '../components/organisms/navbar';
import { Product } from '../components/organisms/product/product';

export default function Page() {
  const [selectedSize, setSelectedSize] = useState<{ [key: number]: string }>(
    {},
  );
  const { addToCart } = useCart();
  const { isLoading } = usePage();
  const router = useRouter();

  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSize((prevState) => ({
      ...prevState,
      [productId]: size,
    }));
  };
  if (isLoading) return <Loading />;

  //Ver como poner Context API
  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="w-full mb-8 flex justify-start">
          <button
            className="text-yellow-400 bg-black border-2 border-yellow-400 px-4 py-2 rounded-2xl hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => router.push('/')}
          >
            Back to
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center w-full ">
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
