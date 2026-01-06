import React from 'react';

export function HomeSection(): JSX.Element {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/img/castillo-fenix.png')" }}
    >
      <div className="absolute inset-0 bg-black/30 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.8)_100%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto p-10 rounded-2xl border border-[#ffd700]/20 backdrop-blur-sm bg-black/40 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform hover:scale-[1.01] transition-transform duration-700">
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest font-serif mb-6 im-fell-english">
            <span className="bg-gradient-to-b from-[#ffd700] via-[#f0e68c] to-[#b8860b] text-transparent bg-clip-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              The Magical World
            </span>
            <br />
            <span className="text-white drop-shadow-md text-4xl md:text-6xl block mt-2">
              of Harry Potter
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 font-serif italic max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            "Explore the world of Harry Potter, from the beloved books to the
            thrilling movies, and the unforgettable characters."
          </p>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mx-auto mt-8 opacity-70" />
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-[#ffd700] opacity-70">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
