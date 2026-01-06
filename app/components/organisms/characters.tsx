'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { GiCrystalBall } from 'react-icons/gi'; // Icono místico para el placeholder
import CharacterModal from '../molecules/modals/character-modal';
import { Character } from '@/app/utils';

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const res = await fetch('https://hp-api.onrender.com/api/characters');
        const data = await res.json();
        // Ahora NO filtramos, dejamos que pasen todos para mostrar el placeholder
        setCharacters(data.slice(0, 30));
      } catch (error) {
        console.error('Magic error:', error);
      }
    }
    void fetchCharacters();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-[#ffd700] font-magic text-2xl mb-8 tracking-[0.3em] uppercase opacity-80 text-center">
        Wizarding Collection
      </h2>

      <div
        className="flex overflow-x-auto space-x-5 py-10 px-4 w-full max-w-[1100px] no-scrollbar scroll-smooth"
        ref={carouselRef}
      >
        {characters.map((character) => (
          <button
            key={character.id || character.name}
            className="group relative flex-shrink-0 w-[160px] sm:w-[180px] aspect-[3/4] bg-[#121212] rounded-xl overflow-hidden border border-[#ffd700]/20 hover:border-[#ffd700] transition-all duration-300 shadow-lg hover:-translate-y-1"
            onClick={() => setSelectedCharacter(character)}
          >
            {/* Lógica de Imagen o Placeholder */}
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#1a1a1a] flex flex-col items-center justify-center">
              {character.image ? (
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="180px"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  <GiCrystalBall className="text-[#ffd700]/30 text-4xl mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-[#ffd700]/40 text-[10px] uppercase tracking-tighter leading-tight font-serif">
                    Portrait Missing in Library
                  </p>
                </div>
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10" />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
              <p className="text-[#ffd700] text-[8px] uppercase tracking-widest mb-0.5">
                {character.house || 'Wizard'}
              </p>
              <h3 className="text-white font-bold text-sm truncate">
                {character.name}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}
