import React, { useEffect, useState } from 'react';

import CardSpells from './spells-card';
import Section from '../section';

type Spell = {
  id: string;
  attributes: {
    name: string;
    effect: string;
    image: string | null;
    category: string;
    light: string | null;
  };
};

const SpellsList = ({ id }: { id: string }) => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [randomSpells, setRandomSpells] = useState<(Spell | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch('https://api.potterdb.com/v1/spells');
        const data = await response.json();
        setSpells(data.data);
      } catch (error) {
        console.error('Error fetching spells:', error);
      }
    };

    fetchSpells();
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
    <Section
      id={id}
      title="Hechizos"
      description="Conoce los hechizos que dieron forma al mundo mágico."
    >
      <main className="grid grid-cols-1 gap-4 p-4 pangolin mx-auto max-w-4xl md:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((index) => (
          <CardSpells
            key={index}
            title={
              randomSpells[index]?.attributes.name ??
              'Hover para ver un hechizo'
            }
            copy={randomSpells[index]?.attributes.effect ?? ''}
            onMouseEnter={() => handleMouseEnter(index)}
          />
        ))}
      </main>
    </Section>
  );
};

export default SpellsList;
