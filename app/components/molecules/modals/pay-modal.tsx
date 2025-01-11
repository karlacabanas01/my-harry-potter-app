import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';
import { FaCcPaypal } from 'react-icons/fa';
import { SiMercadopago } from 'react-icons/si';
import { PaymentButton } from '../../atoms';

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
      <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          <IoCloseCircleOutline size={30} />
        </button>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Payment Options
          </h2>
        </div>

        <div className="space-y-4 flex flex-col items-center">
          <PaymentButton
            onClick={onPaymentSuccess}
            label="Pay with Credit Card"
            icon={MdPayment}
            bgColor="bg-blue-500"
          />
          <PaymentButton
            onClick={onPaymentSuccess}
            label="Pay with PayPal"
            icon={FaCcPaypal}
            bgColor="bg-green-500"
          />
          <PaymentButton
            onClick={onPaymentSuccess}
            label="Pay with Mercado Pago"
            icon={SiMercadopago}
            bgColor="bg-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
