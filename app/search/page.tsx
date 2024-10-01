'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import BookModal from '../components/book/book-modal';
import { ButtonMore } from '../components/button/button-more';
import LoadingSpinner from '../loading';
import { Book, Movie } from '../utils/types';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [, setBooks] = useState<Book[]>([]);
  const [, setMovies] = useState<Movie[]>([]);
  const [allItems, setAllItems] = useState<(Book | Movie)[]>([]);
  const [filteredItems, setFilteredItems] = useState<(Book | Movie)[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const booksResponse = await fetch(`https://api.potterdb.com/v1/books`);
        const booksData = await booksResponse.json();

        const moviesResponse = await fetch(
          `https://api.potterdb.com/v1/movies`,
        );
        const moviesData = await moviesResponse.json();

        const combinedItems = [...booksData.data, ...moviesData.data];

        combinedItems.sort((a, b) =>
          a.attributes.title
            .toLowerCase()
            .localeCompare(b.attributes.title.toLowerCase()),
        );

        setBooks(booksData.data);
        setMovies(moviesData.data);
        setAllItems(combinedItems);
        setFilteredItems(combinedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);

    if (searchQuery === '') {
      setFilteredItems(allItems);
    } else {
      const filtered = allItems.filter((item: Book | Movie) =>
        item.attributes.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredItems(filtered);
    }
  };

  const openModal = (book: Book) => {
    setSelectedBook(book);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-4">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
          onClick={() => router.push('/')}
        >
          Volver
        </button>
      </div>
      <h1 className="text-3xl text-white font-bold mb-6 text-center">
        Buscar Libros y Películas
      </h1>
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar libros o películas"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            >
              {((item as Movie).attributes.poster ||
                (item as Book).attributes.cover) && (
                <div className="flex justify-center items-center flex-col pb-4">
                  <Image
                    src={
                      (item as Movie).attributes.poster ??
                      (item as Book).attributes.cover
                    }
                    alt={item.attributes.title}
                    width={200}
                    height={300}
                    className="object-contain rounded-lg"
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2">
                {item.attributes.title}
              </h3>

              {(item as Book).attributes && (
                <ButtonMore
                  label="Abrir"
                  onClick={() => openModal(item as Book)}
                />
              )}
            </div>
          ))}
        </div>
      )}

      <BookModal book={selectedBook} isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default SearchPage;
