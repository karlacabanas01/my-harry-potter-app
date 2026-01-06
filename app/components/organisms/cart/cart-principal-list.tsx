'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { productosHarryPotter } from '@/app/utils/data';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';

const CartPrincipalList = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? productosHarryPotter.length - 1 : prevIndex - 1,
      );
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === productosHarryPotter.length - 1 ? 0 : prevIndex + 1,
      );
      setIsAnimating(false);
    }, 300);
  };

  const product = productosHarryPotter[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-3xl md:text-5xl font-serif im-fell-english text-center text-[#e2d1c3] mb-8 drop-shadow-lg">
        Magical <span className="text-[#ffd700]">Artifacts</span>
      </h2>

      <div
        className="
        relative flex flex-col md:flex-row items-center justify-between
        bg-[#121212]/80 backdrop-blur-md 
        border border-[#ffd700]/30 rounded-3xl 
        shadow-[0_0_50px_rgba(0,0,0,0.6)]
        overflow-hidden p-8 md:p-12 min-h-[500px]
      "
      >
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#ffd700] opacity-10 blur-[100px] rounded-full pointer-events-none" />

        <div
          className={`
            w-full md:w-1/2 flex justify-center items-center relative z-10
            transition-all duration-500 ease-in-out transform
            ${isAnimating ? 'opacity-0 -translate-x-10 blur-sm' : 'opacity-100 translate-x-0 blur-0'}
          `}
        >
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#ffd700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl" />

            <Image
              src={product.imagen}
              alt={product.nombre}
              fill
              className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div
          className={`
            w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-8 md:mt-0 space-y-6 z-10
            transition-all duration-500 ease-in-out delay-100 transform
            ${isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}
          `}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif im-fell-english text-[#ffd700] mb-2 leading-tight">
              {product.nombre}
            </h2>
            <div className="h-1 w-20 bg-[#ffd700]/50 rounded-full mx-auto md:mx-0 mb-4" />
          </div>

          <p className="text-lg text-gray-300 font-serif leading-relaxed italic opacity-90 max-w-md mx-auto md:mx-0">
            "{product.descripcion}"
          </p>

          <div className="pt-4">
            <button
              onClick={() => router.push('/cart')}
              className="
                group relative inline-flex items-center justify-center gap-3 px-8 py-3
                bg-transparent border border-[#ffd700] rounded-full
                text-[#ffd700] font-serif font-bold tracking-widest uppercase
                transition-all duration-300
                hover:bg-[#ffd700] hover:text-[#121212] hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]
              "
            >
              <FaShoppingCart className="group-hover:-rotate-12 transition-transform duration-300" />
              <span>View Collection</span>
            </button>
          </div>
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-[#ffd700]/40 hover:text-[#ffd700] hover:scale-110 transition-all duration-300 z-20 group"
          aria-label="Previous Item"
        >
          <FaChevronLeft size={40} className="drop-shadow-lg" />
          <span className="absolute inset-0 bg-[#ffd700]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-[#ffd700]/40 hover:text-[#ffd700] hover:scale-110 transition-all duration-300 z-20 group"
          aria-label="Next Item"
        >
          <FaChevronRight size={40} className="drop-shadow-lg" />
          <span className="absolute inset-0 bg-[#ffd700]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-3">
        {productosHarryPotter.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${idx === currentIndex ? 'bg-[#ffd700] scale-125 shadow-[0_0_10px_#ffd700]' : 'bg-gray-600 hover:bg-gray-400'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPrincipalList;
