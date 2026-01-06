import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import IconButton from '../../atoms/buttons/icon-button';
import Quiz from '../../organisms/quiz';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export function QuizModal({ onClose, isOpen }: Props): JSX.Element {
  if (!isOpen) return <></>;

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-center items-center w-full h-full p-4 overflow-hidden"
      onClick={(e) => e.target === e.currentTarget && onClose()} // Cierra al hacer click fuera
    >
      {/* --- BACKDROP MÁGICO --- */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-fade-in" />

      {/* --- CONTENEDOR DEL MODAL (Cofre Secreto) --- */}
      <div
        className="
        relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
        bg-[#0d0d0d] border border-[#ffd700]/30 rounded-3xl
        shadow-[0_0_100px_rgba(0,0,0,1)] 
        transform transition-all animate-zoom-in
        custom-scrollbar
      "
      >
        {/* Decoración: Resplandor Dorado Superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#ffd700]/50 to-transparent" />

        {/* --- HEADER: Botón Cerrar --- */}
        <div className="sticky top-0 z-20 flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-[#ffd700] hover:rotate-90 transition-all duration-300"
          >
            <AiOutlineClose size={28} />
          </button>
        </div>

        {/* --- CONTENIDO --- */}
        <div className="flex flex-col items-center p-6 md:p-10 space-y-8">
          {/* El Sombrero con Animación de Levitación y Brillo */}
          <div className="relative group">
            {/* Aura dorada detrás del sombrero */}
            <div className="absolute inset-0 bg-[#ffd700] opacity-10 blur-[60px] rounded-full group-hover:opacity-20 transition-opacity" />

            <div className="relative animate-[float_4s_ease-in-out_infinite]">
              <Image
                src="/img/hat.png"
                alt="Sorting Hat"
                width={220}
                height={220}
                className="drop-shadow-[0_20px_30px_rgba(255,215,0,0.2)]"
              />
            </div>
          </div>

          {/* Título de la Ceremonia */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-5xl font-magic im-fell-english text-[#ffd700] tracking-widest">
              The Sorting Ceremony
            </h2>
            <p className="text-[#e2d1c3]/60 italic font-book">
              "A thousand years or more ago, I was newly sewn..."
            </p>
          </div>

          {/* --- EL COMPONENTE QUIZ --- */}
          {/* Asegúrate de que los estilos dentro de <Quiz /> también sean oscuros y dorados */}
          <div className="w-full bg-white/5 p-6 rounded-2xl border border-white/5">
            <Quiz />
          </div>
        </div>

        {/* Decoración Inferior */}
        <div className="p-6 text-center">
          <div className="h-[1px] w-24 bg-[#ffd700]/20 mx-auto" />
        </div>
      </div>
    </div>
  );
}
