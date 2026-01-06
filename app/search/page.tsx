'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaSearch, FaBook, FaFilm } from 'react-icons/fa'; // Necesitarás react-icons

import BookModal from '../components/molecules/modals/book-modal';
import LoadingSpinner from '../loading';
import ButtonMore from '../components/atoms/buttons/more-button';
import { Book, Movie } from '../utils';
import BackButton from '../components/atoms/buttons/back-button';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<(Book | Movie)[]>([]);
  const [allItems, setAllItems] = useState<(Book | Movie)[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [booksResponse, moviesResponse] = await Promise.all([
          fetch('https://api.potterdb.com/v1/books'),
          fetch('https://api.potterdb.com/v1/movies'),
        ]);

        const booksData = await booksResponse.json();
        const moviesData = await moviesResponse.json();

        // Agregamos el tipo explícitamente para ayudar al renderizado
        const combinedItems = [
          ...booksData.data.map((item: any) => ({ ...item, type: 'book' })),
          ...moviesData.data.map((item: any) => ({ ...item, type: 'movie' })),
        ];

        combinedItems.sort((a, b) =>
          a.attributes.title
            .toLowerCase()
            .localeCompare(b.attributes.title.toLowerCase()),
        );

        setAllItems(combinedItems);
        setFilteredItems(combinedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    void fetchData();
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery === '') {
      setFilteredItems(allItems);
    } else {
      const filtered = allItems.filter((item) =>
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
    <div className="min-h-screen p-6 md:p-12 relative">
      {/* Fondo ambiental sutil si la página padre no lo tiene */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-black -z-10" />

      {/* Header y Botón Atrás */}
      <div className="max-w-7xl mx-auto mb-10 relative z-10">
        <div className="mb-8">
          <BackButton label="Return to Hogwarts" route="/" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2 text-[#e2d1c3] font-serif im-fell-english tracking-wide drop-shadow-lg">
          The Magical Archives
        </h1>
        <p className="text-center text-[#ffd700]/80 italic font-serif mb-10">
          "Words are, in my not-so-humble opinion, our most inexhaustible source
          of magic."
        </p>

        {/* --- BARRA DE BÚSQUEDA MÁGICA --- */}
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="text-[#ffd700] group-focus-within:text-white transition-colors duration-300" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for spells, books, or movies..."
            className="
              w-full pl-12 pr-4 py-4 
              bg-black/40 backdrop-blur-md 
              border-b-2 border-[#ffd700]/30 
              text-[#e2d1c3] placeholder-gray-500 font-serif text-lg
              focus:outline-none focus:border-[#ffd700] focus:bg-black/60
              focus:shadow-[0_4px_20px_rgba(255,215,0,0.2)]
              transition-all duration-300 rounded-t-lg
            "
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="
                group relative flex flex-col justify-between
                bg-[#121212]/80 backdrop-blur-sm
                border border-[#ffffff]/10 hover:border-[#ffd700]/60
                rounded-xl overflow-hidden
                transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
              "
            >
              {/* --- IMAGEN / PORTADA --- */}
              <div className="relative w-full aspect-[2/3] overflow-hidden bg-black/50">
                {/* Badge de Tipo (Libro o Película) */}
                <div className="absolute top-3 right-3 z-20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#ffd700]/30 flex items-center gap-2">
                  {item.type === 'book' ? (
                    <FaBook className="text-[#ffd700] text-xs" />
                  ) : (
                    <FaFilm className="text-[#ffd700] text-xs" />
                  )}
                  <span className="text-[10px] uppercase tracking-widest text-white font-bold">
                    {item.type === 'book' ? 'Book' : 'Movie'}
                  </span>
                </div>

                {(item as Movie).attributes.poster ||
                (item as Book).attributes.cover ? (
                  <Image
                    src={
                      (item as Movie).attributes.poster ??
                      (item as Book).attributes.cover
                    }
                    alt={item.attributes.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500 italic">
                    No image available
                  </div>
                )}

                {/* Gradiente oscuro abajo para que el texto se lea mejor si se superpone */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
              </div>

              {/* --- CONTENIDO --- */}
              <div className="p-5 flex flex-col flex-grow relative z-10 -mt-12">
                <h3 className="text-xl font-bold text-[#e2d1c3] font-serif mb-2 line-clamp-2 leading-tight group-hover:text-[#ffd700] transition-colors duration-300">
                  {item.attributes.title}
                </h3>

                {/* Información extra opcional (fecha, autor, etc.) */}
                <div className="flex-grow">
                  {/* Espacio reservado para info extra si la hubiera */}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex justify-center">
                  {item.type === 'book' ? (
                    <ButtonMore
                      label="Open Book"
                      onClick={() => openModal(item as Book)}
                      // Asegúrate de que tu ButtonMore acepte className o tenga estilos mágicos por defecto
                    />
                  ) : (
                    <span className="text-xs text-gray-500 italic font-serif">
                      Cinematic Archive
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredItems.length === 0 && !loading && (
        <div className="text-center py-20 opacity-60">
          <h2 className="text-2xl text-[#ffd700] font-serif mb-2">
            No magic found...
          </h2>
          <p className="text-gray-400">Try searching for a different spell.</p>
        </div>
      )}

      <BookModal book={selectedBook} isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default SearchPage;
