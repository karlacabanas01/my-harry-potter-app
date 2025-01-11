'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Character {
  name: string;
  house: string;
  image: string;
}

export default function HousesPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<string>('Gryffindor');

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch(
        `https://hp-api.onrender.com/api/characters/house/${selectedHouse}`,
      );
      const data = await res.json();
      setCharacters(data);
    }

    fetchCharacters();
  }, [selectedHouse]);

  const handleHouseChange = (house: string) => {
    setSelectedHouse(house);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-10">
      <h1 className="text-3xl font-bold mb-8">Harry Potter Houses</h1>

      <div className="mb-8 flex justify-center">
        <select
          value={selectedHouse}
          onChange={(e) => handleHouseChange(e.target.value)}
          className="bg-gray-700 text-white p-3 rounded-lg"
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <div
            key={character.name}
            className="bg-gray-700 p-6 rounded-lg shadow-md"
          >
            <Image
              src={character.image}
              alt={character.name}
              className="mb-4 rounded-lg w-full h-60 object-cover"
              width={160}
              height={160}
            />
            <h2 className="text-xl font-bold text-center text-white">
              {character.name}
            </h2>
            <p className="mt-2 text-gray-400 text-center">
              House: {character.house || 'Unknown'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
