'use client';
import { HouseFlag } from './components/house/house-flag';
import './styles/globals.css';
import { useRouter } from 'next/navigation';
import { ProductList } from './components/cart/product-list';
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

export default function Page() {
  const router = useRouter();
  const {
    showModalQuiz,
    showModalGame,
    toggleModalQuiz,
    toggleModalGame,
    isLoading,
  } = usePage();
  const { cart, addToCart, removeFromCart } = useCart();

  // if (isLoading) return <Loading />;

  return (
    <div className="text-white dark:bg-gray-100 dark:text-black flex flex-col justify-center min-h-screen">
      <main>
        <Navbar
          cart={cart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
        <HomeSection />

        <div className="w-full text-center">
          {/* Sección de libros */}
          <ButtonPage
            onClick={() => router.push('/search')}
            className="mb-4 mt-8"
          >
            Buscar Libros y Películas
          </ButtonPage>

          {/* Lista de productos */}
          <ButtonPage onClick={() => router.push('/cart')} className="">
            Comprar articulos
          </ButtonPage>

          {/* Otras secciones */}
          <Section id="house" title="Casas de Hogwarts">
            <ButtonPage
              onClick={toggleModalQuiz}
              className="border-2 border-gray-500 pangolin hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
            >
              ¿Cuál es tu casa de Hogwarts?
            </ButtonPage>
            <HouseFlag />
          </Section>

          {/* Sección de hechizos */}
          <SpellsList id="spells" />

          {/* Sección de personajes */}
          <Section
            id="characters"
            title="Personajes"
            description="Conoce a los personajes que hicieron que la magia sucediera."
          >
            <CharactersPage />
          </Section>

          {/* Sección de juego */}
          <Section id="game" title="Juego">
            <ButtonPage onClick={toggleModalGame}>
              Atrapa la snich dorada
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
