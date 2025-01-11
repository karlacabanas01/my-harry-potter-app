import { useRouter } from 'next/navigation';
import { ButtonPage } from '../../atoms/buttons';

export function BookAndMovies({ id }: { id: string }): JSX.Element {
  const router = useRouter();
  return (
    <div
      id={id}
      className="flex flex-col lg:flex-row justify-center items-center text-white py-16 px-8 my-8 mx-6 rounded-xl bg-transparent shadow-2xl border border-white/20"
    >
      <div className="w-full lg:w-1/2 grid grid-cols-1 gap-4">
        <div className="flex justify-center items-center">
          <img
            src="/img/movie-book.jpg"
            alt="Portrait 2"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-[300px] max-h-[400px] object-cover"
          />
        </div>

        <div className="hidden md:flex justify-center items-center">
          <img
            src="/img/movie-book-2.jpg"
            alt="Portrait 4"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-[300px] max-h-[400px] object-cover"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-4 lg:px-8 mt-8 lg:mt-0">
        <h1 className="text-2xl sm:text-2xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
          Discover the World of Harry Potter: Books and Movies
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mb-8 text-center lg:text-left">
          Dive into the magical world of Hogwarts through the beloved books and
          blockbuster movies. Relive the story of The Boy Who Lived and his
          adventures.
        </p>

        <ButtonPage
          onClick={() => router.push('/search')}
          className="w-full sm:w-6/6 mx-auto lg:mx-0 lg:mt-8"
        >
          Search Books and Movies
        </ButtonPage>
      </div>
    </div>
  );
}
