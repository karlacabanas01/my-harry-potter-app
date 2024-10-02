import Image from 'next/image';
import { ProductoHarryPotter } from '@/app/utils/types';
import AddToCartButton from './add-cart-button';

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
  return (
    <div id="product">
      <div className="w-72 py-4 bg-gray-800 shadow-lg rounded-xl border-2 border-yellow-500 duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full">
        <div className="flex items-center justify-center">
          <Image
            src={product.imagen}
            alt={product.nombre}
            width={240}
            height={240}
            className="h-60 w-60 object-cover rounded-xl"
            quality={100}
          />
        </div>

        <div className="px-6 w-72 flex flex-col justify-center">
          <div className="flex items-center justify-center">
            <p className="text-lg font-bold break-words text-yellow-500 block capitalize mt-4">
              {product.nombre}
            </p>
          </div>

          <div className="flex items-center px-8 py-4">
            <p className="text-xl font-bold text-white cursor-auto">
              {new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP',
              }).format(product.precio)}
            </p>

            <AddToCartButton
              product={product}
              selectedSize={selectedSize}
              addToCart={() => addToCart(product, selectedSize)}
              isDisabled={isDisabled}
            />
          </div>

          {product.nombre.includes('Hoodie') && (
            <div>
              <label
                htmlFor={`size-${product.id}`}
                className="block text-sm font-medium text-white"
              >
                Elige tu talla:
              </label>
              <select
                id={`size-${product.id}`}
                value={selectedSize || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
                className="w-full mt-1 p-2 text-black border border-gray-300 rounded-md"
              >
                <option value="">Selecciona una talla</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
