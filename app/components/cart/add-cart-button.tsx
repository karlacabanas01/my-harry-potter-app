import { BiCartAdd } from 'react-icons/bi';

interface AddToCartButtonProps {
  product: any;
  selectedSize?: string;
  addToCart: (product: any, size?: string) => void;
  isDisabled: boolean;
  className?: string;
}

const AddToCartButton = ({
  product,
  selectedSize,
  addToCart,
  isDisabled,
  className,
}: AddToCartButtonProps) => {
  return (
    <button
      onClick={() => addToCart(product, selectedSize)}
      disabled={isDisabled}
      className={` ml-auto border-2 rounded-full p-2 items-center ${
        isDisabled
          ? 'border-gray-400 bg-gray-300 cursor-not-allowed'
          : 'border-white hover:bg-green-600'
      } transition duration-300`}
    >
      <BiCartAdd color="white" size={24} />
    </button>
  );
};

export default AddToCartButton;
