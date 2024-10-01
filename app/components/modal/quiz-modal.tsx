import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';

import IconButton from '../button/button-icon';
import Quiz from '../quiz';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export function QuizModal({ onClose, isOpen }: Props): JSX.Element {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50  flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-[#c69b7c] rounded-lg shadow-xl dark:bg-gray-700 pb-8">
              <div className="flex items-center justify-end p-4 md:p-5 rounded-t ">
                <IconButton
                  onClick={onClose}
                  icon={<AiOutlineClose />}
                  className="text-white hover:text-amber-800 transition-colors duration-150"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-4 md:p-5 space-y-4">
                <Image
                  src="/img/hat.png"
                  alt="Hat of Harry Potter"
                  width={200}
                  height={200}
                />
                <Quiz />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
