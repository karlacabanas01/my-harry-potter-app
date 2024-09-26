import { useEffect, useState } from 'react';

export function usePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showModalQuiz, setShowModalQuiz] = useState(false);
  const [showModalGame, setShowModalGame] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleModalQuiz = () => setShowModalQuiz(!showModalQuiz);
  const toggleModalGame = () => setShowModalGame(!showModalGame);

  return {
    isLoading,
    showModalQuiz,
    showModalGame,
    toggleModalQuiz,
    toggleModalGame,
  };
}
