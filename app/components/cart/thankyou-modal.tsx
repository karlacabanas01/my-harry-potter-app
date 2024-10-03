import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
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
      <div className="flex flex-col justify-center items-center bg-yellow-400 border-2 border-black rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-2xl text-black hover:text-red-500"
          onClick={onClose}
        >
          <IoCloseCircleOutline size={30} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-black">
          Thank you for your buy
        </h2>
        <p className="text-center text-lg text-black flex items-center justify-center">
          Your payment has been successfully processed{' '}
          <FaCheckCircle className="ml-2" color="green" size={24} />
        </p>
      </div>
    </div>
  );
}
