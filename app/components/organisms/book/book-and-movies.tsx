import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Usaremos Next/Image para mejor rendimiento
import { ButtonPage } from '../../atoms/buttons';

export function BookAndMovies({ id }: { id: string }): JSX.Element {
  const router = useRouter();

  return (
    <section id={id} className="relative py-20 px-4">
      {/* Elemento decorativo de fondo (un resplandor detrás del contenedor) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#ffd700] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div
        className="
          relative z-10 flex flex-col lg:flex-row items-center justify-between 
          max-w-6xl mx-auto p-8 lg:p-12
          bg-[#0a0a0a]/60 backdrop-blur-md 
          border border-[#ffd700]/20 rounded-3xl 
          shadow-[0_0_40px_rgba(0,0,0,0.5)]
          overflow-hidden
        "
      >
        {/* --- COLUMNA IMÁGENES (Estilo "Scattered Photos") --- */}
        <div className="w-full lg:w-1/2 relative h-[400px] flex justify-center items-center mb-10 lg:mb-0">
          {/* Imagen de Fondo (Libro/Película 2) */}
          <div className="absolute transform translate-x-4 translate-y-4 rotate-6 hover:rotate-12 transition-all duration-500 z-10">
            {/* Marco dorado alrededor de la imagen */}
            <div className="p-1 bg-gradient-to-br from-[#ffd700] to-[#8b4513] rounded-lg shadow-2xl">
              <Image
                src="/img/movie-book-2.jpg"
                alt="Harry Potter Movie"
                width={280}
                height={380}
                className="rounded opacity-80 hover:opacity-100 transition-opacity duration-300 object-cover"
              />
            </div>
          </div>

          {/* Imagen Principal (Libro/Película 1) */}
          <div className="absolute transform -translate-x-4 -translate-y-4 -rotate-6 hover:-rotate-0 transition-all duration-500 z-20 hover:scale-105">
            <div className="p-1 bg-gradient-to-tl from-[#ffd700] to-[#8b4513] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <Image
                src="/img/movie-book.jpg"
                alt="Harry Potter Book"
                width={280}
                height={380}
                className="rounded object-cover"
              />
            </div>
          </div>
        </div>

        {/* --- COLUMNA TEXTO --- */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:pl-12 text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif im-fell-english leading-tight">
            <span className="text-[#e2d1c3]">Discover the World of </span>
            <br />
            <span className="bg-gradient-to-r from-[#ffd700] via-[#f0e68c] to-[#b8860b] text-transparent bg-clip-text drop-shadow-sm">
              Books & Movies
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed font-serif italic opacity-90">
            "Dive into the magical world of Hogwarts through the beloved books
            and blockbuster movies. Relive the story of{' '}
            <span className="text-[#ffd700]">The Boy Who Lived</span> and his
            adventures."
          </p>

          <div className="pt-4 w-full lg:w-auto">
            <ButtonPage
              onClick={() => router.push('/search')}
              className="
                w-full lg:w-auto px-8 py-3 
                bg-transparent border-2 border-[#ffd700] text-[#ffd700] 
                font-bold font-serif tracking-widest text-lg rounded-full
                hover:bg-[#ffd700] hover:text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]
                transition-all duration-300 transform hover:-translate-y-1
              "
            >
              Explore Collection
            </ButtonPage>
          </div>
        </div>
      </div>
    </section>
  );
}
