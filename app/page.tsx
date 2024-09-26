'use client';
import { HouseFlag } from './components/house/house-flag';
import CharactersPage from './components/characters';
import './styles/globals.css';
import BooksList from './components/books';
import Section from './components/section';
import Loading from './loading';
import IconButton from './components/button/button';
import { QuizModal } from './components/modal/quiz-modal';
import ContentCardSpells from './components/card/spells-card';
import GameModal from './components/modal/game-modal';
import { usePage } from './usePage';

export default function Page() {
  const {
    isLoading,
    showModalQuiz,
    showModalGame,
    toggleModalQuiz,
    toggleModalGame,
  } = usePage();

  return (
    <div className="text-white dark:bg-gray-100 dark:text-black flex flex-col justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <main className="flex justify-center items-center m-4">
          <div className="w-full text-center">
            {/* Sección de libros */}
            <Section
              id="books"
              title="Libros"
              description="Sumérgete en las obras originales de J.K. Rowling que dieron origen al fenómeno global."
            >
              <BooksList />
            </Section>

            {/* Sección de casas */}
            <h2 id="house" className="text-3xl font-bold mb-4 mt-12">
              Casas de Hogwarts
            </h2>
            <hr className="border-gray-400 my-8 border-t-2 w-1/2 mx-auto" />
            <IconButton
              onClick={toggleModalQuiz}
              icon={'¿Cuál es tu casa de Hogwarts?'}
              className="border-2 border-gray-500 pangolin hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
            />
            <HouseFlag />

            {/* Sección de hechizos */}
            <Section
              id="spells"
              title="Hechizos"
              description="Conoce los hechizos que dieron forma al mundo mágico."
            >
              <ContentCardSpells />
            </Section>

            {/* Sección de personajes */}
            <Section
              id="characters"
              title="Personajes"
              description="Conoce a los personajes que hicieron que la magia sucediera."
            >
              <CharactersPage />
            </Section>

            {/* Game */}
            <Section
              id="game"
              title="Juego"
              description="Atrapa la snich dorada"
            >
              <IconButton
                onClick={toggleModalGame}
                icon={'¿Atrapala la Snich dorada?'}
                className="border-2 border-gray-500 pangolin hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
              />
            </Section>

            <QuizModal isOpen={showModalQuiz} onClose={toggleModalQuiz} />
            <GameModal isOpen={showModalGame} onClose={toggleModalGame} />
          </div>
        </main>
      )}
    </div>
  );
}
