import React from 'react';

const CartButton = ({ cart, onClick }: { cart: any; onClick: () => void }) => {
  return (
    <div className="p-4">
      <button
        onClick={onClick}
        className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
      >
        🛒 {cart.length} artículos
      </button>
    </div>
  );
};

export default CartButton;
