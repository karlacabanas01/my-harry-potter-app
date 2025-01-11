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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="flex flex-col justify-center items-center m-4 bg-green-100 rounded-lg shadow-lg p-10 max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-2xl text-black hover:text-red-500"
          onClick={onClose}
        >
          <IoCloseCircleOutline size={30} />
        </button>

        <h2 className="text-3xl font-extrabold mb-6 text-center text-black">
          Thank You for Your Buy! 🎉
        </h2>
        <p className="text-center text-lg text-gray-700 flex items-center justify-center">
          Your payment was successfully processed{' '}
          <FaCheckCircle className="ml-2 text-green-500" size={28} />
        </p>
        <p className="text-center text-base mt-4 text-gray-600">
          You can now enjoy your product. Check your email for the receipt and
          details.
        </p>
      </div>
    </div>
  );
}
