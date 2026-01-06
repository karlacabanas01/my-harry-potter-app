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
import { BookAndMovies } from './components/organisms/book/book-and-movies';
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
    <div
      className="
    flex flex-col justify-center min-h-screen 
    transition-colors duration-500
    
    /* MODO CLARO */
    bg-[#f8f5f2] text-[#2a2a2a]
    
    /* MODO OSCURO */
    dark:bg-[#0f172a]  /* Fondo base: Azul Noche */
    dark:bg-stars      /* Capa superior: Tus estrellas CSS */
    dark:text-[#e2d1c3]
  "
    >
      <main>
        <Navbar />

        <HomeSection />

        <div className="flex flex-col w-full text-center">
          <BookAndMovies id="books" />
          <CartPrincipalList />

          <Section id="house" title="Hogwarts Houses">
            <ButtonPage onClick={toggleModalQuiz}>
              {"What's your Hogwarts house?"}
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

          <Section id="game" title="Golden Snitch Challenge">
            <div className="hidden lg:block">
              <ButtonPage onClick={toggleModalGame}>
                Catch the golden snitch
              </ButtonPage>
            </div>

            <div className="lg:hidden flex flex-col items-center justify-center p-6 mx-auto max-w-xs border border-[#ffd700]/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <span className="text-3xl mb-2">✨</span>
              <h3 className="text-[#ffd700] font-bold text-sm uppercase tracking-wider">
                Desktop Access Only
              </h3>
              <p className="text-gray-400 text-xs mt-2 italic">
                The Golden Snitch is too fast for touch screens. Please use a
                mouse to play!
              </p>
            </div>
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
