import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { questions } from '../utils/data';

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
  const [, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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
                  className="button-quiz im-fell-english "
                >
                  {answer}
                </button>
              ),
            )}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">¡Tu casa de Hogwarts es:</h2>
          <p className="text-4xl text-center font-bold tracking-widest text-green-700">
            {getHouseResult()}
          </p>

          <Confetti />
        </div>
      )}
    </div>
  );
}
