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
    <div className="relative flex flex-col justify-center items-center text-white py-16 px-8 my-8 mx-6 rounded-xl bg-transparent shadow-2xl border border-white/20">
      <div className="flex items-center space-x-4 pb-4 px-6 sm:space-x-6 md:space-x-8 mx-2 sm:mx-4">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6 sm:space-y-0 mx-2 sm:mx-4">
          <div className="flex-shrink-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] relative">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="object-contain w-full h-full rounded-2xl transition-transform duration-500 ease-in-out"
            />
          </div>

          <div className="flex flex-col justify-center sm:flex-1 sm:space-y-4">
            <h2 className="hidden sm:text-2xl md:text-3xl font-bold text-brown-900 mb-2 sm:mb-3 md:mb-4 sm:block">
              {product.nombre}
            </h2>

            <p className="hidden sm:text-base md:text-lg text-gray-400 mb-2 sm:mb-3 md:mb-4 sm:block">
              {product.descripcion}
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center">
              <button
                onClick={() => router.push('/cart')}
                className="w-full max-w-xs sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto p-4 bg-yellow-400 rounded-3xl font-bold text-sm sm:text-base md:text-lg text-black hover:bg-black hover:text-white hover:border-2 hover:border-yellow-400 transition-all duration-300"
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:hidden">
        <button
          onClick={handlePrevious}
          className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all"
        >
          <IoIosArrowDropleft size={30} className="text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all"
        >
          <IoIosArrowDropright size={30} className="text-gray-600" />
        </button>
      </div>

      <button
        onClick={handlePrevious}
        className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
      >
        <IoIosArrowDropleft size={30} className="text-gray-600" />
      </button>
      <button
        onClick={handleNext}
        className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
      >
        <IoIosArrowDropright size={30} className="text-gray-600" />
      </button>
    </div>
  );
};

export default CartPrincipalList;
