import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';

import { questions } from '../../utils/data';

type House = 'Gryffindor' | 'Hufflepuff' | 'Ravenclaw' | 'Slytherin';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    Gryffindor: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
    Slytherin: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [modalSize, setModalSize] = useState({ width: 0, height: 0 });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      // Establece el tamaño del modal una vez que esté disponible
      setModalSize({
        width: modalRef.current.clientWidth,
        height: modalRef.current.clientHeight,
      });
    }
  }, [showResult]); // Se ejecuta cuando se muestra el resultado

  useEffect(() => {
    if (showResult) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showResult]);

  const handleAnswer = (house: House) => {
    setScores((prevScores) => ({
      ...prevScores,
      [house]: prevScores[house] + 1,
    }));

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const getHouseResult = (): House => {
    const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);
    return sortedScores[0][0] as House;
  };

  return (
    <div className="w-full max-w-md m-4">
      {!showResult ? (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-950 cinzel-title">
            {questions[currentQuestion].question}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {Object.entries(questions[currentQuestion].options).map(
              ([house, answer]) => (
                <button
                  key={house}
                  onClick={() => handleAnswer(house as House)}
                  className="button-quiz im-fell-english"
                >
                  {answer}
                </button>
              ),
            )}
          </div>
        </div>
      ) : (
        <div
          ref={modalRef}
          className="relative bg-orange-200 p-6 rounded-md shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            ¡Tu casa de Hogwarts es:
          </h2>
          <p className="text-4xl text-center font-bold tracking-widest text-green-700">
            {getHouseResult()}
          </p>

          {showConfetti && modalSize.width > 0 && modalSize.height > 0 && (
            <Confetti
              width={modalSize.width}
              height={modalSize.height}
              numberOfPieces={150}
              recycle={false}
            />
          )}
        </div>
      )}
    </div>
  );
}
