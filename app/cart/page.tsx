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

  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 relative z-10">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <BackButton label="Return to Hogwarts" route="/" />
          </div>

          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-6xl font-bold font-serif im-fell-english tracking-wide text-[#e2d1c3] drop-shadow-lg">
              Wizarding <span className="text-[#ffd700]">Supplies</span>
            </h1>
            <p className="text-[#ffd700]/70 italic font-serif mt-2 text-lg">
              "Quality wares for the modern witch and wizard"
            </p>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mx-auto md:ml-auto mt-4 opacity-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center w-full">
          {productosHarryPotter.map((product) => (
            <div key={product.id} className="w-full flex justify-center">
              <Product
                product={product}
                selectedSize={selectedSize[product.id]}
                addToCart={addToCart}
                handleSizeChange={handleSizeChange}
                isDisabled={
                  product.nombre.includes('Hoodie') && !selectedSize[product.id]
                }
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-20 opacity-40 text-sm font-serif text-[#e2d1c3]">
          <p>Owl delivery available • 100% Dragon-safe materials</p>
        </div>
      </div>
    </div>
  );
}
