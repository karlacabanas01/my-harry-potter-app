import React, { useState, useMemo } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { PayModal } from './pay-modal';
import { ThankYouModal } from './thankyou-modal';
import CartItemComponent from './cart-item-component';
import EmptyCartMessage from './empty-cart-message';
import ConfirmDeleteModal from './confirm-delete-modal';
import { useCart } from '@/app/context/useCart';

interface CartModalProps {
  onClose: () => void;
}

const CartModal = ({ onClose }: CartModalProps) => {
  const { cart, addToCart, removeFromCart } = useCart(); // Utilizar directamente el estado global del carrito

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    size?: string;
  } | null>(null);

  const total = useMemo(
    () =>
      cart.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0),
    [cart],
  );

  const handlePayment = () => setShowPaymentModal(true);

  const handleDeleteRequest = (productId: number, size?: string) => {
    setSelectedProduct({ id: productId, size });
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      removeFromCart(selectedProduct.id); // Llama a la función del contexto para actualizar el carrito global
      setSelectedProduct(null);
    }
    setShowConfirmModal(false);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setShowThankYouModal(true); // Muestra el modal de agradecimiento
  };

  const handleThankYouModalClose = () => {
    setShowThankYouModal(false); // Cierra el modal de agradecimiento
    onClose(); // Cierra el CartModal
    cart.length = 0;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      {showThankYouModal ? (
        <ThankYouModal
          show={showThankYouModal}
          onClose={handleThankYouModalClose}
        />
      ) : (
        <div className="bg-gradient-to-br from-slate-100 via-slate-200 to-white rounded-2xl shadow-2xl px-8 py-10 max-w-2xl w-full relative">
          <button
            className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-red-500"
            onClick={onClose}
          >
            <IoCloseCircleOutline size={32} />
          </button>

          <h1 className="text-4xl font-extrabold text-center text-gray-800 drop-shadow-lg mb-8">
            Your Shopping Cart <span className="animate-bounce">🛒</span>
          </h1>

          {cart.length > 0 ? (
            <div className="bg-transparent px-2">
              {/* Contenedor de productos con scroll */}
              <div className="max-h-96 overflow-y-auto">
                {cart.map((item) => {
                  console.log('Renderizando item:', item); // Ver si se imprime
                  return (
                    <CartItemComponent
                      key={`${item.producto.id}-${item.size}`}
                      item={item}
                      addToCart={addToCart}
                      confirmDelete={handleDeleteRequest}
                    />
                  );
                })}
              </div>

              {/* Botón "Complete Order" fuera del contenedor de scroll */}
              <div className="mt-6">
                <div className="text-right mt-4 text-xl font-bold text-gray-800">
                  Grand Total:{' '}
                  <span className="text-green-600">
                    ${total.toLocaleString('es-CL')}
                  </span>
                </div>
                <button
                  onClick={handlePayment}
                  className="bg-yellow-500 w-full py-4 rounded-full shadow-lg text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition-transform transform hover:scale-105"
                >
                  Complete Order
                </button>
              </div>
            </div>
          ) : (
            <EmptyCartMessage onClose={onClose} />
          )}
        </div>
      )}

      {showConfirmModal && (
        <ConfirmDeleteModal
          onCancel={() => setShowConfirmModal(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
      <PayModal
        show={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default CartModal;
