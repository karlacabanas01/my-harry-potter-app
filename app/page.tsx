'use client';

import './styles/globals.css';
import CharactersPage from './components/organisms/characters';
import { Footer } from './components/organisms/footer';
import GameModal from './components/molecules/modals/game-modal';
import { QuizModal } from './components/molecules/modals/quiz-modal';
import Section from './components/organisms/section';
import { usePage } from './usePage';
import ButtonPage from './components/atoms/buttons/page-button';
import Loading from './loading';
import { Book } from './components/organisms/book/book';
import SpellsList from './components/organisms/lists/spells-list';
import { HomeSection } from './components/molecules/navbar/home-section';
import CartPrincipalList from './components/organisms/cart/cart-principal-list';
import { Navbar } from './components/organisms/navbar';
import { HouseFlag } from './components/organisms/house';

export default function Page() {
  const {
    showModalQuiz,
    showModalGame,
    toggleModalQuiz,
    toggleModalGame,
    isLoading,
  } = usePage();

  if (isLoading) return <Loading />;

  // useEffect(() => {
  //   throw new Error('Simulated error: Component mounted with an issue!');
  // }, []);

  return (
    <div className="text-white dark:bg-gray-100 dark:text-black flex flex-col justify-center min-h-screen">
      <main>
        <Navbar />

        <HomeSection />

        <div className="flex flex-col w-full text-center">
          <Book id="books" />
          <CartPrincipalList />

          <Section id="house" title="Hogwarts Houses">
            <ButtonPage
              onClick={toggleModalQuiz}
              className="border-2 border-gray-500 pangolin hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
            >
              What's your Hogwarts house?
            </ButtonPage>
            <HouseFlag />
          </Section>

          <SpellsList id="spells" />

          <Section
            id="characters"
            title="Characters"
            description="Meet the characters who made magic happen."
          >
            <CharactersPage />
          </Section>

          <Section id="game" title="Game">
            <ButtonPage onClick={toggleModalGame}>
              Catch the golden snitch
            </ButtonPage>
          </Section>

          {/* Modales */}
          <QuizModal isOpen={showModalQuiz} onClose={toggleModalQuiz} />
          <GameModal isOpen={showModalGame} onClose={toggleModalGame} />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
