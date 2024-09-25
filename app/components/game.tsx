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
    const newTop = `${Math.floor(Math.random() * 90)}%`; // Random position for top (0-90%)
    const newLeft = `${Math.floor(Math.random() * 90)}%`; // Random position for left (0-90%)
    setSnitchPosition({ top: newTop, left: newLeft });
    setAttempts((prev) => prev + 1);
  };

  const handleSnitchClick = () => {
    setHasWon(true);
  };
  const maxAttempts = 10;

  useEffect(() => {
    if (attempts >= maxAttempts && !hasWon) {
      alert('¡Perdiste! No pudiste atrapar la Snitch a tiempo.');
      window.location.reload();
    }
  }, [attempts, hasWon]);

  return (
    <div className="relative w-screen h-screen bg-green-100 flex items-center justify-center">
      <h1 className="absolute top-4 left-4 text-2xl font-bold text-gray-700">
        ¡Atrapa la Snitch Dorada!
      </h1>
      <p className="absolute top-16 left-4 text-lg text-gray-600">
        Intentos: {attempts} (No se puede atrapar la Snitch)
      </p>

      {hasWon && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-green-500">
            ¡Felicitaciones!
          </h2>
          <p className="text-xl mt-4">¡Has atrapado la Snitch Dorada!</p>
          <button
            className="mt-6 px-4 py-2 bg-[#946b2d] text-white rounded-xl hover:bg-[#726255] border-4 border-[#946b2d] transition-all duration-300 ease-in-out"
            onClick={() => window.location.reload()} // Reinicia el juego al hacer clic
          >
            Jugar de nuevo
          </button>
        </div>
      )}

      {!hasWon && (
        <div
          className="absolute cursor-pointer transition-all duration-300 ease-in-out"
          style={{ top: snitchPosition.top, left: snitchPosition.left }}
          onMouseEnter={moveSnitch}
          onClick={handleSnitchClick}
        >
          <Image
            src="/img/snitch.webp"
            alt="Snitch Dorada"
            width={180}
            height={180}
          />
        </div>
      )}
    </div>
  );
};

export default Game;
