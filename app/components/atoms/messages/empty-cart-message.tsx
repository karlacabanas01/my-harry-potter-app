import { TbShoppingCartOff } from 'react-icons/tb';

const EmptyCartMessage = ({ onClose }: { onClose: () => void }) => (
  <div className="flex flex-col items-center justify-center space-y-4 bg-gray-100 p-8 rounded-lg shadow-lg">
    <TbShoppingCartOff size={80} className="text-gray-500" />
    <p className="text-2xl font-semibold text-gray-800 text-center">
      Oops! Your cart is empty
    </p>
    <p className="text-base text-gray-600 text-center">
      You haven’t added anything to your cart yet. 🌟 Explore our amazing
      products and find something you’ll love! ❤️
    </p>
    <button
      onClick={onClose}
      className="bg-yellow-500 text-lg text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-400"
    >
      🔍 Browse Products
    </button>
  </div>
);

export default EmptyCartMessage;
