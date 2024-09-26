'use client';
import { useState, useEffect } from 'react';
import BookModal from './modal/book-modal';
import Image from 'next/image';
import { ButtonMore } from './button/button-more';
import { Book } from '../utils/types';

const BooksList = () => {
  const initialVisibleBooks = 4;
  const [detailedBooks, setDetailedBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleBooks, setVisibleBooks] = useState(initialVisibleBooks); // Estado para manejar los libros visibles

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch(
        'https://potterapi-fedeperin.vercel.app/es/books',
      );
      const data = await response.json();
      setDetailedBooks(data);
    }

    fetchBooks();
  }, []);

  const openModal = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  const showMoreBooks = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 4);

    setTimeout(() => {
      const viewLessButton = document.getElementById('view-less-button');
      if (viewLessButton) {
        viewLessButton.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); // Ajustar el scroll al botón
      }
    }, 100);
  };

  const showLessBooks = () => {
    setVisibleBooks(initialVisibleBooks);

    const firstBookElement = document.getElementById('books');
    if (firstBookElement) {
      firstBookElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-500 ease-in-out">
        {detailedBooks.slice(0, visibleBooks).map((book) => (
          <li
            key={book.title}
            id={book.title}
            className="p-4 border rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            {book.cover && (
              <div className="flex justify-center items-center flex-col pb-4">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <ButtonMore label="Abrir" onClick={() => openModal(book)} />
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-4 space-x-4">
        {visibleBooks < detailedBooks.length && (
          <button
            onClick={showMoreBooks}
            className="px-6 py-2 bg-[#946b2d] text-white font-bold rounded-full shadow-lg hover:bg-[#b58e24] hover:shadow-[0_0_15px_#d3a625] transition-all duration-300 ease-in-out flex items-center gap-2"
          >
            Ver más
          </button>
        )}

        {visibleBooks > initialVisibleBooks && (
          <button
            onClick={showLessBooks}
            className="px-6 py-2 bg-[#740001] text-white font-bold rounded-full shadow-lg hover:bg-[#b22222] hover:shadow-[0_0_15px_#4b0001] transition-all duration-300 ease-in-out flex items-center gap-2"
          >
            Ver menos
          </button>
        )}
      </div>

      <BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default BooksList;
