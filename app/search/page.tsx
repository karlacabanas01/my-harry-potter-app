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
          className="text-yellow-400 bg-black border-2 border-yellow-400 px-4 py-2 rounded-2xl hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => router.push('/')}
        >
          Back to
        </button>
      </div>
      <h1 className="text-3xl text-white font-bold mb-6 text-center">
        Search for Books and Movies
      </h1>
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="For example: Harry Potter"
          className="w-full px-4 py-2 border border-gray-600 rounded-md mb-4"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col justify-between"
            >
              {((item as Movie).attributes.poster ||
                (item as Book).attributes.cover) && (
                <div className="flex justify-center items-center flex-col pb-4">
                  <div
                    className={
                      item.type === 'movie'
                        ? 'w-[220px] h-[330px] relative'
                        : 'w-[200px] h-[300px] relative p-6'
                    }
                  >
                    <Image
                      src={
                        (item as Movie).attributes.poster ??
                        (item as Book).attributes.cover
                      }
                      alt={item.attributes.title}
                      fill
                      className={
                        item.type === 'book'
                          ? 'object-contain rounded-lg p-4'
                          : 'object-contain rounded-lg'
                      }
                    />
                  </div>
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2 text-center">
                {item.attributes.title}
              </h3>

              {(item as Book).attributes && (
                <div className="flex justify-center">
                  <ButtonMore
                    label="Abrir"
                    onClick={() => openModal(item as Book)}
                  />
                </div>
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
