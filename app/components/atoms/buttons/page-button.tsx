import React from 'react';

interface ButtonPageProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonPage: React.FC<ButtonPageProps> = ({
  onClick,
  children,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        /* --- ESTILOS BASE MÁGICOS --- */
        relative overflow-hidden
        font-magic tracking-[0.2em] uppercase text-sm md:text-base
        py-3 px-10 rounded-full
        transition-all duration-500 ease-out
        border-2
        
        /* MODO CLARO (Pergamino) */
        bg-transparent border-[#4a3b2a] text-[#4a3b2a]
        hover:bg-[#4a3b2a] hover:text-[#f5deb3]
        
        /* MODO OSCURO (Galeón de Oro) */
        dark:bg-[#0a0a0a]/40 dark:backdrop-blur-sm
        dark:border-[#ffd700]/50 dark:text-[#ffd700]
        
        /* HOVER MÁGICO (Oscuro) */
        dark:hover:border-[#ffd700] 
        dark:hover:bg-[#ffd700] dark:hover:text-black
        dark:hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]
        
        /* INTERACCIÓN */
        active:scale-95 focus:outline-none
        transform hover:-translate-y-1
        
        /* Permite sobreescribir o añadir clases extras */
        ${className}
      `}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default ButtonPage;
