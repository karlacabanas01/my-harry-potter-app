import { useRouter } from 'next/navigation';
import ButtonPage from '../button/button-page';

export function Book(): JSX.Element {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center bg-black text-white py-16 px-8 my-8 mx-6 rounded-xl">
      <div className="w-1/2 grid grid-cols-2 gap-4 relative">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="/img/movie-book.jpg"
            alt="Portrait 2"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <img
            src="/img/movie-book-2.jpg"
            alt="Portrait 4"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-start px-8">
        <h1 className="text-5xl font-bold mb-4">
          Discover the World of Harry Potter: Books and Movies
        </h1>
        <p className="text-lg mb-8">
          Dive into the magical world of Hogwarts through the beloved books and
          blockbuster movies. Relive the story of The Boy Who Lived and his
          adventures.
        </p>
        <ButtonPage
          onClick={() => router.push('/search')}
          className="mb-4 mt-8 w-4/6 mx-auto"
        >
          Search for Books and Movies
        </ButtonPage>
      </div>
    </div>
  );
}
