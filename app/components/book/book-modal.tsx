import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';

import IconButton from '../button/button-icon';

import { Book, Movie } from '@/app/utils/types';

interface Props {
  book: Book | Movie | null; // Acepta libros o películas
  isOpen: boolean;
  onClose: () => void;
}

const BookModal = ({ book, isOpen, onClose }: Props) => {
  if (!isOpen || !book) return null;

  const isBook = (book as Book).attributes.pages !== undefined; // Verificar si es un libro

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
          {/* Mostrar imagen del libro o película */}
          {book?.attributes || (book as Movie).attributes.poster ? (
            <div className="flex justify-center mb-4">
              <Image
                src={
                  (book as Movie).attributes.poster ??
                  (book as Book).attributes.cover
                }
                alt={book.attributes.title}
                width={150}
                height={150}
                className="rounded-md shadow-lg object-cover"
              />
            </div>
          ) : null}
          <h2 className="text-3xl font-bold mb-4 almendra">
            {book.attributes.title}
          </h2>

          {/* Mostrar solo si es un libro */}
          {isBook && (
            <p className="text-lg">Pages: {(book as Book).attributes.pages}</p>
          )}

          <p className="text-lg">
            Release Date: {book.attributes.release_date}
          </p>

          {/* Mostrar resumen tanto para libros como películas */}
          <p className="mt-2 text-gray-400">{book.attributes.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
