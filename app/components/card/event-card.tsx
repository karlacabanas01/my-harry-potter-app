import Image from 'next/image';
import '../../styles/globals.css';

import React, { useEffect, useState } from 'react';

type Spell = {
  id: number;
  hechizo: string;
  uso: string;
};

const EventCard: React.FC = () => {
  const [spell, setSpell] = useState<Spell[]>([]);

  useEffect(() => {
    const fetchHechizos = async () => {
      try {
        const response = await fetch(
          'https://harry-potter-api.onrender.com/hechizos',
        );
        const data: Spell[] = await response.json();
        setSpell(data);
      } catch (error) {
        console.error('Error fetching hechizos:', error);
      }
    };

    fetchHechizos();
  }, []);

  return (
    <div className="flex flex-row justify-center items-center">
      {spell.map((spells: Spell) => (
        <div
          key={spells.id}
          className="flex justify-center items-center m-2 bg-[#0a0f24]"
        >
          <article className="relative w-[350px] h-[350px] rounded-lg shadow-lg overflow-hidden bg-white">
            <Image
              layout="fill"
              src="/img/castillo.png"
              alt="House"
              className="w-full h-full object-cover bg-cover bg-center "
            />

            <div className="absolute bottom-[0px] left-0 w-full p-6 bg-white transition-transform duration-500 ease-in-out transform hover:translate-y-[70px]">
              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  <span className="uppercase tracking-widest text-lg text-[#152536] font-bold mb-1">
                    {spells.hechizo}
                  </span>
                  <p className="text-[#152536b3] text-sm mb-1">{spells.uso}</p>
                </div>
                <Image
                  src="/img/sly.png"
                  alt="Flag"
                  width={45}
                  height={45}
                  className="ml-4"
                />
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
