'use client';
import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import { questions } from '../../utils/data';

type House = 'Gryffindor' | 'Hufflepuff' | 'Ravenclaw' | 'Slytherin';

const HOUSE_COLORS: Record<
  House,
  { text: string; light: string; confetti: string[] }
> = {
  Gryffindor: {
    text: '#ae0001',
    light: 'rgba(174, 0, 1, 0.2)',
    confetti: ['#ae0001', '#740001', '#eeba30', '#d3a625'],
  },
  Slytherin: {
    text: '#2a623d',
    light: 'rgba(42, 98, 61, 0.2)',
    confetti: ['#1a472a', '#2a623d', '#5d5d5d', '#aaaaaa'],
  },
  Ravenclaw: {
    text: '#222f5b',
    light: 'rgba(34, 47, 91, 0.2)',
    confetti: ['#222f5b', '#0e1a40', '#946b2d', '#5d5d5d'],
  },
  Hufflepuff: {
    text: '#ecb939',
    light: 'rgba(236, 185, 57, 0.2)',
    confetti: ['#ecb939', '#f0c75e', '#372e29', '#726255'],
  },
};

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
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const handleAnswer = (house: House) => {
    setScores((prev) => ({ ...prev, [house]: prev[house] + 1 }));
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  const getHouseResult = (): House => {
    return Object.entries(scores).sort(([, a], [, b]) => b - a)[0][0] as House;
  };

  const resultHouse = showResult ? getHouseResult() : null;
  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div className="w-full max-w-xl mx-auto p-2">
      {!showResult ? (
        <div className="space-y-8 animate-fade-in">
          {/* --- BARRA DE PROGRESO MÁGICA --- */}
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-transparent via-[#ffd700] to-transparent transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* --- PREGUNTA --- */}
          <div className="text-center space-y-4">
            <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#ffd700]/50">
              Step {currentQuestion + 1} of {questions.length}
            </span>
            <h2 className="text-2xl md:text-3xl font-magic im-fell-english text-[#e2d1c3] leading-relaxed">
              {questions[currentQuestion].question}
            </h2>
          </div>

          {/* --- OPCIONES --- */}
          <div className="grid grid-cols-1 gap-4">
            {Object.entries(questions[currentQuestion].options).map(
              ([house, answer]) => (
                <button
                  key={house}
                  onClick={() => handleAnswer(house as House)}
                  className="
                  group relative w-full p-4 text-left
                  bg-[#1a1a1a]/40 border border-[#ffd700]/10 rounded-xl
                  transition-all duration-300 transform hover:-translate-y-1
                  hover:border-[#ffd700]/40 hover:bg-[#ffd700]/5
                "
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#ffd700]/20 group-hover:bg-[#ffd700] transition-colors" />
                    <span className="text-lg font-book italic text-[#e2d1c3]/80 group-hover:text-[#e2d1c3]">
                      {answer}
                    </span>
                  </div>
                </button>
              ),
            )}
          </div>
        </div>
      ) : (
        /* --- RESULTADO FINAL --- */
        <div className="relative py-10 px-6 text-center space-y-6 animate-zoom-in">
          {showConfetti && (
            <div className="fixed inset-0 pointer-events-none z-[110]">
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={200}
                recycle={false}
                colors={HOUSE_COLORS[resultHouse!].confetti}
              />
            </div>
          )}

          <div className="space-y-2">
            <p className="font-serif uppercase tracking-widest text-[#ffd700]/60">
              The hat has spoken...
            </p>
            <h2
              className="text-4xl md:text-6xl font-magic im-fell-english font-bold tracking-tighter"
              style={{
                color: HOUSE_COLORS[resultHouse!].text,
                textShadow: `0 0 20px ${HOUSE_COLORS[resultHouse!].light}`,
              }}
            >
              {resultHouse}
            </h2>
          </div>

          <div
            className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md"
            style={{
              boxShadow: `inset 0 0 40px ${HOUSE_COLORS[resultHouse!].light}`,
            }}
          >
            <p className="text-[#e2d1c3] italic font-book text-lg leading-relaxed">
              {/* Aquí podrías añadir una descripción breve según la casa */}
              "Where dwell the brave at heart, their daring, nerve, and chivalry
              set Gryffindors apart."
            </p>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="text-xs uppercase tracking-widest text-[#ffd700]/40 hover:text-[#ffd700] transition-colors underline underline-offset-8"
          >
            Take the test again
          </button>
        </div>
      )}
    </div>
  );
}
