import { useRouter } from 'next/navigation';
import ButtonPage from '../button/button-page';

export function Book({ id }: { id: string }): JSX.Element {
  const router = useRouter();
  return (
    <div
      id={id}
      className="flex flex-col lg:flex-row lg:flex-wrap justify-between items-center bg-black text-white py-16 px-8 my-8 mx-6 rounded-xl"
    >
      <div className="w-full lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
        <div className="w-full h-auto flex justify-center items-center">
          <img
            src="/img/movie-book.jpg"
            alt="Portrait 2"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out  max-w-full xl:min-w-[250px]"
          />
        </div>
        <div className="hidden sm:flex w-full h-auto justify-center items-center lg:block">
          <img
            src="/img/movie-book-2.jpg"
            alt="Portrait 4"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out max-w-full xl:min-w-[250px]"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col justify-center items-start px-4 lg:px-8 mt-8 lg:mt-0">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
          Discover the World of Harry Potter: Books and Movies
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mb-8 text-center lg:text-left">
          Dive into the magical world of Hogwarts through the beloved books and
          blockbuster movies. Relive the story of The Boy Who Lived and his
          adventures.
        </p>
        <ButtonPage
          onClick={() => router.push('/search')}
          className="w-full sm:w-5/6 mx-auto lg:mx-0 lg:mt-8"
        >
          Search for Books and Movies
        </ButtonPage>
      </div>
    </div>
  );
}
