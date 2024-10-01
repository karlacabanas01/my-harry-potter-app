'use client';
import React, { useState } from 'react';
import { CartItem } from '@/app/utils/types';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { PayModal } from './pay-modal';
import { ThankYouModal } from './thankyou-modal';
import { IoMdAdd } from 'react-icons/io';

interface CartModalProps {
  cart: CartItem[]; // El carrito contiene CartItem[], no ProductoHarryPotter[]
  addToCart: (product: CartItem['producto'], size?: string) => void;
  removeFromCart: (productId: number, size?: string) => void; // Acepta la talla opcional
  onClose: () => void;
}

// TOTAL DE LA COMPRA
const CartModal = ({
  cart,
  addToCart,
  removeFromCart,
  onClose,
}: CartModalProps) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    size?: string;
  } | null>(null); // Producto seleccionado para eliminar

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setShowThankYouModal(true);
  };

  const handleCloseThankYouModal = () => {
    setShowThankYouModal(false);
  };

  const handlePayment = () => {
    setShowPaymentModal(true);
  };

  // Función para abrir el modal de confirmación
  const confirmDelete = (productId: number, size?: string) => {
    setSelectedProduct({ id: productId, size });
    setShowConfirmModal(true); // Muestra el modal de confirmación
  };

  // Función para manejar la confirmación de eliminación
  const handleConfirmDelete = () => {
    if (selectedProduct) {
      removeFromCart(selectedProduct.id, selectedProduct.size); // Elimina el producto
      setShowConfirmModal(false); // Cierra el modal
      setSelectedProduct(null); // Resetea el producto seleccionado
    }
  };

  // Función para cerrar el modal de confirmación
  const handleCloseModal = () => {
    setShowConfirmModal(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {!showThankYouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-lg shadow-lg p-6 max-w-lg w-full">
            <button
              className="ml-auto flex text-2xl text-gray-200 hover:text-red-500"
              onClick={onClose}
            >
              <IoCloseCircleOutline size={30} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-white">
              Carrito de Compras
            </h2>

            {cart.length > 0 ? (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={`${item.producto.id}-${item.size || 'default'}`} // Diferenciar por producto y talla
                    className="text-gray-700 border p-4 flex justify-between items-center bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.producto.nombre}
                      </h3>
                      <p>{item.producto.descripcion}</p>
                      <p className="my-2 font-semibold ">
                        Precio: ${item.producto.precio}
                      </p>
                      {item.size && <p>Talla: {item.size}</p>}{' '}
                      <p>Cantidad: {item.cantidad}</p>{' '}
                    </div>

                    <div className="flex items-center">
                      <button
                        onClick={() => addToCart(item.producto, item.size)} // Incrementa la cantidad
                        className="bg-green-500 text-white font-bold p-2 rounded-full mr-2"
                      >
                        <IoMdAdd />
                      </button>

                      {/* Botón para eliminar el producto, abre el modal de confirmación */}
                      <button
                        onClick={() =>
                          confirmDelete(item.producto.id, item.size)
                        } // Llama a la función para confirmar eliminación
                        className="bg-red-500 text-white font-bold p-2 rounded-full mr-2"
                      >
                        <MdDeleteOutline />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white">El carrito está vacío :( </p>
            )}

            <button
              onClick={handlePayment}
              className="bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-4"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              ¿Estás seguro de que deseas eliminar este producto?
            </h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      <PayModal
        show={showPaymentModal}
        onClose={handleClosePaymentModal}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <ThankYouModal
        show={showThankYouModal}
        onClose={handleCloseThankYouModal}
      />
    </>
  );
};

export default CartModal;
