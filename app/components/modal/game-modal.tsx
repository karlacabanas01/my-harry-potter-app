import IconButton from '../button/button';
import { AiOutlineClose } from 'react-icons/ai';
import Game from '../game';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GameModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative bg-gray-800 p-2 rounded-lg w-5/6 sm:w-4/6 md:w-4/6 lg:w-3/6 xl:w-2/6 border border-gray-700 shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="flex justify-end">
          <IconButton
            onClick={onClose}
            icon={<AiOutlineClose />}
            className="text-white hover:text-gray-400 transition-colors duration-150"
          />
        </div>
        <div className="p-4 text-white">
          <Game />
        </div>
      </div>
    </div>
  );
};

export default GameModal;
