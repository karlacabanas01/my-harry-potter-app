'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { productosHarryPotter } from '@/app/utils/data';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const CartPrincipalList = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productosHarryPotter.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productosHarryPotter.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const product = productosHarryPotter[currentIndex];

  return (
    <div className="flex items-center justify-center w-full mx-auto py-4 px-6">
      <button onClick={handlePrevious}>
        <IoIosArrowDropleft size={30} />
      </button>

      <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 mx-2 sm:mx-4">
        <div className="flex-shrink-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] relative">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="object-contain w-full h-full rounded-2xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brown-900 mb-2 sm:mb-3 md:mb-4">
            {product.nombre}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-3 md:mb-4">
            {product.descripcion}
          </p>
          <button
            onClick={() => router.push('/cart')}
            className="w-full text-xl p-4 sm:w-1/2 md:w-2/3 mx-auto bg-yellow-400 rounded-3xl font-bold text-white hover:bg-black hover:border-2 hover:border-yellow-400 transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>

      <button onClick={handleNext}>
        <IoIosArrowDropright size={30} />
      </button>
    </div>
  );
};

export default CartPrincipalList;
