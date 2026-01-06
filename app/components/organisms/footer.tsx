export function Footer(): JSX.Element {
  return (
    <footer className="relative mt-20 pb-10 px-4 border-t border-[#ffd700]/10 bg-black/40 backdrop-blur-md">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/50 to-transparent" />

      <div className="max-w-4xl mx-auto text-center pt-12">
        {/* Título de la Plataforma */}
        <h3 className="cinzel-title text-[#ffd700] text-xl tracking-[0.3em] mb-4 opacity-80 uppercase">
          The Wizarding World Archive
        </h3>

        {/* Disclaimer legal ficticio */}
        <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed max-w-2xl mx-auto mb-6 italic">
          This is a non-profit fan project created for educational purposes. All
          characters, names, and related indicia are trademarks of © Warner
          Bros. Entertainment Inc. and J.K. Rowling. No copyright infringement
          is intended.
        </p>

        {/* Créditos con tu nombre clave karcabcas */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-gray-400 text-[11px] uppercase tracking-widest font-serif">
          <span className="text-[#ffd700]/60">© 2026 KARCABCAS</span>
          <span className="hidden md:block text-[#ffd700]/30">|</span>
          <span className="hover:text-[#ffd700] transition-colors cursor-help">
            Mischief Managed
          </span>
          <span className="hidden md:block text-[#ffd700]/30">|</span>
          <span className="hover:text-[#ffd700] transition-colors">
            Developed by karcabcas
          </span>
        </div>

        {/* Detalle final del rayo */}
        <div className="mt-8 opacity-20 hover:opacity-100 transition-all duration-1000 cursor-default">
          <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">
            ⚡
          </span>
        </div>
      </div>
    </footer>
  );
}
