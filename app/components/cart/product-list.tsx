import { useState } from 'react';
import { Product } from './product';
import { productosHarryPotter } from '@/app/utils/data';
import { ProductoHarryPotter } from '@/app/utils/types';

interface Props {
  addToCart: (product: ProductoHarryPotter, size?: string) => void;
}

export function ProductList({ addToCart }: Props) {
  const [selectedSize, setSelectedSize] = useState<{ [key: number]: string }>(
    {},
  );

  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSize((prevState) => ({
      ...prevState,
      [productId]: size,
    }));
  };

  return (
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
  );
}
