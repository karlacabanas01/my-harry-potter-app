import { AiOutlineClose } from 'react-icons/ai';

import IconButton from '../button/button-icon';
import Game from '../game';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GameModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="relative bg-[url('/img/campo.jpeg')] bg-cover bg-center py-4 rounded-lg w-full max-w-3xl border border-gray-700 shadow-2xl">
        <div className="flex items-center justify-center relative">
          <h1
            className="pangolin text-3xl sm:text-2xl md:text-3xl text-gray-100 relative"
            style={{
              textShadow:
                '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 5px #d3a625, 0 0 10px #d3a625, 0 0 15px #d3a625',
            }}
          >
            <span className="absolute inset-0 bg-black opacity-50 rounded-lg blur-lg -z-10"></span>
            Catch the Golden Snitch!
          </h1>

          <IconButton
            onClick={onClose}
            icon={<AiOutlineClose />}
            className="absolute right-0 m-2 text-white hover:text-gray-400 transition-colors duration-150"
          />
        </div>
        <div className="p-4 text-white">
          <div className="relative w-full h-96">
            <Game />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
