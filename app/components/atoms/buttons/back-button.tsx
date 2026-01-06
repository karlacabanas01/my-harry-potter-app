import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

interface BackButtonProps {
  label?: string;
  route?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  label = 'Back',
  route = '/',
}) => {
  const router = useRouter();

  return (
    <div className="mb-6">
      <button
        onClick={() => router.push(route)}
        className="
          group relative flex items-center gap-3 px-5 py-2
          bg-[#0a0a0a]/30 backdrop-blur-sm 
          border border-[#ffd700]/30 rounded-full
          text-[#e2d1c3] font-serif tracking-[0.15em] uppercase text-sm font-bold
          transition-all duration-300 ease-out
          
          /* Efectos Hover */
          hover:bg-[#ffd700]/10 hover:border-[#ffd700] hover:text-[#ffd700]
          hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]
          hover:pr-7 /* Pequeño truco: aumenta el padding derecho al hover para dar sensación de movimiento */
        "
      >
        <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
          <FaArrowLeft className="text-xs" />
        </span>

        <span>{label}</span>
      </button>
    </div>
  );
};

export default BackButton;
