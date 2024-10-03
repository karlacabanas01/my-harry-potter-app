import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import IconButton from '../button/button-icon';
import { Book, Movie } from '@/app/utils/types';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa6';

interface Props {
  book: Book | Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookModal = ({ book, isOpen, onClose }: Props) => {
  const [loading, setLoading] = useState(true);
  if (!isOpen || !book) return null;

  const isBook = (book as Book).attributes.pages !== undefined;

  return (
    <div className="fixed almendra inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 ">
      <div className="relative max-h-[500px] bg-gray-800 p-6 my-6 rounded-lg w-5/6 sm:w-4/6 md:w-4/6 lg:w-4/6 xl:w-4/6 border border-gray-700 shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 overflow-y-auto">
        <div className="flex justify-end mb-4">
          <IconButton
            onClick={onClose}
            icon={<AiOutlineClose />}
            className="text-white hover:text-gray-400 transition-colors duration-150"
          />
        </div>
        <div className=" custom-scrollbar-y p-4 text-white flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
          <div className="flex flex-col md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 cinzel-title">
              {book.attributes.title}
            </h2>
            {isBook && (
              <p className="text-lg">
                Pages: {(book as Book).attributes.pages}
              </p>
            )}
            <p className="text-lg">
              Release Date: {book.attributes.release_date}
            </p>
            <p className="mt-2 text-gray-400">{book.attributes.summary}</p>
          </div>

          <div className="flex justify-center items-center w-full md:w-1/3 mt-4 md:mt-0">
            {book?.attributes || (book as Movie).attributes.poster ? (
              <>
                {loading && (
                  <div className="flex justify-center items-center">
                    <FaSpinner
                      className="animate-spin text-gray-500"
                      size={30}
                    />
                  </div>
                )}

                <Image
                  src={
                    (book as Movie).attributes.poster ??
                    (book as Book).attributes.cover
                  }
                  alt={book.attributes.title}
                  width={250}
                  height={250}
                  className="rounded-md object-cover"
                  onLoadingComplete={() => setLoading(false)}
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
