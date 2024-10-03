'use client';
import { HouseFlag } from './components/house/house-flag';
import './styles/globals.css';
import { useCart } from './components/cart/use-cart';
import CharactersPage from './components/characters';
import { Footer } from './components/footer';
import GameModal from './components/modal/game-modal';
import { QuizModal } from './components/modal/quiz-modal';
import { Navbar } from './components/navbar/navbar';
import Section from './components/section';
import SpellsList from './components/spells/spells-list';
import { usePage } from './usePage';
import ButtonPage from './components/button/button-page';
import { HomeSection } from './components/navbar/home-section';
import Loading from './loading';
import { Book } from './components/book/book';
import CartPrincipalList from './components/cart/cart-principal-list';

export default function Page() {
  const {
    showModalQuiz,
    showModalGame,
    toggleModalQuiz,
    toggleModalGame,
    isLoading,
  } = usePage();
  const { cart, addToCart, removeFromCart } = useCart();

  if (isLoading) return <Loading />;

  // useEffect(() => {
  //   throw new Error('Simulated error: Component mounted with an issue!');
  // }, []);

  return (
    <div className="text-white dark:bg-gray-100 dark:text-black flex flex-col justify-center min-h-screen">
      <main>
        <Navbar
          cart={cart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />

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
