'use client';
import { useState } from 'react';
import { productosHarryPotter } from '@/app/utils/data';
import Loading from '../loading';
import { usePage } from '../usePage';
import { useCart } from '../context/useCart';
import { Navbar } from '../components/organisms/navbar';
import { Product } from '../components/organisms/product/product';
import BackButton from '../components/atoms/buttons/back-button';

export default function Page() {
  const [selectedSize, setSelectedSize] = useState<{ [key: number]: string }>(
    {},
  );
  const { addToCart } = useCart();
  const { isLoading } = usePage();

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
          <BackButton label="Go to Home" route="/home" />
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
