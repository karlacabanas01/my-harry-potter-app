import { useEffect, useState } from 'react';
import Image from 'next/image';

const Game = () => {
  const [snitchPosition, setSnitchPosition] = useState({
    top: '50%',
    left: '50%',
  });
  const [attempts, setAttempts] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  const moveSnitch = () => {
    const newTop = `${Math.floor(Math.random() * 90)}%`;
    const newLeft = `${Math.floor(Math.random() * 90)}%`;
    setSnitchPosition({ top: newTop, left: newLeft });
    setAttempts((prev) => prev + 1);
  };

  const handleSnitchClick = () => {
    setHasWon(true);
  };

  const resetGame = () => {
    setHasWon(false);
    setAttempts(0);
    setSnitchPosition({
      top: '50%',
      left: '50%',
    });
  };

  const maxAttempts = 20;

  useEffect(() => {
    if (attempts >= maxAttempts && !hasWon) {
      alert('¡Perdiste! No pudiste atrapar la Snitch a tiempo.');
      resetGame();
    }
  }, [attempts, hasWon]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <p className="absolute pangolin bottom-2 right-2 text-md bg-black bg-opacity-70 p-2 border border-gray-300 rounded-xl text-gray-200">
        Intentos: {attempts}
      </p>

      {hasWon && (
        <div className="absolute pangolin top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-90 p-4 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-[#d3a625]">
            ¡Felicitaciones!
          </h2>
          <p className="text-base mt-2 mb-2 text-[#d3a625]">
            ¡Has atrapado la Snitch Dorada!
          </p>
          <Image
            src="/img/harry-gana.avif"
            alt="Snitch Dorada"
            width={150}
            height={150}
            className="mx-auto rounded-lg filter drop-shadow-lg opacity-90"
          />
          <button
            className="mt-4 px-2 py-1 bg-[#946b2d] text-[#aaaaaa] rounded-lg hover:bg-[#726255] border-2 border-[#946b2d] transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={resetGame}
          >
            Jugar de nuevo
          </button>
        </div>
      )}

      {!hasWon && (
        <button
          className="absolute cursor-pointer transition-all duration-300 ease-in-out"
          style={{ top: snitchPosition.top, left: snitchPosition.left }}
          onMouseEnter={moveSnitch}
          onClick={handleSnitchClick}
        >
          <div className="relative w-30 h-30 sm:w-20 sm:h-20">
            <Image
              src="/img/snitch.webp"
              alt="Snitch Dorada"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default Game;
