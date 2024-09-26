import React, { useEffect, useState } from 'react';

type CardProps = {
  title: string;
  copy: string;
  onMouseEnter: () => void;
};
type Spell = {
  id: number;
  hechizo: string;
  uso: string;
};

// Si no me convence puedo usar un btn https://codepen.io/fedeperin/pen/vYPNOxz
const CardSpells = ({ title, copy, onMouseEnter }: CardProps) => {
  return (
    <div
      className="relative flex items-end p-4 text-center bg-white shadow-xl rounded-lg border border-gray-400 card group overflow-hidden"
      onMouseEnter={onMouseEnter}
    >
      <div className="relative flex flex-col items-center w-full p-4 z-10 content transition-transform duration-700 ease-out transform translate-y-full group-hover:translate-y-0 bg-black bg-opacity-70">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="font-serif italic text-sm">{copy}</p>
      </div>
      <div className="absolute inset-0 bg-slate-500 bg-cover bg-center  transition-transform duration-700 ease-out transform group-hover:scale-110"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    </div>
  );
};

const ContentCardSpells: React.FC = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [randomSpells, setRandomSpells] = useState<(Spell | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    const fetchHechizos = async () => {
      try {
        const response = await fetch(
          'https://harry-potter-api.onrender.com/hechizos',
        );
        const data: Spell[] = await response.json();
        setSpells(data);
      } catch (error) {
        console.error('Error fetching hechizos:', error);
      }
    };

    fetchHechizos();
  }, []);

  const handleMouseEnter = (index: number) => {
    if (spells.length > 0) {
      const randomIndex = Math.floor(Math.random() * spells.length);
      const newRandomSpells = [...randomSpells];
      newRandomSpells[index] = spells[randomIndex];
      setRandomSpells(newRandomSpells);
    }
  };

  return (
    <main className="grid grid-cols-1 gap-4 p-4 pangolin mx-auto max-w-4xl md:grid-cols-2 lg:grid-cols-4">
      {[0, 1, 2, 3].map((index) => (
        <CardSpells
          key={index}
          title={randomSpells[index]?.hechizo ?? 'Hover para ver un hechizo'}
          copy={randomSpells[index]?.uso ?? ''}
          onMouseEnter={() => handleMouseEnter(index)}
        />
      ))}
    </main>
  );
};

export default ContentCardSpells;
