import React from 'react';

interface PaymentButtonProps {
  onClick: () => void;
  label: string;
  icon: React.ElementType;
  bgColor: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  onClick,
  label,
  icon: Icon,
  bgColor,
}) => (
  <button
    className={`${bgColor} text-white py-2 px-4 rounded w-2/3 flex items-center justify-center hover:opacity-90 transition`}
    onClick={onClick}
  >
    <Icon size={24} className="mr-2" />
    {label}
  </button>
);

export default PaymentButton;
