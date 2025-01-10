import { IoMdAdd } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { CartItem } from '@/app/utils/types';

interface Props {
  item: CartItem;
  addToCart: (product: CartItem['producto'], size?: string) => void;
  confirmDelete: (productId: number, size?: string) => void;
}

const CartItemComponent = ({ item, addToCart, confirmDelete }: Props) => {
  console.log('Recibiendo item en CartItemComponent:', item);
  const handleAddToCart = () => {
    console.log('Agregando al carrito:', item.producto.nombre, item.size);
    addToCart(item.producto, item.size);
  };

  return (
    <div className="flex flex-col mt-4 md:flex-row md:items-center justify-between p-4 bg-gray-100 rounded-xl shadow-md gap-4">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gray-100 flex-shrink-0">
        <img
          src={item.producto.imagen}
          alt={item.producto.nombre}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="flex-1 px-2">
        <span className="block text-lg font-bold text-gray-800 truncate">
          {item.producto.nombre}
        </span>
        <div className="flex items-center mt-1">
          <input
            type="number"
            value={item.cantidad}
            readOnly
            className="w-12 p-2 border border-gray-300 rounded text-center text-gray-700"
          />
          <span className="text-sm text-gray-500 ml-2">
            x{' '}
            {item.producto.precio.toLocaleString('es-CL', {
              style: 'currency',
              currency: 'CLP',
              minimumFractionDigits: 0,
            })}
          </span>
        </div>
        <span className="block text-base font-semibold text-gray-700 mt-2">
          Total:{' '}
          {(item.producto.precio * item.cantidad).toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
          })}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          <IoMdAdd size={20} />
        </button>
        <button
          onClick={() => confirmDelete(item.producto.id, item.size)}
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          <MdDeleteOutline size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItemComponent;
