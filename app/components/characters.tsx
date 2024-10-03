'use client';
import React, { useEffect, useRef, useState } from 'react';
import CharacterModal from './modal/character-modal';
import Image from 'next/image';
import { Character } from '../utils/types';

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch('https://hp-api.onrender.com/api/characters');
      const data = await res.json();
      setCharacters(data);
    }

    fetchCharacters();
  }, []);

  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div
        className="flex overflow-x-auto space-x-4 sm:space-x-6 custom-scrollbar sm:px-2 sm:m-4 py-4 w-full max-w-[1200px] mx-auto"
        ref={carouselRef}
      >
        {characters.map(
          (character) =>
            character.image && (
              <button
                key={character.name}
                className="relative cursor-pointer shadow-xl mt-4 p-2 bg-gray-900 rounded-[20px] sm:rounded-[30px] flex flex-col items-center justify-center flex-shrink-0 border border-gray-200 w-[180px] sm:w-[150px] lg:w-[280px] transition-transform duration-300 hover:scale-110"
                onClick={() => handleCardClick(character)}
              >
                <div className="relative overflow-hidden w-[140px] h-[140px] sm:w-[120px] sm:h-[120px] lg:w-[190px] lg:h-[190px]">
                  <Image
                    src={character.image}
                    alt={character.name}
                    objectFit="contain"
                    width={140}
                    height={140}
                    className="w-full h-full object-contain pl-2 pr-2"
                  />
                </div>

                <h2 className="text-base sm:text-sm lg:text-lg font-bold text-center text-white mt-4">
                  {character.name}
                </h2>
              </button>
            ),
        )}
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
