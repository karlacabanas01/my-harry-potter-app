interface ButtonMoreProps {
  label?: string;
  onClick: () => void;
}

export default function ButtonMore({
  label = 'View Details', // Valor por defecto por si acaso
  onClick,
}: ButtonMoreProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="
        group relative flex items-center justify-center gap-3 px-6 py-2
        bg-transparent border border-[#ffd700]/50 rounded-full
        text-[#ffd700] text-xs sm:text-sm font-serif tracking-[0.2em] uppercase font-bold
        transition-all duration-300 ease-out
        hover:bg-[#ffd700] hover:text-[#0f172a] hover:border-transparent
        hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:scale-105
      "
    >
      {/* Texto del botón */}
      <span>{label}</span>

      {/* Icono: Flecha mística simple */}
      {/* Usamos 'group-hover:translate-x-1' para que la flecha invite a entrar */}
      <svg
        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
}
