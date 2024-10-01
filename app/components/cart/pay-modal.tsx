import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';
import { FaCcPaypal } from 'react-icons/fa';
import { SiMercadopago } from 'react-icons/si';

interface Props {
  show: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

export function PayModal({
  show,
  onClose,
  onPaymentSuccess,
}: Props): JSX.Element | null {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          <IoCloseCircleOutline size={30} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-black">Opciones de Pago</h2>

        <div className="space-y-4">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
            onClick={onPaymentSuccess}
          >
            <MdPayment size={24} className="mr-2" />
            Pagar con Tarjeta de Crédito
          </button>
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
            onClick={onPaymentSuccess}
          >
            <FaCcPaypal size={24} className="mr-2" /> Pagar con PayPal
          </button>
          <button
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
            onClick={onPaymentSuccess}
          >
            <SiMercadopago size={24} className="mr-2" />
            Pagar con Mercado Pago
          </button>
        </div>
      </div>
    </div>
  );
}
