import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { FaSpinner, FaBookOpen, FaCalendarAlt, FaScroll } from 'react-icons/fa'; // Iconos para decorar metadatos
import IconButton from '../../atoms/buttons/icon-button';
import { Book, Movie } from '@/app/utils/types';
import { useState } from 'react';

interface Props {
  book: Book | Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookModal = ({ book, isOpen, onClose }: Props) => {
  const [loading, setLoading] = useState(true);

  if (!isOpen || !book) return null;

  const isBook = (book as Book).attributes.pages !== undefined;

  // Función para cerrar si se hace click fuera del contenido (en el fondo oscuro)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
    >
      {/* Contenedor Principal: 
         - Quitamos el 'hover:scale' que mareaba.
         - Añadimos borde dorado sutil y sombra profunda.
         - Fondo oscuro pero no gris (#121212).
      */}
      <div
        className="
          relative w-full max-w-4xl max-h-[90vh] overflow-hidden 
          bg-[#121212] rounded-xl 
          border border-[#ffd700]/30 
          shadow-[0_0_50px_rgba(0,0,0,0.8)]
          flex flex-col
          animate-fade-in-up
        "
      >
        {/* --- HEADER: Título y Botón Cerrar --- */}
        <div className="flex items-start justify-between p-6 border-b border-white/10 bg-white/5">
          <h2 className="text-2xl md:text-4xl font-bold text-[#ffd700] font-serif im-fell-english tracking-wide pr-8">
            {book.attributes.title}
          </h2>

          <IconButton
            onClick={onClose}
            icon={<AiOutlineClose className="text-xl" />}
            className="text-gray-400 hover:text-white transition-colors duration-200 hover:rotate-90 transform"
          />
        </div>

        {/* --- BODY: Contenido Scrollable --- */}
        <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="flex flex-col-reverse md:flex-row gap-8">
            {/* 1. COLUMNA DE TEXTO */}
            <div className="flex-1 space-y-6 text-[#e2d1c3]">
              {/* Metadatos con Iconos */}
              <div className="flex flex-wrap gap-4 text-sm font-serif text-[#ffd700]/80 uppercase tracking-widest">
                <div className="flex items-center gap-2 bg-[#ffd700]/10 px-3 py-1 rounded-full">
                  <FaCalendarAlt />
                  <span>{book.attributes.release_date}</span>
                </div>

                {isBook && (
                  <div className="flex items-center gap-2 bg-[#ffd700]/10 px-3 py-1 rounded-full">
                    <FaBookOpen />
                    <span>{(book as Book).attributes.pages} Pages</span>
                  </div>
                )}
              </div>

              {/* Resumen */}
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="flex items-center gap-2 mb-2 text-[#ffd700] opacity-50">
                  <FaScroll />
                  <span className="text-xs uppercase tracking-widest font-bold">
                    Summary
                  </span>
                </div>
                <p className="text-lg leading-relaxed font-serif text-gray-300 italic">
                  "{book.attributes.summary}"
                </p>
              </div>

              {/* Botón Wiki (si existiera link en la API) o detalles extra */}
              {/* <div className="pt-4 border-t border-white/10">...</div> */}
            </div>

            {/* 2. COLUMNA DE IMAGEN (Poster/Cover) */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative group w-full max-w-[250px] aspect-[2/3] rounded-lg shadow-2xl overflow-hidden border-4 border-[#1a1a1a]">
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] z-10">
                    <FaSpinner className="animate-spin text-[#ffd700] text-3xl" />
                  </div>
                )}

                {/* Efecto de resplandor detrás de la imagen */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#ffd700] to-transparent opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />

                {(book as Movie).attributes.poster ||
                (book as Book).attributes.cover ? (
                  <Image
                    src={
                      (book as Movie).attributes.poster ??
                      (book as Book).attributes.cover
                    }
                    alt={book.attributes.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onLoadingComplete={() => setLoading(false)}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-800 text-gray-500 text-center p-4">
                    No visual record found
                  </div>
                )}
              </div>

              <span className="mt-3 text-xs text-gray-500 font-serif uppercase tracking-widest">
                {isBook ? 'Official Cover' : 'Movie Poster'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
