import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface ThankYouModalProps {
  show: boolean;
  onClose: () => void;
}

export function ThankYouModal({
  show,
  onClose,
}: ThankYouModalProps): JSX.Element | null {
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

        <h2 className="text-2xl font-bold mb-4 text-black">
          Gracias por su compra
        </h2>
        <p className="text-center text-lg">
          Tu pago ha sido procesado con éxito.
        </p>
      </div>
    </div>
  );
}
