'use client';
import { useState, useEffect } from 'react';

import BookCard from './book-card';
import Section from '../section';
import BookModal from './book-modal';

import { Book } from '@/app/utils/types';

const BooksList = ({ id }: { id: string }) => {
  const initialVisibleBooks = 4;
  const [booksData, setBooksData] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleBooks, setVisibleBooks] = useState(initialVisibleBooks);

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch('https://api.potterdb.com/v1/books');
      const { data } = await response.json();
      setBooksData(data);
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

  const adjustVisibleBooks = (amount: number) => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + amount);
  };

  return (
    <Section
      id={id}
      title="Libros"
      description="Sumérgete en las obras originales de J.K. Rowling que dieron origen al fenómeno global."
    >
      <div className="container mx-auto p-4">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-500 ease-in-out">
          {booksData.slice(0, visibleBooks).map((book) => (
            <BookCard key={book.id} book={book} openModal={openModal} />
          ))}
        </ul>

        <div className="flex justify-center mt-4 space-x-4">
          {visibleBooks < booksData.length && (
            <button
              onClick={() => adjustVisibleBooks(4)}
              className="px-6 py-2 bg-[#946b2d] text-white font-bold rounded-full shadow-lg hover:bg-[#b58e24] hover:shadow-[0_0_15px_#d3a625] transition-all duration-300 ease-in-out flex items-center gap-2"
            >
              Ver más
            </button>
          )}

          {visibleBooks > initialVisibleBooks && (
            <button
              onClick={() => setVisibleBooks(initialVisibleBooks)}
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
    </Section>
  );
};

export default BooksList;
