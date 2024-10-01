import React from 'react';

export function HomeSection(): JSX.Element {
  return (
    <section
      id="home"
      style={{ backgroundImage: "url('/img/castillo-fenix.png')" }}
      className="h-[850px] bg-cover bg-center text-center text-[#946b2d]"
    >
      <div className="container mx-auto py-32">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-[#946b2d] max-w-3xl mx-auto mt-28">
          <h1 className="text-5xl font-bold tracking-wider font-serif">
            El Mundo Mágico de Harry Potter
          </h1>
          <p className="text-lg mb-6 italic">
            Explora el mundo de Harry Potter, desde los amados libros hasta las
            emocionantes películas, y los inolvidables personajes.
          </p>
        </div>
      </div>
    </section>
  );
}
