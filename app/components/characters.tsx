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
    <div className="relative">
      <div
        className="flex overflow-x-scroll space-x-6 sm:space-x-10 custom-scrollbar sm:px-4 sm:m-6 py-6"
        ref={carouselRef}
      >
        {characters.map(
          (character) =>
            character.image && (
              <button
                key={character.name}
                className="relative cursor-pointer shadow-xl mt-4 p-2 bg-gray-900 rounded-[30px] sm:rounded-[40px] flex flex-col items-center justify-center flex-shrink-0 border border-gray-200 w-[250px] sm:w-[200px] lg:w-[280px] transition-transform duration-300 hover:scale-110"
                onClick={() => handleCardClick(character)}
              >
                <div className="relative overflow-hidden w-[190px] h-[190px]">
                  <Image
                    src={character.image}
                    alt={character.name}
                    objectFit="contain"
                    width={190}
                    height={190}
                    className="w-full h-full object-contain pl-2 pr-2"
                  />
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-center text-white mt-4">
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
