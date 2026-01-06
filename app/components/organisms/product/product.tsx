import { useState } from 'react';
import Image from 'next/image';
import { ProductoHarryPotter } from '@/app/utils/types';
import { AddToCartButton } from '../../atoms/buttons';
import { FaCheckCircle } from 'react-icons/fa'; // Icono para confirmación

interface ProductProps {
  product: ProductoHarryPotter;
  selectedSize?: string;
  addToCart: (product: ProductoHarryPotter, size?: string) => void;
  handleSizeChange: (productId: number, size: string) => void;
  isDisabled: boolean;
}

export function Product({
  product,
  selectedSize,
  addToCart,
  handleSizeChange,
  isDisabled,
}: ProductProps): JSX.Element {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  return (
    <div
      id="product"
      className="h-full w-full max-w-[300px] flex justify-center"
    >
      <div
        className="
          group relative flex flex-col justify-between w-full
          bg-[#121212]/70 backdrop-blur-md 
          border border-[#ffd700]/20 rounded-2xl 
          shadow-lg overflow-hidden
          transition-all duration-300 
          hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:border-[#ffd700]/60
        "
      >
        {/* --- 1. IMAGEN DEL PRODUCTO --- */}
        <div className="relative w-full aspect-square bg-[#0a0a0a]/50 p-4 flex items-center justify-center overflow-hidden">
          {/* Resplandor de fondo detrás de la imagen */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffd700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Image
            src={product.imagen}
            alt={product.nombre}
            width={240}
            height={240}
            className="object-contain drop-shadow-md z-10 transition-transform duration-500 group-hover:scale-110"
            quality={100}
          />

          {/* --- CONFIRMACIÓN VISUAL (Overlay) --- */}
          {/* Aparece encima de la imagen cuando se agrega al carrito */}
          <div
            className={`
              absolute inset-0 z-20 flex flex-col items-center justify-center 
              bg-black/80 backdrop-blur-sm transition-opacity duration-300
              ${showConfirmation ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
            `}
          >
            <FaCheckCircle className="text-4xl text-[#ffd700] mb-2 animate-bounce" />
            <span className="text-[#ffd700] font-serif font-bold tracking-wide">
              Added to Cart!
            </span>
          </div>
        </div>

        {/* --- 2. INFORMACIÓN --- */}
        <div className="p-5 flex flex-col gap-3">
          {/* Título */}
          <h3 className="text-xl font-bold font-serif im-fell-english text-[#ffd700] leading-tight text-center min-h-[3rem] flex items-center justify-center">
            {product.nombre}
          </h3>

          {/* Selector de Talla (Si aplica) */}
          {product.nombre.includes('Hoodie') && (
            <div className="w-full">
              <label
                htmlFor={`size-${product.id}`}
                className="block text-xs font-serif uppercase tracking-widest text-gray-400 mb-1 ml-1"
              >
                Select Robe Size:
              </label>
              <div className="relative">
                <select
                  id={`size-${product.id}`}
                  value={selectedSize || ''}
                  onChange={(e) => handleSizeChange(product.id, e.target.value)}
                  className="
                    w-full appearance-none
                    bg-[#1a1a1a] text-[#e2d1c3] font-serif
                    border border-[#ffd700]/30 rounded-lg 
                    py-2 px-3 
                    focus:outline-none focus:border-[#ffd700] focus:shadow-[0_0_10px_rgba(255,215,0,0.2)]
                    cursor-pointer transition-colors
                  "
                >
                  <option value="" className="bg-[#1a1a1a]">
                    Select Size...
                  </option>
                  <option value="S" className="bg-[#1a1a1a]">
                    Small
                  </option>
                  <option value="M" className="bg-[#1a1a1a]">
                    Medium
                  </option>
                  <option value="L" className="bg-[#1a1a1a]">
                    Large
                  </option>
                  <option value="XL" className="bg-[#1a1a1a]">
                    X-Large
                  </option>
                </select>
                {/* Flecha personalizada para el select */}
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[#ffd700]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Precio y Botón */}
          <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/10">
            <p className="text-xl font-bold font-serif text-white tracking-wide">
              {new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP',
              }).format(product.precio)}
            </p>

            {/* El botón AddToCartButton debe manejar sus propios estilos internos, 
                pero el contenedor aquí lo alinea */}
            <div className="transform transition-transform hover:scale-105 active:scale-95">
              <AddToCartButton
                product={product}
                selectedSize={selectedSize}
                addToCart={handleAddToCart}
                isDisabled={isDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
