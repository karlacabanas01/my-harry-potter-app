'use client';
import React, { useState } from 'react';
import { CartItem } from '@/app/utils/types';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { PayModal } from './pay-modal';
import { ThankYouModal } from './thankyou-modal';
import { IoMdAdd } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { TbMoodSad, TbShoppingCartOff } from 'react-icons/tb';

interface CartModalProps {
  cart: CartItem[];
  addToCart: (product: CartItem['producto'], size?: string) => void;
  removeFromCart: (productId: number, size?: string) => void;
  onClose: () => void;
}

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
  } | null>(null);
  const router = useRouter();
  const handleClosePaymentModal = () => {};
  const clearCart = () => {
    cart.length = 0;
  };
  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setShowThankYouModal(true);
  };

  const handleCloseThankYouModal = () => {
    setShowThankYouModal(false);
    setShowPaymentModal(false);
    setShowConfirmModal(false);

    clearCart();
  };

  const handlePayment = () => {
    setShowPaymentModal(true);
  };

  const confirmDelete = (productId: number, size?: string) => {
    setSelectedProduct({ id: productId, size });
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      removeFromCart(selectedProduct.id, selectedProduct.size);
      setShowConfirmModal(false);
      setSelectedProduct(null);
    }
  };

  const handleCloseModal = () => {
    setShowConfirmModal(false);
    setSelectedProduct(null);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.producto.precio * item.cantidad,
    0,
  );

  return (
    <>
      {!showThankYouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-2xl shadow-lg px-6 py-4 max-w-2xl w-full ">
            <button
              className="ml-auto flex text-2xl text-gray-200 hover:text-red-500"
              onClick={onClose}
            >
              <IoCloseCircleOutline size={30} />
            </button>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold mb-4 text-white">My Cart</h1>
            </div>
            {cart.length > 0 ? (
              <>
                <div className="max-h-96 overflow-y-auto bg-transparent px-2 scroll-smooth">
                  {cart.map((item) => (
                    <div
                      key={item.producto.id}
                      className="flex flex-col md:flex-row justify-between items-center mr-2 mb-4 p-4 border-b border-gray-200 bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center w-full md:flex-grow">
                        <img
                          src={item.producto.imagen}
                          alt={item.producto.nombre}
                          className="w-16 h-16 md:w-24 md:h-24 mr-4 rounded-lg"
                        />
                        <div>
                          <span className="text-lg font-bold text-gray-700 block">
                            {item.producto.nombre}
                          </span>
                          <div className="flex items-center mt-2 mb-2">
                            <input
                              type="number"
                              value={item.cantidad}
                              min="1"
                              className="w-12 p-1 border border-gray-400 rounded mr-2 text-center text-gray-700"
                              readOnly
                            />
                            <span className="text-gray-500 text-sm md:text-base">
                              x{' '}
                              {item.producto.precio.toLocaleString('es-CL', {
                                style: 'currency',
                                currency: 'CLP',
                                minimumFractionDigits: 0,
                              })}
                            </span>
                          </div>
                          <hr className="border-gray-400 my-2" />
                          <span className="text-lg font-bold text-gray-800 my-4">
                            Total{' '}
                            {(
                              item.producto.precio * item.cantidad
                            ).toLocaleString('es-CL', {
                              style: 'currency',
                              currency: 'CLP',
                              minimumFractionDigits: 0,
                            })}
                          </span>

                          {item.size && (
                            <div className="text-sm text-gray-500 mt-1">
                              Size: {item.size}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-end w-full md:w-1/3">
                        <div className="flex items-center">
                          <button
                            onClick={() => addToCart(item.producto, item.size)}
                            className="bg-green-500 text-white font-bold p-2 rounded-full mr-2 hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                          >
                            <IoMdAdd />
                          </button>

                          <button
                            onClick={() =>
                              confirmDelete(item.producto.id, item.size)
                            }
                            className="bg-red-500 text-white font-bold p-2 rounded-full mr-2 hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
                          >
                            <MdDeleteOutline />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col justify-end items-end mt-4 w-full">
                  <div className="text-gray-300 text-xl font-semibold my-4">
                    Grand Total: ${total.toLocaleString('es-CL')}
                  </div>
                  <button
                    onClick={handlePayment}
                    className="bg-yellow-600 w-full font-bold py-2 px-4 rounded-xl mt-4 hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500"
                  >
                    Complete order
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-gray-400">
                  <TbShoppingCartOff size={60} />
                </div>

                <p className="text-xl text-white text-center">
                  Your cart is currently empty{' '}
                  <TbMoodSad className="inline-block ml-2" />
                </p>

                <button
                  onClick={() => router.push('/cart')}
                  className="bg-yellow-500 text-lg text-black font-bold py-3 px-6 rounded-xl mt-4 hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500"
                >
                  Buy items
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Are you sure you want to remove this product?
            </h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
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
